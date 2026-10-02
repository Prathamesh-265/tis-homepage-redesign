import { useEffect, useState } from 'react'

const KEY = 'tis-theme'

export default function useTheme() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem(KEY)
    return saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem(KEY, dark ? 'dark' : 'light')
  }, [dark])
  return [dark, () => setDark((d) => !d)]
}
