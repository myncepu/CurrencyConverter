import React from 'react'
import { TouchableHighlight, Text, View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import color from 'color'

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true, textColor } = props
  const containerStyles = [styles.container]
  const underlayColor = color(styles.$buttonBackgroundColorBase)
    .darken(styles.$buttonBackgroundColorModifier)

  if (editable === false) {
    containerStyles.push(styles.containerDisabled)
  }

  const buttonTextStyles = [
    styles.buttonText,
    textColor ? { color: textColor } : null,
  ]
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.button}
      >
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border}/>
      <TextInput
        style={styles.input}
        { ...props }
      />
    </View>
  )
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  textColor: PropTypes.string,
}

export default InputWithButton
