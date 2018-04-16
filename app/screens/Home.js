import React, { Component } from 'react'
import {
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
import PropTypes from 'prop-types'

import { Header } from '../components/Header'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'
import { LastConverted } from '../components/Text'

const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'CNY'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'
const TEMP_CONVERSION_RATE = 0.7974
const TEMP_CONVERSION_DATE = new Date()

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handleBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' })
  }

  handleQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' })
  }

  handleTextChange = (text) => {
    console.log('change text', text)
  }

  handleSwapCurrency = () => {
    console.log('press swap currency')
  }

  handleOptionPress = () => {
    console.log('press option button')
  }
  render() {
    return (
      <Container>
        <StatusBar translucent={true} barStyle='light-content'></StatusBar>
        <Header onPress={this.handleOptionPress}/>
        <KeyboardAvoidingView behavior='padding'>
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handleBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType='numeric'
            onChangeText={ this.handleTextChange }
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handleQuoteCurrency}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
            date={TEMP_CONVERSION_DATE}
          />
          <ClearButton
            text='Revert Currencies'
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}
