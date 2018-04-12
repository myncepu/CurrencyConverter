import EStylesheet from 'react-native-extended-stylesheet'

export default EStylesheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    height: 50,
    borderRadius: 3,
  },
  button: {
    flexGrow: 1,
    borderRightWidth: 2,
  },
  text: {
    textAlign: 'center',
  },
  verticalLine: {
    width: 2,
    backgroundColor: '$primaryBlue',
  },
  input: {
    flexGrow: 5,
  },
})
