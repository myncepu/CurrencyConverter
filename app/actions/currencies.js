// 将SWAP_CURRENCY定义为变量而不是直接作为字符串传入
// 优点：当出错时，debug信息会提示variable xxx is undefined，方便调试
export const SWAP_CURRENCY = 'SWAP_CURRENCY'
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT'
export const CHANGE_BASE_CURRRENCY = 'CHANGE_BASE_CURRRENCY'
export const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY'
export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION'
export const CONVERSION_RESULT = 'CONVERSION_RESULT'
export const CONVERSION_ERROR = 'CONVERSION_ERROR'

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
})

export const changeCurrency = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
})

export const changeBaseCurrency = currency => ({
  type: CHANGE_BASE_CURRRENCY,
  currency,
})

export const changeQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency,
})

export const getInitialConversion = () => ({
  type: GET_INITIAL_CONVERSION,
})
