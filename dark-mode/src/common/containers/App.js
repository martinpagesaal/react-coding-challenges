import React from 'react';
import { DarkModeProvider } from "../contexts/DarkMode";

export default function App({ children }) {
  return (
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
  )
}
