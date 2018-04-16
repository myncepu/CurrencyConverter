import EStyleSheet from 'react-native-extended-stylesheet'
// import { StatusBar } from 'react-native'

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20, // ios status bar height
    },
    // 由于config/routes.js中paddingTop设置了状态栏，这儿就不需要了
    // '@media android': {
    //   // StatusBar.currentHeight only avaiable on android
    //   paddingTop: StatusBar.currentHeight, 
    // }
  },
  button: {
    alignSelf: 'flex-end',
    // 给button加一些padding使得点击button时不需要精确得点击到button
    paddingVertical: 5, 
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
})
