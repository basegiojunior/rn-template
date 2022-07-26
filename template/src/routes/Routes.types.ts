import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum RoutesList {
  Home = 'Home',
  Secondary = 'Secondary',
}

export type MainParamList = {
  [RoutesList.Home]: undefined;
  [RoutesList.Secondary]: undefined;
};

export type MainNavigationProps = NativeStackNavigationProp<MainParamList>;
