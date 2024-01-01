import React from 'react'

const Skill = () => {
    return (
        <div id='skills'>
           
            <div  class="flex justify-center items-center bg-slate-900">
                <div class="flex flex-col justify-center items-center max-w-7xl ">
                    
                    <div class="flex flex-col justify-center items-center xl:flex-row m-8 w-[80%] lg:w-full">
                        <div class="flex flex-col items-center justify-center m-6 px-6 lg:w-1/3 w-full ">
                            <h1 class="text-gray-700 text-3xl font-bold ml-5">Skills</h1>
                            <div class="flex items-center justify-center flex-col space-y-2 mt-5 ">
                                <div class="flex items-center justify-center space-x-4">
                                    <img src="https://www.esearchlogix.com/wp-content/uploads/2022/04/web-left-banner.jpg"
                                        class="w-[20%] md:w-[5%]" alt=""/>
                                        <h1 class="text-lg font-semibold mt-3">Frontend</h1>
                                </div>
                                <h1 class="text-justify text-gray-700 md:w-[250px]">Tailblocks provides best Tailwind CSS
                                    components. Visit our website and feel free to give feedback.</h1>
                            </div>
                            <div class="flex items-center justify-center flex-col space-y-2 mt-5">
                                <div class="flex items-center justify-center space-x-4">
                                    <img src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg?w=2000"
                                        class="w-[20%] md:w-[5%]" alt=""/>
                                        <h1 class="text-lg font-semibold mt-2">Problem Solving </h1>
                                </div>
                                <h1 class="text-justify text-gray-700 md:w-[250px]">Tailblocks provides best Tailwind CSS
                                    components. Visit our website and feel free to give feedback.</h1>
                            </div>
                            <div class="flex items-center justify-center flex-col space-y-2 mt-3">
                                <div class="flex items-center justify-center space-x-4">
                                    <img src="https://webconsulting.ie/wp-content/uploads/2020/09/cropped-logo-Web-Consulting.png"
                                        class="w-[20%] md:w-[5%]" alt=""/>
                                        <h1 class="text-lg font-semibold mt-5">Others</h1>
                                </div>
                                <h1 class="text-justify text-gray-700 md:w-[250px]">Tailblocks provides best Tailwind CSS
                                    components. Visit our website and feel free to give feedback.</h1>
                            </div>
                        </div>
                        <div class="w-60 lg:w-96 h-60 lg:h-96 overflow-hidden  ">
                            <img src="https://source.unsplash.com/300x400/?computer" class="h-full w-full" alt=""/>

                        </div>
                        <div class="flex flex-col m-6 px-6 xl:w-1/3 w-full items-center justify-center">
                            <div class="flex flex-col items-start">
                                <h1 class="text-gray-700 text-2xl font-bold">Exeperinces</h1>
                                <p class="text-justify text-gray-700 md:w-[250px] mt-5">Tailblocks provides best Tailwind CSS
                                    components. Visit our website and feel free to give feedback.</p>
                                <p class="text-justify text-gray-700 md:w-[250px] mt-5">Tailblocks provides best Tailwind CSS
                                    components. Visit our website and feel free to give feedback.</p>
                                <button class="mt-5 px-6 py-1 text-lg text-white hover:bg-gray-800 bg-gray-700">Hire me</button>
                            </div>
                            

                        </div>

                    </div>

                </div>

            </div>
       
        </div>
    )
}

export default Skill;