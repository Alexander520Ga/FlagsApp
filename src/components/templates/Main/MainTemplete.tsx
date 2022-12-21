import React from 'react';
import {View} from 'react-native';
import {IChildren, IMainTemplate} from '../../../interfaces/MainInterfaces';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import {styles} from './styles';

const MainTemplete: React.FC<IChildren> & IMainTemplate = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

MainTemplete.Body = Body;
MainTemplete.Header = Header;
MainTemplete.Footer = Footer;

export default MainTemplete;
