import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  list: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
  },
  item: {
    backgroundColor: '#cce0ff',
    justifyContent: 'flex-start',
    padding: 5,
    width: Dimensions.get('window').width - 16,
    marginVertical: 8,
    marginLeft: 8,
    paddingLeft: 8,
  },
  title: {
    fontSize: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 20,
  }
});
