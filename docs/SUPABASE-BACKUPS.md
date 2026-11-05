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

From the repository root after linking the project, run the included script. It creates the backup directory if needed, writes files with restrictive permissions, and checks that both dumps are non-empty:

```sh
./scripts/backup-supabase.sh
```

To use a different destination, set `BACKUP_DIR` when invoking the script (the default is `/common/backups`):

```sh
BACKUP_DIR=/path/to/private/backups ./scripts/backup-supabase.sh
```

The default dump is schema-only; `--data-only` is needed to export table rows. The CLI excludes Supabase-managed schemas (including `auth` and `storage`) and extension schemas. This export is not a complete project snapshot, so read the [Supabase backup guide](https://supabase.com/docs/guides/platform/backup-restore) before relying on it for recovery.

## Back up Storage files separately

Database exports do not contain the actual files uploaded to Supabase Storage. Download the contents of each bucket separately using the Dashboard or Storage API, and save them under a dated directory such as:

```text
/common/backups/storage/YYYYMMDD-HHMMSS/
```

Keep a record of bucket names and any project configuration needed to recreate them. Storage metadata in the database is not a substitute for the file contents.

## Restore a database backup

Restore into a separate, disposable/test Supabase project or an otherwise empty database. Do not restore over production. Confirm the target project and files before starting: the schema dump must be restored before the matching data dump, using the same timestamp in both filenames.

Install `psql` (provided by PostgreSQL client tools) and obtain the target database connection string from the Supabase Dashboard. Keep the connection string private; do not commit it or put it in a script. Set it in your shell without adding it to shell history, then run the two files in order:

```sh
read -rsp 'Target database connection string: ' RESTORE_DATABASE_URL
printf '\n'
export RESTORE_DATABASE_URL
psql "$RESTORE_DATABASE_URL" -v ON_ERROR_STOP=1 -f /common/backups/supabase-schema-YYYYMMDD-HHMMSS.sql
psql "$RESTORE_DATABASE_URL" -v ON_ERROR_STOP=1 -f /common/backups/supabase-data-YYYYMMDD-HHMMSS.sql
unset RESTORE_DATABASE_URL
```

Replace `YYYYMMDD-HHMMSS` in both paths with the timestamp for the backup pair you want to restore. Stop if either command reports an error, and verify the restored schema and data before relying on the project. These dumps exclude Supabase-managed schemas (including `auth` and `storage`), so they do not restore users, bucket metadata, or Storage files. Recreate required project configuration and buckets, then upload the separately backed-up Storage files. Review the [Supabase backup and restore guide](https://supabase.com/docs/guides/platform/backup-restore) for project-specific recovery requirements.

## Protect and verify backups

- `/common/backups` must be on storage with enough free space. If it is local to one machine, it is not protected from that machine's loss; copy backups to another private location when possible.
- Treat dumps and Storage files as sensitive data. Restrict access and encrypt copies stored or transferred elsewhere. Never commit backups or secrets to Git.
- Check that each command completed successfully and that the resulting files are non-empty. Periodically test restoring into a separate/test project; do not test against production.
- Repeat manually on a regular schedule (for example, weekly and after significant data changes). Free Plan does not run these commands automatically.

## References

- [Supabase database backups and restore](https://supabase.com/docs/guides/platform/backup-restore)
- [Supabase CLI `db dump`](https://supabase.com/docs/reference/cli/supabase-db-dump)
