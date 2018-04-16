import React from 'react'
import {
  View,
  Image,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const Icon = ({ checkmark, visible }) => {
  const iconStyle = [styles.icon]
  if (visible) {
    iconStyle.push(styles.iconVisible)
  }

  return (
    <View style={iconStyle}>
      {
        checkmark ?
          <Image
            style={styles.checkIcon}
            source={require('./images/check.png')}
            resizeMode='contain'
          /> :
          null
      }
    </View>
  )
}

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
}

export default Icon
