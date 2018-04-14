import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import styles from './styles'

// 将所有元素包裹在TouchableWithoutFeedback中，当点击键盘外时，dismiss the Keyboard
const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
    <View style={styles.container}>
      { children }
    </View>
  </TouchableWithoutFeedback>
)

Container.propTypes = {
  // container子元素定义
  // children: PropTypes.element
  // container只能有一个子元素 <Container><View/><Text/></Container>会警告
  // WARNING: Failed prop type: Invalid prop 'children' of type `array`
  // supplied to `Container`, expected a single ReactElement
  children: PropTypes.any
}

export default Container
