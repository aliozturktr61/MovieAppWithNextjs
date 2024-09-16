"use client"/* hata almamak için burayı mutlaka yazıyoruz */
import React from 'react'
import {ThemeProvider} from "next-themes"

const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
