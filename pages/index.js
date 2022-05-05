import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <div className="text-xl">
                  <video width="1600" height="500px" loop autoPlay muted>
                  <source src="/Video/FrontPage.mp4" type="video/mp4"/>
                  </video>
                  </div>
                  
            <div className= "font-bold mt-4 bg-black text-white rounded p-4 shadow-lg">
              <a href="#">
                <img
                  src={ "/img/logo/MVNFTE_Logo_UNDER.png"}
                  alt=""
                />
              </a>
            </div>
            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden"></p>

            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden">Our first collection "The Artless Collection" will be available soon. This collection will be ultra rare on a basis of one of one items.</p>

            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden">How it works: When you purchase this NFT we will reach out to you to verify that you are the true owner. You will then tell us which size you would like your piece of clothing in and we will send you it. This is all verified on the matic blockchain and a QR code on the piece of clothing to verify the authenticity of the piece of clothing</p>
      
    </div>
  )
} 
