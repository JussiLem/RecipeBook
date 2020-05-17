import { CommonActions } from '@react-navigation/native';

export const BG = '#0B0B0B'
export const PINK = '#F20AF5'
export const PURPLE = '#7A1374'
export const BLUE = '#00FFFF'
export const GREEN = '#2E7767'
export const RED = '#FC2847'
export const LABEL_COLOR = BLUE
export const INPUT_COLOR = PINK
export const ERROR_COLOR = RED
export const HELP_COLOR = '#999999'
export const BORDER_COLOR = BLUE
export const DISABLED_COLOR = '#777777'
export const DISABLED_BACKGROUND_COLOR = '#eeeeee'

export const goBack = navigation => () => navigation.goBack()

export const onScreen = (screen, navigation, obj) => () => {
  navigation.navigate(screen, obj)
}

export const goHome = navigation => () => navigation.popToTop()()

let navigator;
export const setNavigator = nav => {
  navigator = nav;
}

export const navigate = (routeName, params) => {
  if (navigator) {
    navigator.dispatch(CommonActions.navigate({routeName, params}))
  }
}
