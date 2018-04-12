import React from 'react'
import { View, ImageBackground, Image, Text } from 'react-native'
import styles from './styles'

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode='contain'
      source={require('./images/background.png')}
      style={styles.background}
    >
      <Image resizeMode='contain' source={require('./images/logo.png')} style={styles.logo} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
)

export default Logo
