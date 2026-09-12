#!/usr/bin/env bash
# EthoStudy nat-exams FINALE — run when all 72 OCR files exist.
# Re-runs disputed solver packet emit; agent merges overrides, rebuilds bank,
# validates, builds the web app, commits, and reports.
set -euo pipefail
cd "$(dirname "$0")"
N=$(ls ocr/*.txt 2>/dev/null | wc -l)
if [ "$N" -lt 72 ]; then
  echo "NOT READY: only $N/72 OCR files"; exit 1
fi
rm -f items/*.json
python parse_papers.py
python resolve_disputed.py    # re-emits disputed.json for any NEW conflicts
ND=$(python -c "import json;print(len(json.load(open('disputed.json',encoding='utf-8'))))")
if [ "$ND" -gt 0 ]; then
  echo "DISPUTED: $ND new unresolved items — merge solver overrides.json before banking"; exit 2
fi
python build_bank.py
cd ../apps/web
npx vitest run src/data/nat-exams.test.ts
npm run build
cd ../..
git add -A
git commit -m "feat(nat-exams): FULL BANK — all 36 papers parsed, validated, built"
git push
echo "FINALE COMPLETE"
