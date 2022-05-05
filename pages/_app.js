import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Link from 'next/link'
import Layout from '../components/Layout'

function Marketplace({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    
  )
}

export default Marketplace 
