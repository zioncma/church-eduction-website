#!/usr/bin/env bash

set -Eeuo pipefail
umask 077

BACKUP_DIR=${BACKUP_DIR:-/common/backups}

if ! command -v supabase >/dev/null 2>&1; then
  printf 'Error: Supabase CLI is not installed or not on PATH.\n' >&2
  exit 1
fi

if [[ ! -f supabase/.temp/project-ref ]]; then
  printf 'Error: no linked Supabase project found. Run this from the project root after `supabase link`.\n' >&2
  exit 1
fi

if ! mkdir -p -- "$BACKUP_DIR"; then
  printf 'Error: cannot create backup directory: %s\n' "$BACKUP_DIR" >&2
  exit 1
fi

STAMP=$(date +%Y%m%d-%H%M%S)
SCHEMA_FILE="$BACKUP_DIR/supabase-schema-$STAMP.sql"
DATA_FILE="$BACKUP_DIR/supabase-data-$STAMP.sql"

printf 'Exporting schema to %s\n' "$SCHEMA_FILE"
supabase db dump --linked --file "$SCHEMA_FILE"
if [[ ! -s "$SCHEMA_FILE" ]]; then
  printf 'Error: schema dump is missing or empty: %s\n' "$SCHEMA_FILE" >&2
  exit 1
fi

printf 'Exporting data to %s\n' "$DATA_FILE"
supabase db dump --linked --data-only --use-copy --file "$DATA_FILE"
if [[ ! -s "$DATA_FILE" ]]; then
  printf 'Error: data dump is missing or empty: %s\n' "$DATA_FILE" >&2
  exit 1
fi

printf 'Backup complete. Verify and protect these sensitive files:\n%s\n%s\n' "$SCHEMA_FILE" "$DATA_FILE"
