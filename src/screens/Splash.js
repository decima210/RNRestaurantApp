import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Image} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {Route} from '../common/Enums';

const Splash = ({navigation}) => {
  //splash screen will be shown for two seconds
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Route.WELCOME);
    }, 2000);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/Images/logo.png')}
        resizeMode={'center'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.colors.primary,
  },
  logo: {
    width: CommonStyles.width * 0.5,
    height: CommonStyles.width * 0.5,
  },
});

export default Splash;
