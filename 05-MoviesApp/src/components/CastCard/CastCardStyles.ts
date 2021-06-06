import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 17,
    opacity: 0.7,
    marginRight: 7,
  },
  imageContainer: {
    marginRight: 15
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10
  }
});
