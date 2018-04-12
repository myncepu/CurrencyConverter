import { Dimensions } from 'react-native'
import EStylesheet from 'react-native-extended-stylesheet'

const imageWidth = Dimensions.get('window').width / 2
export default EStylesheet.create({
  container: {
    alignItems: 'center',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth
  },
  logo: {
    width: imageWidth / 2,
    height: imageWidth / 2
  },
  text: {
    paddingTop: 20,
    color: '$white',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: -0.5
  }
})
