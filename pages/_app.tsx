import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'notionate/dist/styles/notionate.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
