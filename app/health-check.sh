#!/bin/bash
# Quick health check for Vite dev server
for port in 5173 5174 5175 5176 5177; do
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:$port/ 2>/dev/null)
  if [ "$code" = "200" ]; then
    echo "✓ Vite running on http://localhost:$port"
    exit 0
  fi
done
echo "✗ Vite not responding on any port"
echo "  Restart with: npm run dev"
exit 1
