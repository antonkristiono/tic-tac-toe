import '../styles/globals.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return(
      <Provider
    options= {{
      clientMaxAge:0,
      keepAlive:0,
    }}
    session={pageProps.session}>
      <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
