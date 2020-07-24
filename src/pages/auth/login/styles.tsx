import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2FFF9D'
  },
  title_container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 30,
    paddingHorizontal: 25
  },
  title: {
    fontSize: 54,
    fontFamily: 'Montserrat_700Bold'
  },
  subtitle_container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 25,
    paddingTop: 5
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'Montserrat_400Regular'
  },
  login_container: {
    flex: 4,
    padding: 25,
    justifyContent: 'flex-end'
  },
  register: {
    fontSize: 16,
    marginTop: 12,
    fontFamily: 'Montserrat_400Regular'
  }
});

export default styles;
