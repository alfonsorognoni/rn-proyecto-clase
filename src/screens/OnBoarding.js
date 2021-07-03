// Librerias react-native
import React from 'react'
import { Text, SafeAreaView, StyleSheet, View, Image} from 'react-native';
// librerias de terceros
// ...
//componentes
import ButtonFlig from '../components/ButtonFlig';
// funciones utilitarias
import { colors } from '../utils/colors';
import { verticalMargin, width } from '../utils/dimensions';
import imagen from '../../assets/onboarding.png';

const OnBoarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Flig!</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imagen} />
      </View>
      <ButtonFlig title={'Viajá!'} onPress={() => console.log('Viajá')} backgroundColor={colors.primary} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: verticalMargin,
  },
  imageContainer: {
    width: width * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 600,
    height: 200,
    resizeMode: 'contain'
  }
})

export default OnBoarding;
