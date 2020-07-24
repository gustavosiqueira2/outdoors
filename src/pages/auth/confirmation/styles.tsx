import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25
  },
  title_container: {
    marginTop: 5,
    marginBottom: 20
  },
  title: {
    fontSize: 48,
    fontFamily: 'Montserrat_700Bold'
  },
  subtitle: {
    fontSize: 28,
    fontFamily: 'Montserrat_400Regular'
  },
  input_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    flex: 7
  },
  button_container: {
    flex: 3,
    marginLeft: 4,
    marginBottom: 5,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 2
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  button_text: {
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular'
  }
});

export default styles;
