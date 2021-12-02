const colors = {
  pureWhite: '#FFFFFF',
  pureBlack: '#000000',
  bellflower: '#4956B6',
  heraBlue: '#717feb',
  blueChaos: '#4EA1FD',
  gainsboro: '#DCDCDC',
  grey: '#808080',
  coralRed: '#FF4040',
  ziggurat: '#8b98a9',
  darkOrange: '#FF6B00',
}

export const lightTheme = {
  colors: {
    ...colors,
  },
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
}

export const darkTheme = {
  colors: {
    ...colors,
  },
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
}
