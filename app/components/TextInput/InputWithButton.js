import React from 'react'
import { TouchableHighlight, Text, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const InputWithButton = ({ onPress, buttonText, editable = true }) => (
  <View style={styles.container}>
    <TouchableHighlight onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableHighlight>
    <View style={styles.verticalLine}/>
    <TextInput
      placeholder='1000'
      style={styles.input}
      editable={editable}
    />
  </View>
)

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
}

export default InputWithButton
