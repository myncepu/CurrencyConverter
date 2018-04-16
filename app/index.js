import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

import Navigator from './config/routes'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',
  $lightGray: '#D9D9D9',

  // $outline: 1, // 显示各种components的outline
})

export default () => <Navigator />
