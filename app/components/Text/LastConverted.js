import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'

import styles from './styles'

const LastConverted = ({ base, conversionRate, quote, date }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM Do, YYYY')}
  </Text>
)

LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number,
}

export default LastConverted
