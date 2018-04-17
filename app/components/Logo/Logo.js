import React, { Component } from 'react'
import {
  View,
  Text,
  Keyboard,
  Animated,
  StyleSheet,
  Platform,
} from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const ANIMATIONN_DURATION = 250

class Logo extends Component {
  static propTypes = {
    tintColor: PropTypes.string,
  }

  constructor(porps) {
    super(porps)

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize)
    this.imageWidth = new Animated.Value(styles.$largeImageSize)
  }

  componentDidMount () {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did'

    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this._keyboardDidShow
    )
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this._keyboardDidHide
    )
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  _keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATIONN_DURATION,
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATIONN_DURATION,
      })
    ]).start()
  }

  _keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATIONN_DURATION,
      }),
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATIONN_DURATION,
      })
    ]).start()
  }

  render() {
    const containerImageStyle = [
      styles.background,
      {
        width: this.containerImageWidth,
        height: this.containerImageWidth,
      },
    ]

    const imageStyle = [
      styles.logo,
      {
        width: this.imageWidth,
        height: this.imageWidth,
      },
      this.props.tintColor ? ({ tintColor: this.props.tintColor }) : null,
    ]

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyle}>
          <Animated.Image
            resizeMode='contain'
            source={require('./images/background.png')}
            style={[StyleSheet.absoluteFill, containerImageStyle]}
          />
          <Animated.Image
            resizeMode='contain'
            source={require('./images/logo.png')}
            style={imageStyle}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
