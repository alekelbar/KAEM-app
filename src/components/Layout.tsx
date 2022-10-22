import React from 'react'
import { Box } from '@mui/material'
import SideBar from './SideBar'

type LayoutProps = {
  children: Array<JSX.Element> | JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Box>

        <SideBar />

      </Box>

      {children}
    </div>
  )
}


export default Layout;