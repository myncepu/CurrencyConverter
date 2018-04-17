// 将SWAP_CURRENCY定义为变量而不是直接作为字符串传入
// 优点：当出错时，debug信息会提示variable xxx is undefined，方便调试
export const SWAP_CURRENCY = 'SWAP_CURRENCY'
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT'

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
})

export const changeCurrency = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
})
