import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <div className="text-xl">
                  <video width="1600" height="300px" loop autoPlay muted>
                  <source src="/Video/FrontPage.mp4" type="video/mp4"/>
                  </video>
                  </div>
                  
            <div className= "font-bold mt-4 bg-white text-white rounded p-4 shadow-lg">
              <a href="#">
                <img
                  src={ "/img/logo/MVNFTE_Logo_UNDER.png"}
                  alt=""
                />
              </a>
            </div>
            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden"></p>

            <h2 className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden">The Utility of this NFT is as follows</h2>

            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden">You'll be announced King of the NFT World</p>

            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden">You will get a unique NFT(A line code assocaited with a picture host on IPFS in the Etheruem Network which you can flex to everyone)</p>

            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' shadow rounded-xl overflow-hidden">You'll have a piece of work from the famous </p>

            <div class="card">
              <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
            <div class="container">
            <h4><b>John Doe</b></h4>
            <p>Architect and Engineer</p>
          </div>
          
</div>

      
    </div>
  )
} 
