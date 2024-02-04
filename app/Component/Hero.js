import React from 'react'

const Hero = () => {
  return (
    <div id='home'>
      <section class="hero text-slate-700 body-font bg-gray-800 justify-center">

        <div class="container mx-auto mt-1 flex xl:justify-center px-5 xl:px-0 py-[100px] pt-[10rem] md:pt-20 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-1 xl:text-lg font-medium tracking-wider hover:text-white md:text-sm ">Hello My Name Is Khushnuma Malik</h1>
            <h1 class="  text-blue-500 font-bold hover:text-white title-font sm:text-5xl md:text-xl  xl:text-3xl font-sherif text-2xl mb-4 font-medium ">Im A Web Developer- Designer-Freelancer </h1>






            <div class="flex lg:flex-row md:flex-col xl:mt-20  ">
              <a href='https://in.linkedin.com/in/khushnuma-malik?trk=people-guest_people_search-card '> <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-blue-700 hover:text-white  focus:outline-none">
                <img className=' h-7 w-7 ' src=' https://static-00.iconduck.com/assets.00/linkedin-round-icon-2048x2048-iqy08mdc.png' />
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="title-font font-medium">LinkdIn</span>
                </span>
              </button> </a>
        <a href='https://github.com/khushnuma-malik ' ><button class="bg-gray-100  inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-blue-700 hover:text-white focus:outline-none  ">
                <img className=' h-7 w-7 ' src=' https://cdn-icons-png.flaticon.com/512/25/25231.png' />
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="title-font font-medium">Git/Github</span>
                </span>

              </button></a>
            </div>
          </div>

          <section id='about' class="flex items-center bg-blue-300 xl:h-screen font-poppins dark:bg-gray-800 px-0 pt-7 ">
        <div class="justify-center flex-1 max-w-6xl py-0 mx-auto lg:py-6 md:px-6">
            <div class="flex flex-wrap ">
                <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                    <div class="relative lg:max-w-md rounded-full justify-center ">
                        <img className=''src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-qCKcaljtDpiKwL0vHGIdKhcEKHZJgltafjmCISwtFna_RGBTI-fEtICoEIZ47pwsI-q8XxRqYzLlfmfPGb-86Yq_juYtBwF5RLinvwqd1LQUPLFx3cZQusAKjsyVARnfrE1rqarK1i_vxoQFhm9YgDWMXdNcR2BmJBju1Tjk-pv47ih02ZjafLOUuI4/s320/B612_20240204_171444_230.jpg "
                            class="relative z-10 object-cover w-full rounded h-96 pt-10  "/>
                      
                    </div>
                </div>
                <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                    <div class="pl-4 mb-0 border-l-4 border-blue-500 ">
                     
                        <h1 class="mt-2 text-3xl font-black text-gray-900 md:text-5xl dark:text-gray-500">
                            About Me
                        </h1>
                    </div>

                    <p className='font-bold text-slate-800 text-lg'>Who Im? </p>
                    <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                    My name is Khushnuma, and I reside in Uttar Pradesh. I completed my Bachelors degree from CCS University, Meerut, in 2019. I received my high school and intermediate education from a Hindi medium school in Baghpat.

<p className='font-bold text-slate-800 text-lg'>Education: </p>

Bachelors Degree from CCS University, Meerut (2019)
High School and Intermediate from a Hindi medium school in Baghpat
<p className='font-bold text-slate-800 text-lg'>Professional Experience: </p>
I have 1.5 years of experience in web designing. I am proficient in the following technologies:
<ol>
<li> JavaScript (basic)</li>
<li>Next.js</li>
<li>Html</li>
<li>Css</li>
<li>Taiwind</li>
<li>Bootstrap</li></ol>
                    </p>
                   
                </div>
            </div>
        </div>
    </section>

        </div>
      </section>
    </div>
  )
}

export default Hero
