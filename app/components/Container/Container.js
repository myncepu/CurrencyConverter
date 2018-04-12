import React from 'react'
import PropTypes from 'prop-types'
import { KeyboardAvoidingView} from 'react-native'
import styles from './styles'

const Container = ({ children }) => (
  <KeyboardAvoidingView style={styles.container} behavior='padding'>
    { children }
  </KeyboardAvoidingView>
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
