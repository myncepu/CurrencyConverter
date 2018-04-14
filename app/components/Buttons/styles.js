import EStylesheet from 'react-native-extended-stylesheet'

const CLEAR_BUTTON_HEIGHT = 20
export default EStylesheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
    height: CLEAR_BUTTON_HEIGHT,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 19,
  },
  text: {
    fontSize: 15,
    fontWeight: '300',
    color: '$white',
    marginLeft: 10,
    height: CLEAR_BUTTON_HEIGHT,
  }
})
