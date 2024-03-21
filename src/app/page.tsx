import { Header, Carousel, NewsList, Footer } from "../components"
import Image from "next/image"

// import Link from "next/link"
import {kanit, kanit_bold, rowdies, montserrat, inter} from "../fonts"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 8
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 7
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 4
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 3
    }
};
export default function Home() {
  return (
      <>
        <Header els={[{name:"Main", href:"banner"}, {name:"News", href:"news"}, {name:"Video", href:"video"}, {name:"Sponsors", href:"footer"}]}/>
        <main>
            <div className="mt-[160px]"/>
      <section id="main" className="sm:p-0 md:px-5 md:py-5 lg:px-5 lg:py-5 xl:px-5 xl:py-5 w-full bg-[url('/organic_bg.jpg')] bg-no-repeat object-cover h-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 gap-4 h-full">
          {/* Big element */}
          <div className="col-span-2 z-0 sm:border-0 sm:rounded-none sm:w-full bg-white rounded-[4px] border-[1px] border-black group h-full">
              <div className='flex flex-col items-start px-5 sm:py-0 md:py-10 lg:py-10 xl:py-10 sm:h-full md:h-[50%] lg:h-[50%] xl:h-[50%] '>
                  <h6 className={`text-sm font-semibold py-2 ${rowdies.className} text-primary`}>Tagline</h6>
                  {/*theme color here*/}
                  <h2 className={`group-hover:underline xl:text-5xl md:text-4xl sm:text-3xl lg:text-5xl py-5 font-bold ${kanit_bold.className}`}>Medium length section heading goes here</h2>
                  <p className={`${montserrat.className} py-3 text-sm`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                  <button className={`mt-10 text-center text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:text-white hover:bg-black hover:border-white text-md ${inter.className} xl:px-6 lg:px-6 md:px-5 sm:px-4 xl:py-3 lg:py-3 md:py-3 sm:py-2 rounded-[4px]`}>More</button>
              </div>
              <div className='w-full sm:mt-5 md:mt-0 xl:mt-0 lg:mt-0 sm:h-full md:h-[50%] lg:h-[50%] xl:h-[50%] overflow-hidden cursor-pointer'>
                  <div
                      className="object-cover block h-full w-full bg-[url('/example.jpg')] bg-no-repeat bg-center group-hover:scale-110 duration-300"
                  />
              </div>
          </div>

          {/* Two small elements in the second column */}
          <div className="sm:hidden md:grid col-span-1 xl:grid lg:grid  grid-cols-1 gap-4">
              <div className="bg-white rounded-[4px] border-[1px] border-black">
                  <div className='flex flex-col items-start px-4 py-5 group'>
                      <h6 className={`text-sm font-semibold ${rowdies.className} text-primary`}>Tagline</h6>
                      <h2 className={`group-hover:underline text-2xl cursor-pointer py-3 font-bold ${kanit.className}`}>Medium length section heading goes here</h2>
                      <button className={`mt-3 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                          More
                          <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                      </button>
                  </div>
                  <div className='overflow-hidden h-[30vh]'>
                      <div className="bg-[url('/default.jpg')] bg-no-repeat w-full duration-[0.3s] h-full object-cover bg-center hover:scale-110"/>
                  </div>
              </div>
              <div className="bg-white rounded-[4px] border-[1px] border-black">
                  <div className='flex flex-col items-start px-4 py-5 group'>
                      <h6 className={`text-sm font-semibold ${rowdies.className} text-primary`}>Tagline</h6>
                      <h2 className={`text-2xl group-hover:underline cursor-pointer py-3 font-bold ${kanit.className}`}>Medium length section heading goes here</h2>
                      <button className={`mt-3 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                          More
                          <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                      </button>
                  </div>
                  <div className='overflow-hidden h-[30vh]'>
                      <div className="bg-[url('/default.jpg')] bg-no-repeat w-full duration-[0.3s] h-full object-cover bg-center hover:scale-110"/>
                  </div>
              </div>
          </div>


          {/* Two small elements in the third column */}
          <div className="md:hidden sm:hidden col-span-1 xl:grid lg:grid  grid-cols-1 gap-4">
              <div className="bg-white rounded-[4px] border-[1px] border-black">
                  <div className='flex flex-col items-start px-4 py-5 group'>
                      <h6 className={`text-sm font-semibold ${rowdies.className} text-primary`}>Tagline</h6>
                      <h2 className={`text-2xl group-hover:underline cursor-pointer py-3 font-bold ${kanit.className}`}>Medium length section heading goes here</h2>
                      <button className={`mt-3 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                          More
                          <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                      </button>
                  </div>
                  <div className='overflow-hidden h-[30vh]'>
                      <div className="bg-[url('/default.jpg')] bg-no-repeat w-full duration-[0.3s] h-full object-cover bg-center hover:scale-110"/>
                  </div>
              </div>
              <div className="bg-white rounded-[4px] border-[1px] border-black group/main">
                  <div className='flex flex-col items-start px-4 py-5 group'>
                      <h6 className={`text-sm font-semibold ${rowdies.className} text-primary`}>Tagline</h6>
                      <h2 className={`text-2xl group-hover:underline cursor-pointer py-3 font-bold ${kanit.className}`}>Medium length section heading goes here</h2>
                      <button className={`mt-3 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                          More
                          <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                      </button>
                  </div>
                  <div className='overflow-hidden h-[30vh]'>
                      <div className="bg-[url('/default.jpg')] bg-no-repeat w-full duration-[0.3s] h-full object-cover bg-center hover:scale-110"/>
                  </div>
              </div>
          </div>

      </div>
  </section>
            <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-4 w-full xl:x-16 lg:px-16 lg:py-16 md:px-16 md:py-16 sm:px-5 sm:py-12 xl:py-16 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-[370px]">
                <h1 className={` xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl leading-snug w-[100%] font-bold  `}>Stay Updated With The Latest LiiGi News</h1>
                <div className="flex flex-col w-[100%] xl:pl-10 lg:pl-10 md:pl-10 sm:pl-0">
                    <p className="text-md font-medium">Get all the latest updates, match results, and player transfers.</p>
               <div className="flex items-start justify-start mt-3">
                   <button className={`mt-3 text-center mb-5 text-white bg-black border-black border-2 outline-none duration-[0.1s] hover:underline hover:rounded-[8px] text-md ${inter.className} px-6 py-3 rounded-[4px]`}>Learn More</button>
                   <button  className={`mt-3 ml-5 text-center mb-5 text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:underline hover:rounded-[8px]  text-md ${inter.className} px-6 py-3 rounded-[4px]`}> Sign Up</button>
               </div>
                </div>
            </section>
            <section className="py-3">
                <p className="text-center text-lg font-semibold py-5">Official Sponsors of the Liigi</p>
                <Carousel responsive={responsive} containerClassName={"carousel-container"} arrowsDesktop={false} itemClass={"running-line-animation sponsor"}>
                    <div className="flex justify-center items-center">
                        <Image src={"/sponsor_1.svg"} width={100} height={100} alt={'sponsor-1'} title={"Sponsor"}/>
                    </div>
               <div className="flex justify-center items-center">
                        <Image  src={"/sponsor_2.svg"} width={100} height={100} alt={'sponsor-2'} title={"Sponsor"}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image  src={"/sponsor_1.svg"} width={100} height={100} alt={'sponsor-2'} title={"Sponsor"}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image  src={"/sponsor_2.svg"} width={100} height={100} alt={'sponsor-2'} title={"Sponsor"}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image  src={"/sponsor_1.svg"} width={100} height={100} alt={'sponsor-2'} title={"Sponsor"}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image  src={"/sponsor_2.svg"} width={100} height={100} alt={'sponsor-2'} title={"Sponsor"}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image  src={"/sponsor_1.svg"} width={100} height={100} alt={'sponsor-2'} title={"Sponsor"}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <Image  src={"/sponsor_2.svg"} width={100} height={100} alt={'sponsor-2'} title={"Sponsor"}/>
                    </div>
                </Carousel>
            </section>
               <NewsList />
            <section id="video">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full lg:gap-4 md:gap-4 sm:gap-0 xl:gap-4">
                    <div className="xl:p-10 lg:p-10 md:p-10 sm:p-5 ">
                        <h6 className={`text-sm font-semibold ${rowdies.className} text-primary`}>Tagline</h6>
                        <h2 className={`group-hover:underline xl:text-5xl md:text-4xl sm:text-3xl lg:text-5xl py-5 font-bold ${kanit_bold.className}`}>Stay Updated with LiiGi Video</h2>
                        <p className={`${montserrat.className} py-3 text-sm`}>Get the latest updates on football matches and league video.</p>
                    </div>
                    <div className="flex sm:justify-start md:justify-end lg:justify-end xl:justify-end items-end xl:mx-10 lg:mx-10 lg:my-10 md:my-10 md:mx-10 sm:mx-0 sm:my-0 xl:my-10">
                        <button className={`mt-3 ml-5 text-center mb-5 text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:text-white hover:bg-black hover:border-white  text-md font-sans-[${inter.className}] px-6 py-3 rounded-[4px]`}>View All</button>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5 w-[95%] m-auto">
                    <div className="flex sm:flex-col md:flex-col xl:flex-row lg:flex-col col-span-1 group w-full sm:items-start  md:items-start lg:items-start xl:items-center cursor-pointer">
                        <div className="square-image-wrapper relative rounded-[4px] overflow-hidden w-full min-w-[250px]">
                            <img alt="product-img" title="Nike Air Force 1'07" src="/example.jpg" className="w-full duration-[0.2s] group-hover:scale-125 h-full lg:min-h-[300px] md:min-h-[200px] xl:min-h-[300px] object-cover"/>
                            <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-bl-[4px] rounded-tr-[4px] bg-primary">
                                <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
                                <p className={`text-md pr-1 text-white ${rowdies.className}`}>01:35</p>
                            </div>
                        </div>
                        <div className="text-wrap flex flex-col items-start lg:px-0 md:px-0 sm:px-0 xl:px-10">
                            <div className="flex items-center mt-4">
                                <div className="bg-primary w-fit px-3 py-1.5">
                                    <h6 className={`text-sm text-white font-bold ${rowdies.className}`}>All</h6>
                                </div>
                                <p className={`font-medium text-sm text-center ml-3 ${rowdies.className}`}>16 Mar 2024</p>
                            </div>
                            <h3 className={`text-xl group-hover:underline py-4 font-bold ${kanit.className}`}>
                                Exciting Match Ends in Thrilling Draw
                            </h3>
                            <p className={`text-sm py-2 font-medium ${montserrat.className}`}>
                                Read about the intense battle between two top teams and the dramatic ending.
                            </p>
                            <button className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                                Read More
                                <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                            </button>
                        </div>

                    </div> <div className="flex sm:flex-col md:flex-col xl:flex-row lg:flex-col col-span-1 group w-full sm:items-start  md:items-start lg:items-start xl:items-center cursor-pointer">
                        <div className="square-image-wrapper relative rounded-[4px] overflow-hidden w-full min-w-[250px]">
                            <img alt="product-img" title="Nike Air Force 1'07" src="/example.jpg" className="w-full duration-[0.2s] group-hover:scale-125 h-full lg:min-h-[300px] md:min-h-[200px] xl:min-h-[300px] object-cover"/>
                            <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-bl-[4px] rounded-tr-[4px] bg-primary">
                                <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
                                <p className={`text-md pr-1 text-white ${rowdies.className}`}>01:35</p>
                            </div>
                        </div>
                        <div className="text-wrap flex flex-col items-start lg:px-0 md:px-0 sm:px-0 xl:px-10">
                            <div className="flex items-center mt-4">
                                <div className="bg-primary w-fit px-3 py-1.5">
                                    <h6 className={`text-sm text-white font-bold ${rowdies.className}`}>All</h6>
                                </div>
                                <p className={`font-medium text-sm text-center ml-3 ${rowdies.className}`}>16 Mar 2024</p>
                            </div>
                            <h3 className={`text-xl group-hover:underline py-4 font-bold ${kanit.className}`}>
                                Exciting Match Ends in Thrilling Draw
                            </h3>
                            <p className={`text-sm py-2 font-medium ${montserrat.className}`}>
                                Read about the intense battle between two top teams and the dramatic ending.
                            </p>
                            <button className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                                Read More
                                <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                            </button>
                        </div>

                    </div> <div className="flex sm:flex-col md:flex-col xl:flex-row lg:flex-col col-span-1 group w-full sm:items-start  md:items-start lg:items-start xl:items-center cursor-pointer">
                        <div className="square-image-wrapper relative rounded-[4px] overflow-hidden w-full min-w-[250px]">
                            <img alt="product-img" title="Nike Air Force 1'07" src="/example.jpg" className="w-full duration-[0.2s] group-hover:scale-125 h-full lg:min-h-[300px] md:min-h-[200px] xl:min-h-[300px] object-cover"/>
                            <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-bl-[4px] rounded-tr-[4px] bg-primary">
                                <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
                                <p className={`text-md pr-1 text-white ${rowdies.className}`}>01:35</p>
                            </div>
                        </div>
                        <div className="text-wrap flex flex-col items-start lg:px-0 md:px-0 sm:px-0 xl:px-10">
                            <div className="flex items-center mt-4">
                                <div className="bg-primary w-fit px-3 py-1.5">
                                    <h6 className={`text-sm text-white font-bold ${rowdies.className}`}>All</h6>
                                </div>
                                <p className={`font-medium text-sm text-center ml-3 ${rowdies.className}`}>16 Mar 2024</p>
                            </div>
                            <h3 className={`text-xl group-hover:underline py-4 font-bold ${kanit.className}`}>
                                Exciting Match Ends in Thrilling Draw
                            </h3>
                            <p className={`text-sm py-2 font-medium ${montserrat.className}`}>
                                Read about the intense battle between two top teams and the dramatic ending.
                            </p>
                            <button className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                                Read More
                                <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                            </button>
                        </div>

                    </div> <div className="flex sm:flex-col md:flex-col xl:flex-row lg:flex-col col-span-1 group w-full sm:items-start  md:items-start lg:items-start xl:items-center cursor-pointer">
                        <div className="square-image-wrapper relative rounded-[4px] overflow-hidden w-full min-w-[250px]">
                            <img alt="product-img" title="Nike Air Force 1'07" src="/example.jpg" className="w-full duration-[0.2s] group-hover:scale-125 h-full lg:min-h-[300px] md:min-h-[200px] xl:min-h-[300px] object-cover"/>
                            <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-bl-[4px] rounded-tr-[4px] bg-primary">
                                <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
                                <p className={`text-md pr-1 text-white ${rowdies.className}`}>01:35</p>
                            </div>
                        </div>
                        <div className="text-wrap flex flex-col items-start lg:px-0 md:px-0 sm:px-0 xl:px-10">
                            <div className="flex items-center mt-4">
                                <div className="bg-primary w-fit px-3 py-1.5">
                                    <h6 className={`text-sm text-white font-bold ${rowdies.className}`}>All</h6>
                                </div>
                                <p className={`font-medium text-sm text-center ml-3 ${rowdies.className}`}>16 Mar 2024</p>
                            </div>
                            <h3 className={`text-xl group-hover:underline py-4 font-bold ${kanit.className}`}>
                                Exciting Match Ends in Thrilling Draw
                            </h3>
                            <p className={`text-sm py-2 font-medium ${montserrat.className}`}>
                                Read about the intense battle between two top teams and the dramatic ending.
                            </p>
                            <button className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                                Read More
                                <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    <Footer />
      </>

  );
}
