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

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
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
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={() => this.handlePress(item)}
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
export default connect()(CurrencyList)
