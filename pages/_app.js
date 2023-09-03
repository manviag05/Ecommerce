import '@/styles/globals.css'
import React from 'react'
import { Layout } from '@/components';
export default function App({ Component, pageProps }) {
  return (
    <Layout>            
       <Component {...pageProps} />  
    </Layout>
 
  )// whatever we pass inside of component we can access it using a prop called children
}
