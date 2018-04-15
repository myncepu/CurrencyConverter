import { Dimensions } from 'react-native'
import EStylesheet from 'react-native-extended-stylesheet'

const imageWidth = Dimensions.get('window').width / 2
export default EStylesheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,

  container: {
    alignItems: 'center',
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize'
  },
  logo: {
    width: '$largeImageSize',
    height: '$largeImageSize',
  },
  text: {
    paddingTop: 20,
    color: '$white',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: -0.5
  }
})
