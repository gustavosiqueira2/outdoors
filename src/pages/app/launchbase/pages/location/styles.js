import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map_container: {
    flex: 8,
    backgroundColor: '#1e1e1e',
    height: '100%',
    width: '100%'
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  marker_icon: {
    position: 'absolute',
    top: '48.5%',
    left: '42.5%'
  }
});

export default styles;
