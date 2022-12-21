import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#3DD817',
    justifyContent: 'flex-start',
    width: 388,
    height: 150,
    paddingTop: 20,
    borderRadius: 20,
  },

  correctBox: {
    flexDirection: 'row',
    width: 388,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textCorrect: {
    color: '#002333',
    marginLeft: 20,
    fontSize: 32,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 50,
  },

  button: {
    width: 110,
    height: 40,
    backgroundColor: '#484FE5',
    borderRadius: 15,
    marginRight: 6,
  },
});
