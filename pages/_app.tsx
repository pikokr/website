/*
 * Copyright (c) 2022 pikokr. Licensed under the MIT License.
 */

import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
