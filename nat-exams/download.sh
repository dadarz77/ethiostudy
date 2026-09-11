#!/bin/bash
# Download all ESSLCE past-paper PDFs from ethiobookreview.com (public exam papers)
cd "$(dirname "$0")" || exit 1
mkdir -p pdf
BASE=https://www.ethiobookreview.com/assets/exams
for subj in biology chemistry physics mathematics civics english aptitude history geography; do
  for yr in 2005 2006 2007 2008 2009 2010; do
    for kind in questions answers; do
      f="pdf/${subj}-${yr}-${kind}.pdf"
      [ -s "$f" ] && continue
      curl -sf --max-time 60 -o "$f" "$BASE/${subj}-${yr}-${kind}.pdf" -H "User-Agent: Mozilla/5.0" || rm -f "$f"
    done
  done
done
echo "DONE files=$(ls pdf | wc -l)"
du -sh pdf