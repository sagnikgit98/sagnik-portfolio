// ************** Green Color Theme ******************

// import { createContext, useContext, useEffect, useMemo, useState } from 'react'
// import { ThemeProvider as MuiProvider, createTheme, CssBaseline } from '@mui/material'

// const Ctx = createContext({ mode: 'dark', toggle: () => {} })
// export const useMode = () => useContext(Ctx)

// export function ThemeProvider({ children }) {
//   const [mode, setMode] = useState(() => {
//     try { const s = localStorage.getItem('theme'); if (s) return s } catch {}
//     return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
//   })
//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', mode === 'dark')
//     try { localStorage.setItem('theme', mode) } catch {}
//   }, [mode])
//   const theme = useMemo(() => createTheme({
//     palette: { mode, primary: { main: mode === 'dark' ? '#3EE8B0' : '#0B9C6B', contrastText: mode === 'dark' ? '#04120C' : '#fff' },
//       background: { default: mode === 'dark' ? '#070B10' : '#F4F8F6', paper: mode === 'dark' ? '#0D131B' : '#fff' } },
//     typography: { fontFamily: 'Inter, sans-serif', button: { textTransform: 'none', fontWeight: 600 } },
//     shape: { borderRadius: 10 },
//   }), [mode])
//   return (
//     <Ctx.Provider value={{ mode, toggle: () => setMode(m => (m === 'dark' ? 'light' : 'dark')) }}>
//       <MuiProvider theme={theme}><CssBaseline enableColorScheme />{children}</MuiProvider>
//     </Ctx.Provider>
//   )
// }

// ************** Blue Color Theme ******************

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeProvider as MuiProvider, createTheme, CssBaseline } from '@mui/material'

const Ctx = createContext({ mode: 'dark', toggle: () => {} })
export const useMode = () => useContext(Ctx)

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    try { const s = localStorage.getItem('theme'); if (s) return s } catch {}
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    try { localStorage.setItem('theme', mode) } catch {}
  }, [mode])
  const theme = useMemo(() => createTheme({
    palette: { mode, primary: { main: mode === 'dark' ? '#60A5FA' : '#2563EB', contrastText: mode === 'dark' ? '#06101F' : '#fff' },
      background: { default: mode === 'dark' ? '#0A0F1E' : '#F6F8FC', paper: mode === 'dark' ? '#111A2E' : '#fff' } },
    typography: { fontFamily: 'Inter, sans-serif', button: { textTransform: 'none', fontWeight: 600 } },
    shape: { borderRadius: 10 },
  }), [mode])
  return (
    <Ctx.Provider value={{ mode, toggle: () => setMode(m => (m === 'dark' ? 'light' : 'dark')) }}>
      <MuiProvider theme={theme}><CssBaseline enableColorScheme />{children}</MuiProvider>
    </Ctx.Provider>
  )
}