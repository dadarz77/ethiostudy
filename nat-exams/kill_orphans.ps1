# Kill ONLY the two watchdog-orphaned OCR workers (PIDs from 7:34 spawn-storm).
# Survivors: 5648 + 2340 (my clean crew of 2). Monitor + banker untouched.
$orphans = 7216, 4892
foreach ($id in $orphans) {
    try {
        Stop-Process -Id $id -Force -ErrorAction Stop
        Write-Output "killed orphan worker PID $id"
    } catch {
        Write-Output "PID $id not running ($($_.Exception.Message))"
    }
}
Start-Sleep -Seconds 2
$live = Get-CimInstance Win32_Process -Filter "Name='python.exe'" | Where-Object { $_.CommandLine -like '*ocr_batch*' }
Write-Output ("remaining ocr_batch workers: " + ($live | Measure-Object).Count)
$live | ForEach-Object { Write-Output ("  alive PID " + $_.ProcessId + " started " + $_.CreationDate) }