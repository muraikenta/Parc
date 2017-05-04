import {
  pinkA200,
  grey100,
  white,
  cyan500,
} from 'material-ui/styles/colors'
import {fade} from 'material-ui/utils/colorManipulator'
import Spacing from 'material-ui/styles/spacing'

export default {
  spacing: Spacing,
  fontFamily: 'Quicksand, AxisStd-Light, sans-serif',
  palette: {
    primary1Color: '#30C8D6',
    primary2Color: pinkA200,
    accent1Color: '#30C8D6',
    accent2Color: grey100,
    textColor: '#5876A3',
    alternateTextColor: white,
    canvasColor: white,
    borderColor: '#DFE4EE',
    disabledColor: fade('#5876A3', 0.3),
    pickerHeaderColor: cyan500,
  },
}
