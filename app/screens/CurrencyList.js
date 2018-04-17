import React, { Component } from 'react'
import {
  FlatList,
  View,
  StatusBar,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { ListItem, Separator } from '../components/List'
// 下面写法报错，debug了好久
// import ListItem from '../components/List'
import currencies from '../data/currencies'
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies'

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string,
  }

  handlePress = (currency) => {
    const { type } = this.props.navigation.state.params

    if (type === 'base') {
      // TODO: dispatch change base
      this.props.dispatch(changeBaseCurrency(currency))
    } else if (type === 'quote') {
      // TODO: dispatch change quote
      this.props.dispatch(changeQuoteCurrency(currency))
    }
    this.props.navigation.goBack(null)
  }

  render() {
    let currentCurrency = this.props.baseCurrency
    if (this.props.navigation.state.params.type === 'quote') {
      currentCurrency = this.props.quoteCurrency
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle='default'
          translucent={false}
        />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === currentCurrency}
              onPress={() => this.handlePress(item)}
              iconBackground={this.props.primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
}

// TODO: 为什么Home.js中 connect(stateToProps)(CurrencyList)
// 这里第一个参数不用填写
const mapStateToProps = (state) => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency,
  primaryColor: state.theme.primaryColor,
})

export default connect(mapStateToProps)(CurrencyList)
