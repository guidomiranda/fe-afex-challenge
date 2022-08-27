import { ComponentType } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './purpleTheme'
import { ThemeProviderProps } from './../../types'


export function AppTheme({ children }: ThemeProviderProps ) {
  return (
    <>    
      <ThemeProvider theme={purpleTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        { children }
      </ThemeProvider>
    </>
  )
}



