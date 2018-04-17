import React, { Component } from 'react'
import {
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux' // Let the component know the redux

import { Header } from '../components/Header'
import { Container } from '../components/Container'
import { Logo } from '../components/Logo'
import { InputWithButton } from '../components/TextInput'
import { ClearButton } from '../components/Buttons'
import { LastConverted } from '../components/Text'
import { swapCurrency, changeCurrency } from '../actions/currencies'

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    quotePrice: PropTypes.string,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
  }

  handleBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    })
  }

  handleQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    })
  }

  handleTextChange = (amount) => {
    this.props.dispatch(changeCurrency(amount))
  }

  handleSwapCurrency = () => {
    this.props.dispatch(swapCurrency())
  }

  handleOptionPress = () => {
    this.props.navigation.navigate('Options', { title: 'Options' })
  }
  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2)

    if (this.props.isFetching) {
      quotePrice = '...'
    }

    return (
      <Container>
        <StatusBar translucent={true} barStyle='light-content'></StatusBar>
        <Header onPress={this.handleOptionPress}/>
        <KeyboardAvoidingView behavior='padding'>
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handleBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType='numeric'
            onChangeText={ this.handleTextChange }
          />
          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handleQuoteCurrency}
            editable={false}
            value={quotePrice}
          />
          <LastConverted
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            conversionRate={this.props.conversionRate}
            date={this.props.lastConvertedDate}
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

const mapStateToProps = (state) => {
  const baseCurrency = state.currencies.baseCurrency
  const quoteCurrency = state.currencies.quoteCurrency
  const conversionSelector = state.currencies.conversions[baseCurrency] || {}
  const rates = conversionSelector.rates || {}

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
  }
}

export default connect(mapStateToProps)(Home)
