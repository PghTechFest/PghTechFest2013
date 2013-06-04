 #Let's see what version is running
 get-host| Select-Object version, name   

 #That's not enough info!! GIVE ME MORE!
get-host| Select-Object * 

#Or we can use a powershell variable
$psversiontable  

