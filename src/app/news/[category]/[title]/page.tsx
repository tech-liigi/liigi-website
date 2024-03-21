import { Header, Footer, Social } from "@/components"
import {kanit, kanit_bold, rowdies, montserrat, inter,montserrat_italic} from "@/fonts"
import Image from "next/image"
import Link from "next/link"
import React from "react";

export default function Article({params}:{params:{title:string, category:string}}){
    return (
        <>
            <Header els={[{name:"Preview", href:"preview"}, {name:"Share", href:"share"}, {name:"Sponsors", href:"footer"}]}/>
                <main className="mt-[200px] mb-[100px] w-full flex flex-col">
                    <div className="flex flex-col justify-center items-start sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] m-auto">
                        <div className="flex-row flex">
                          <p className="pr-2">News</p>
                            <Image src={"/black-arrow-down.svg"} alt={"arrow-down"} width={10} height={10} className="-rotate-90" />
                            <p className="px-2 first-letter:uppercase">{params.category}</p>
                        </div>
                        <h1 className="font-bold mt-2 sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-snug">Exciting Match Between Rivals Ends in Draw</h1>
                        <div className="xl:my-10 lg:my-10 md:my-10 sm:my-4 flex xl:flex-row lg:flex-row flex-row md:flex-row  max-[480px]:flex-col justify-between xl:items-center lg:items-center items-start md:items-center w-full">
<div className='flex flex-col items-start sm:my-4 md:my-0 xl:my-0 lg:my-0'>
    <p className="font-bold">John Doe</p>
    <div className="flex">
        <p className="pr-2">March 16, 2024</p>
        <Image src={"/ball.svg"} alt={"arrow-down"} width={15} height={15} />
        <p className="px-2">5 Minute Read</p>
    </div>
</div>
                           <Social/>
                        </div>
                    </div>
                    <a  id={"preview"} target={"_blank"}>
                    <Image className="m-auto" src="/example.jpg" alt="preview" title={"Title"} width={1300} height={1300} quality={100}/>
                    </a>
                        <div  className="flex flex-col sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] m-auto my-10">
                 <h2 className={`${kanit_bold.className} text-4xl py-2`}>Introduction</h2>  {/* difference will be in font size*/}
                 <p className={`py-3 text-md `}>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                 <p className={`py-3 text-md`}>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                 <figure className="my-4">
                     <a href={'#'} target={"_blank"}>
                        <Image className="m-auto cursor-pointer my-2" src="/example.jpg" alt="preview" title={"Title"} width={800} height={800} />
                     </a>
                         <div className="flex items-center mt-3">
                     <div className="w-[2.5px] h-5 bg-black mr-2"/>
                     <figcaption className={`${inter.className} text-sm`}>Image caption goes here</figcaption>
                 </div>
                 </figure>
                 <p className={`py-3 text-md font-bold`}>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
                 <p className={`py-3 text-md`}>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
                 <blockquote>
                         <p className={`${montserrat_italic.className} flex-1 `}>"Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus."</p>
                <span>Don</span>
                 </blockquote>
                 <p className={`py-3 text-md`}>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                 <h3 className={`${kanit_bold.className} text-3xl py-2`}>Conclusion</h3>  {/* difference will be in font size*/}
                 <p className={`py-3 text-md`}>Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.</p>
                 <p className={`py-3 text-md`}>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</p>
                 <a className={`underline text-secondary ${rowdies.className}`} href={"#"}>Link</a>
             </div>
            <p  className="text-center font-bold text-lg my-5">Read More</p>
                    <div id={'share'} className="flex justify-center items-center">
                       <Social/>
                    </div>
                    <div  className="flex max-[500px]:justify-start justify-center md:justify-center lg:justify-center xl:justify-center w-full whitespace-nowrap items-center overflow-x-auto mb-5 mt-10">
                        <div className="hover:bg-primary duration-[0.2s] bg-[#EEEEEE] w-fit px-3 mx-2 py-1.5 cursor-pointer group">
                            <h6 className={`text-sm text-black group-hover:text-white font-bold ${rowdies.className}`}>LiiGi</h6>
                        </div>   <div className="hover:bg-primary duration-[0.2s] bg-[#EEEEEE] w-fit px-3 mx-2 py-1.5 cursor-pointer group">
                            <h6 className={`text-sm text-black group-hover:text-white font-bold ${rowdies.className}`}>Sports Updates</h6>
                        </div>   <div className="hover:bg-primary duration-[0.2s] bg-[#EEEEEE] w-fit px-3 mx-2 py-1.5 cursor-pointer group">
                            <h6 className={`text-sm text-black group-hover:text-white font-bold ${rowdies.className}`}>Football News</h6>
                        </div>   <div className="hover:bg-primary duration-[0.2s] bg-[#EEEEEE] w-fit px-3 mx-2 py-1.5 cursor-pointer group">
                            <h6 className={`text-sm text-black group-hover:text-white font-bold ${rowdies.className}`}>Sports Events</h6>
                        </div>   <div className="hover:bg-primary duration-[0.2s] bg-[#EEEEEE] w-fit px-3 mx-2 py-1.5 cursor-pointer group">
                            <h6 className={`text-sm text-black group-hover:text-white font-bold ${rowdies.className}`}>Other</h6>
                        </div>
                    </div>
                    <div  className="bg-black w-[70%] h-[0.8px] mx-auto my-5"/>
                    <p className="font-bold text-center mt-5">John Doe</p>
                    <p className="text-center mt-2">Sports Journalist, XYZ News</p>
                    <div className="flex px-10  lg:items-center md:items-center sm:items-start xl:items-center mt-[100px] w-full lg:flex-row xl:flex-row md:flex-row sm:flex-col justify-between">
                     <div className="flex flex-col items-start sm:w-full lg:w-[50%] xl:w-[50%] md:w-[50%] ">
                      <h2 className="font-bold xl:text-5xl lg:text-5xl md:text-5xl sm:text-4xl">Stay Informed with Latest News</h2>
                         <p className={`${montserrat.className} text-md my-5`}>Get all the updates and insights about the league and its clubs.</p>
                         <div className="flex items-start justify-start mt-2">
                             <button className={`mt-3 text-center mb-5 text-white bg-black border-black border-2 outline-none duration-[0.1s] hover:underline hover:rounded-[8px] text-md ${inter.className} xl:px-6 lg:px-6 md:px-6 sm:px-4 xl:py-3 lg:py-3 md:py-3 sm:py-2 rounded-[4px]`}>Learn More</button>
                             <button  className={`mt-3 ml-5 text-center mb-5 text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:underline hover:rounded-[8px]  text-md ${inter.className} xl:px-6 lg:px-6 md:px-6 sm:px-4 xl:py-3 lg:py-3 md:py-3 sm:py-2 rounded-[4px]`}> Sign Up</button>
                         </div>
                     </div>
                        <div className="sm:w-full lg:w-[50%] xl:w-[50%] md:w-[50%] flex overflow-hidden xl:justify-center md:justify-center lg:justify-center sm:justify-start sm:mt-5">
                            <img alt="product-img" title="Nike Air Force 1'07" src="/bg-4.jpg" className="w-[90%] duration-[0.2s] group-hover:scale-125 h-full lg:min-h-[400px] md:min-h-[300px] xl:min-h-[400px] sm:min-h-[200px] min-w-[300px] object-cover"/>
                        </div>
                    </div>
               </main>
            <Footer/>
        </>
    )
}