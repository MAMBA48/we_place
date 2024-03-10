import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/homePage.tsx'
import GlobalStyled from './assets/styles/globalStyled.ts'
import PortfolioPage from './pages/PortfolioPage.tsx'
import AboutPage from './pages/aboutPage.tsx'

const router =  createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:'',
    children: [
      { path:'/', element:<HomePage /> },
      { path:'portfolio', element:<PortfolioPage /> },
      { path:'about', element:<AboutPage /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyled />
  </React.StrictMode>,
)
