import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const ClearButton = ({ text, onPress }) => (
  // 避免直接在TouchableOpacity上设置样式，因为
  // TouchableOpacity在不同平台表现不太一样
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.wrapper}>
      <Image
        resizeMode='contain'
        source={require('./images/icon.png')}
        style={styles.icon}
      />
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
)
ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
}

export default ClearButton
