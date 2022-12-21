import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3DD817',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainerText: {
    marginTop: 10,
  },
  text: {
    fontSize: 50,
    fontWeight: '900',
    color: '#002333',
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hearthBroken: {
    color: '#731702',
    fontSize: 50,
    marginTop: 10,
    marginRight: 8,
  },
  hearth: {
    color: 'red',
    fontSize: 50,
    marginTop: 10,
    marginRight: 8,
  },
  logo: {
    color: '#DEEFE7',
    fontSize: 100,
    marginTop: 10,
  },
  HomeIcon: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  homeButton: {
    backgroundColor: '#159A9C',
    justifyContent: 'center',
    alignItems: 'center',
    width: 67,
    height: 67,
    borderRadius: 7,
    marginTop: 40,
    shadowRadius: 5,
    shadowOpacity: 5,
    shadowColor: '#014040',
  },
  containerButtons: {
    marginTop: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  lvlStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#002333',
  },
  textoWaring: {
    color: '#002333',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textGood: {
    color: '#002333',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textCongratulations: {
    fontWeight: 'bold',
    color: '#002333',
    fontSize: 25,
  },
  textEmoji: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
