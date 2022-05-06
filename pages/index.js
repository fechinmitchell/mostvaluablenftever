import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
    <body class="bg-black text-center">
      <div className="text-xl bg-black">
                  <video width="1600" height="300px" loop autoPlay muted>
                  <source src="/Video/FrontPage.mp4" type="video/mp4"/>
                  </video>
                  </div>
                  
            <div className= "font-bold mt-4 bg-black object-center text-white shadow-lg">
              <a href="#">
                <img
                  src={ "/img/logo/MVNFTE_Logo_UNDER.png"}
                  alt=""
                />
              </a>
            </div>
            <div className="bg-black">
            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' text-white shadow rounded-xl overflow-hidden"></p>

            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' text-white shadow rounded-xl overflow-hidden">The Utility of this NFT is as follows</p>

            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' text-white shadow rounded-xl overflow-hidden">You'll be announced King of the NFT World</p>

            <p className="w-5/6 m-auto mb-5 text-center borderRadius='100px' text-white shadow rounded-xl overflow-hidden">You will get a unique NFT(A line code assocaited with a picture host on IPFS in the Etheruem Network which you can flex to everyone) </p>
            </div>
            <section class="container mx-auto bg-black text-center py-6 mb-12" >
              <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                BE THE KING, RULE THE NFT WORLD
              </h1>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto bg-black w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
              </div>
              <h3 class="my-4 text-3xl leading-tight">
              </h3>
              <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                BUY NOW!
              </button>
            </section>
            </body>


            {/* <!--Footer--> */}
            <footer class="bg-black">
              <div class="container mx-auto px-8">
                <div class="w-full flex flex-col md:flex-row py-6">
                  <div class="flex-1 mb-6 text-black">
                    <a class="text-yellow-500 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                      {/* <!--Icon from: http://www.potlabicons.com/ --> */}
                      BE THE NFT KING
                    </a>
                  </div>
                  <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Links</p>
                    <ul class="list-reset mb-6">
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                      </li>
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                      </li>
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                    <ul class="list-reset mb-6">
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                      </li>
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Social</p>
                    <ul class="list-reset mb-6">
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                      </li>
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                      </li>
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Company</p>
                    <ul class="list-reset mb-6">
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                      </li>
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                      </li>
                      <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                        <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <a href="https://www.freepik.com/free-photos-vectors/background" class="text-gray-500">Background vector created by freepik - www.freepik.com</a>
            </footer>

      
    </div>
  )
} 
