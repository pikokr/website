/*
 * Copyright (c) 2022 pikokr. Licensed under the MIT License.
 */

import React from 'react'
import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
