import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainNavigationProps, RoutesList } from '../../routes/Routes.types';
import styles from './Secondary.style';
import CustomButton from '../../components/CustomButton';

export const Secondary: React.FC = () => {
  const { navigate } = useNavigation<MainNavigationProps>();

  function onPressHomePage() {
    navigate(RoutesList.Home);
  }
  return (
    <View style={styles.container}>
      <Text>Secondary</Text>
      <CustomButton title="Home Page" onPress={onPressHomePage} />
    </View>
  );
};
