import React, { memo } from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { QueryClient, QueryClientProvider } from 'react-query';
import '../i18n/i18n';
import { useSelector } from 'react-redux';

function MainLayout() {
  const productsClient = new QueryClient();
  const language = useSelector(state => state.language.language);

  return (
    <div dir={language === 'en' ? 'ltr' : 'rtl'}>
      <QueryClientProvider client={productsClient} >
        {console.log(language)}
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </QueryClientProvider>
    </div>

  )
}
export default memo(MainLayout);