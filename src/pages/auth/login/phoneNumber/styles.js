import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8
  },
  phone_input_container: {
    flex: 8
  },
  send_button_container: {
    flex: 2,
    borderColor: '#2FFF9D',
    marginLeft: 2,
    marginBottom: 5,
    backgroundColor: '#fff'
  },
  send_button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
