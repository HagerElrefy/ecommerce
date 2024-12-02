import React, { memo } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { QueryClient, QueryClientProvider } from 'react-query';

function MainLayout() {
  const productsClient = new QueryClient();

  return (
    <QueryClientProvider client={productsClient}>
      <NavBar/>
      <main>
        <Outlet/> 
      </main>
      <Footer/>
    </QueryClientProvider>
  )
}
export default memo(MainLayout);