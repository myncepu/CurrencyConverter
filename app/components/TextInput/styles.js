import EStylesheet from 'react-native-extended-stylesheet'
import{ StyleSheet } from 'react-native'

const INPUT_HEIGHT = 48
const BORDER_RADIUS = 4

export default EStylesheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: '$white',
    width: '90%',
    marginTop: 30,
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
  },
  containerDisabled: {
    backgroundColor: '$lightGray',
  },
  button: {
    // flexGrow: 1,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    height: INPUT_HEIGHT, // button和container高度一致
    alignItems: 'stretch', // main direction居中
    justifyContent: 'center', // cross direction交叉方向居中
    backgroundColor: '$white',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  border: {
    width: StyleSheet.hairlineWidth, // 当前设备能够显示的最小宽度
    height: INPUT_HEIGHT,
    backgroundColor: '$border',
  },
  input: {
    height: INPUT_HEIGHT,
    // flex: 1, // flex: x1 x2 x3 x1即为flex-grow
    flexGrow: 1,
    fontSize: 18,
    paddingHorizontal: 16,
    color: '$inputText',
    alignSelf: 'stretch',
  },
})
