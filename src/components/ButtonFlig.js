import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { margins, verticalMargin } from '../utils/dimensions';

const ButtonFlig = ({title, onPress, backgroundColor}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => 
      [
        styles.button,
        {backgroundColor: pressed ? `${backgroundColor}CC` : backgroundColor}
      ]
    }>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    opacity: 0.7,
    width: 200,
    height: 70,
    padding: margins,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalMargin,
  },
  text: {
    color: colors.background,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

export default ButtonFlig;
