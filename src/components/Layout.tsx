import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import SideBar from './SideBar'

type LayoutProps = {
  children: Array<JSX.Element> | JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <div>

        <SideBar />

      </div>

      {children}
    </Box>
  )
}


export default Layout;