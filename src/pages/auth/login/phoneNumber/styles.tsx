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
    justifyContent: 'flex-end',
    marginLeft: 2,
    marginBottom: 5,
    borderRadius: 2
  },
  send_button: {
    height: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
