import React from 'react'
import { AppProps } from 'next/app'
import GloStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GloStyle/>
    </ThemeProvider>
  )
}

export default MyApp
