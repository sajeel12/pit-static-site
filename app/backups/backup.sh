#!/bin/bash
# Automatic backup script for design changes - Now in Git!

BACKUP_DIR="app/backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
VERSION_FILE="$BACKUP_DIR/versions.txt"

# Create backup
BACKUP_NAME="backup_$TIMESTAMP.tar.gz"
tar -czf "$BACKUP_DIR/$BACKUP_NAME" app/src --exclude='app/node_modules' --exclude='app/dist' 2>/dev/null

# Log version
if [ -n "$1" ]; then
    echo "$TIMESTAMP | $1" >> "$VERSION_FILE"
    echo "✅ Backup v$TIMESTAMP created: $1"
else
    echo "$TIMESTAMP | Manual backup" >> "$VERSION_FILE"
    echo "✅ Backup v$TIMESTAMP created"
fi

echo "📦 Location: $BACKUP_DIR/$BACKUP_NAME"
echo "📝 Don't forget to: git add app/backups/ && git commit -m 'Backup v$TIMESTAMP'"
