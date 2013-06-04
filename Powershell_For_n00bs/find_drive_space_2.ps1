#if you just want to run this on the computer you are on use this:
#$CompName = get-content env:computername

#of if you want to check a list of computers, make a txt file with the comp names in it
$CompName = Get-Content c:\devwork\servers.txt

Get-WMIObject Win32_LogicalDisk -filter "DriveType=3" -computer $CompName |
 Select SystemName,DeviceID,VolumeName,
 @{Name="Size(GB)";Expression={[decimal]("{0:N1}" -f($_.size/1gb))}},
 @{Name="Free Space(GB)";Expression={[decimal]("{0:N1}" -f($_.freespace/1gb))}},
 @{Name="Free Space(%)";Expression={"{0:P2}" -f(($_.freespace/1gb) / ($_.size/1gb))}} |
 sort-object "Free Space(%)" |
#If you want to export it to a csv, use this
#Export-CSV C:\DevWork\docs\drivesizes.csv

#or if you want to see it in a grid, use this:
 Out-GridView -Title "Drive Space"
 
 