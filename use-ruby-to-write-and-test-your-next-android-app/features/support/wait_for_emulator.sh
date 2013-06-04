until [ "`adb devices | grep "emulator-[0-9][0-9]*[[:space:]]*device"`" ]
do
  echo "waiting for emulator..."
  sleep 10
done
echo "emulator ready.  waiting a sec because emulators are fickle beasts..."
sleep 45
adb shell input keyevent 82 >/dev/null 2>&1
if [ "$?" == "0" ] ; then
  echo "Unlocked screen"
  set -e
  adb shell input keyevent 82 >/dev/null 2>&1
  adb shell input keyevent 4 >/dev/null 2>&1
  exit 0
fi
echo "Ready to roll"
