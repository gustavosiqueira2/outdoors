import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width - 20,
    marginLeft: 10,
    backgroundColor: '#f4f4f4',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    alignItems: 'center',
    padding: 15
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10
  }
});

export default styles;
