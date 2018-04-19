import {
  SWAP_CURRENCY,
  CHANGE_CURRENCY_AMOUNT,
  CHANGE_BASE_CURRRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies'

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
  error: null,
}

const setConversion = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  }

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency]
  }

  return {
    ...state.conversions,
    // [xx]: xx 这个语法是什么意思?
    [action.currency]: conversion,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: action.amount || 0,
      }
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
      }
    case CHANGE_BASE_CURRRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversion(state, action)
      }
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversion(state, action)
      }
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversion: setConversion(state, { currency: state.baseCurrency })
      }
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          }
        }
      }
    case CONVERSION_ERROR:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}

export default reducer
