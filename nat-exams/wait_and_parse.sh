#!/usr/bin/env bash
# waits for ALL_DONE.flag or 72 txt files, then runs parse+build
cd ~/ethiopian-study/nat-exams || exit 1
while true; do
  n=$(ls ocr/*.txt 2>/dev/null | wc -l)
  if [ -f ALL_DONE.flag ] || [ "$n" -ge 72 ]; then
    echo "OCR_READY n=$n at $(date)"
    break
  fi
  sleep 60
done
python parse_papers.py
python build_bank.py
echo "PIPELINE_STEP2_DONE at $(date)"
