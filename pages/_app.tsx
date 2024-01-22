import * as React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { Settings } from 'luxon'

import '~/styles/globals.scss'
import store from '~/store/store'

import ProtectRoute from '~/components/ProtectRoute'

const MyApp: React.FC<AppProps> = (props: AppProps) => {
  // Set Luxon's Locale
  Settings.defaultLocale = 'en-EN'

  return (
    <Provider store={store}>
      <Head>
        <title>Next Typescript</title>
      </Head>
      <ProtectRoute {...props} />
    </Provider>
  )
}

export default MyApp
