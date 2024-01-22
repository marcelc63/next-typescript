import * as React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="min-h-screen min-w-screen">{children}</div>
}

export default Layout
