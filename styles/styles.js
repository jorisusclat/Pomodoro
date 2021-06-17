import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(240, 21%, 10%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pomodoro:{
    color: "white",
    fontSize: 42,
    position: 'relative',
    top: -150,
  },
  pomodoroAlarm:{
    color: "white",
    fontSize: 42,
    position: 'relative',
    top: -100,
  },
  alarm:{
    color: "white",
    fontSize: 86,
    marginBottom: 100,
    textAlign: 'center',
  },
  pressable:{
    backgroundColor: 'hsl(244, 20%, 15%)',
    width: 165,
    height: 80,
    borderRadius: 15,
    padding: 18,
    position: 'relative',
    top: -50,
  },
  textButton:{
    color: "white",
    fontSize: 36,
    textAlign: 'center',
  },
  text:{
    color: "white",
    fontSize: 24,
    textAlign: 'center',
    position: 'relative',
    top: 50
  },
  textAlarm:{
    color: "white",
    fontSize: 24,
    textAlign: 'center',
    position: 'relative',
    top: 100
  }
});

export default styles;
