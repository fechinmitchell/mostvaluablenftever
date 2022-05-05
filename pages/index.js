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

          <section class="bg-light">
            <div class="container px-5">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-12 col-lg-5">
                        <h2 class="display-4 lh-1 mb-4">Enter a new age of web design</h2>
                        <p class="lead fw-normal text-muted mb-5 mb-lg-0">This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space for text here, so don't worry about writing too much.</p>
                    </div>
                    <div class="col-sm-8 col-md-6">
                        <div class="px-5 px-sm-0"><img class="img-fluid rounded-circle" src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
                    </div>
                </div>
            </div>
        </section>

</div>

      
    </div>
  )
} 
