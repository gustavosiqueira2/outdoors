import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  button_container: {
    position: 'absolute',
    right: 25,
    bottom: 25
  },
  button_background: {
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    shadowColor: "#2FFF9D",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});

export default style;
