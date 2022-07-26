import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import styles from './Home.style';
import { MainNavigationProps, RoutesList } from '../../routes/Routes.types';

export const Home: React.FC = () => {
  const { navigate } = useNavigation<MainNavigationProps>();

  function onPressSecondaryPage() {
    navigate(RoutesList.Secondary);
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <CustomButton title="Secondary Page" onPress={onPressSecondaryPage} />
    </View>
  );
};
