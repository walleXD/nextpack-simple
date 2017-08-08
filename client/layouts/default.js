import React from 'react'
import { node } from 'prop-types'

const DefaultLayout = ({ children }) =>
  <div>
    {children}
  </div>

DefaultLayout.propTypes = {
  children: node
}

export default DefaultLayout
