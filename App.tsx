import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import StartingScreen from './src/screens/StartingScreen';
import MainScreen from './src/screens/MainScreen';
import WinnerScreen from './src/screens/winnerScreen/WinnerScreen';
import LoserScreen from './src/screens/loserScreen/LoserScreen';
import CountryProvider from './src/context/CountryContext/CountryProvider';
import LivesProvider from './src/context/LivesContext/LivesProvider';

type RootStackParamList = {
  StartingScreen: undefined;
  MainScreen: undefined;
  WinnerScreen: undefined;
  LoserScreen: undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [isResultActived, setIsResultActived] = React.useState<boolean>(false);
  const [reloadData, setReloadData] = React.useState<boolean>(false);
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);
  return (
    <CountryProvider>
      <LivesProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartingScreen">
            <Stack.Screen
              options={{
                headerShown: false,
                headerLeft: () => null,
              }}
              name="StartingScreen">
              {props => (
                <StartingScreen {...props} setIsCorrect={setIsCorrect} />
              )}
            </Stack.Screen>
            <Stack.Screen
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#DEEFE7',
                },
                headerTintColor: '#002333',
              }}
              name="MainScreen">
              {props => (
                <MainScreen
                  {...props}
                  isCorrect={isCorrect}
                  setIsCorrect={setIsCorrect}
                  reloadData={reloadData}
                  isResultActived={isResultActived}
                  setIsResultActived={setIsResultActived}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="WinnerScreen"
              options={{
                headerShown: false,
                headerLeft: () => null,
              }}>
              {props => <WinnerScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name="LoserScreen"
              options={{
                headerShown: false,
                headerLeft: () => null,
              }}>
              {props => (
                <LoserScreen
                  {...props}
                  setIsCorrect={setIsCorrect}
                  reloadData={reloadData}
                  setReloadData={setReloadData}
                  setIsResultActived={setIsResultActived}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </LivesProvider>
    </CountryProvider>
  );
};
export default App;
