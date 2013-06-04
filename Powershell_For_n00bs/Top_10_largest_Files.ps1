Get-ChildItem "C:\musics" -recurse `
| Sort-Object length -descending `
| select-object -first 10 
