import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

// import Home from './screens/Home'
import CurrencyList from './screens/CurrencyList'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
  $lightGray: '#D9D9D9',

  // $outline: 1, // 显示各种components的outline
})
// export default () => <Home />
export default () => <CurrencyList />
