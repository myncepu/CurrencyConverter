import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'

import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'CNY'
const TEMP_BASE_PRICE = '1000'
const TEMP_QUOTE_PRICE = '7'

export default class Home extends Component {
  handleBaseCurrency = () => {
    console.log('press base')
  }

  handleQuoteCurrency = () => {
    console.log('press quote')
  }

  render() {
    return (
      <Container>
        <StatusBar translucent={true} barStyle='light-content'></StatusBar>
        <View />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handleBaseCurrency}
	/>
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handleQuoteCurrency}
          editable={false}
	/>
      </Container>

    )
  }
}
