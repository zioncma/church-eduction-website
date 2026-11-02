# Supabase backups (Free Plan)

Supabase Free Plan does not include scheduled project backups. Make manual exports regularly and keep them outside this repository. The commands below write database exports to `/common/backups` on the machine where they run.

## One-time setup

1. Install the [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started).
2. Sign in and link this local project to the correct Supabase project:

   ```sh
   supabase login
   supabase link --project-ref YOUR_PROJECT_REF
   ```

   Find the project reference in the Supabase Dashboard URL. The CLI may ask for the database password; retrieve/reset it in the dashboard if needed. Do not put credentials in this repository.
3. Make sure `/common/backups` exists and is writable by your user:

   ```sh
   mkdir -p /common/backups
   ```

## Create a database backup

Run from the directory containing the linked Supabase project configuration. This produces a schema dump and a separate data dump, both timestamped:

```sh
BACKUP_DIR=/common/backups
STAMP=$(date +%Y%m%d-%H%M%S)
mkdir -p "$BACKUP_DIR"
supabase db dump --linked --file "$BACKUP_DIR/supabase-schema-$STAMP.sql" && \
  supabase db dump --linked --data-only --use-copy --file "$BACKUP_DIR/supabase-data-$STAMP.sql"
```

The default dump is schema-only; `--data-only` is needed to export table rows. The CLI excludes Supabase-managed schemas (including `auth` and `storage`) and extension schemas. This export is not a complete project snapshot, so read the [Supabase backup guide](https://supabase.com/docs/guides/platform/backup-restore) before relying on it for recovery.

## Back up Storage files separately

Database exports do not contain the actual files uploaded to Supabase Storage. Download the contents of each bucket separately using the Dashboard or Storage API, and save them under a dated directory such as:

```text
/common/backups/storage/YYYYMMDD-HHMMSS/
```

Keep a record of bucket names and any project configuration needed to recreate them. Storage metadata in the database is not a substitute for the file contents.

## Protect and verify backups

- `/common/backups` must be on storage with enough free space. If it is local to one machine, it is not protected from that machine's loss; copy backups to another private location when possible.
- Treat dumps and Storage files as sensitive data. Restrict access and encrypt copies stored or transferred elsewhere. Never commit backups or secrets to Git.
- Check that each command completed successfully and that the resulting files are non-empty. Periodically test restoring into a separate/test project; do not test against production.
- Repeat manually on a regular schedule (for example, weekly and after significant data changes). Free Plan does not run these commands automatically.

## References

- [Supabase database backups and restore](https://supabase.com/docs/guides/platform/backup-restore)
- [Supabase CLI `db dump`](https://supabase.com/docs/reference/cli/supabase-db-dump)
