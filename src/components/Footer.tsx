import React from 'react';
import {inter, kanit, kanit_bold, montserrat, rowdies} from "@/fonts";
import Link from "next/link"
import Image from "next/image"
const MainFooter = () => {
    return(
        <div className="w-full bg-black p-5 flex flex-col">
            <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col justify-between items-start m-2 w-full">
  <div className="flex  flex-col items-start">
<h3 className={`text-4xl text-white pb-1 font-bold ${kanit_bold.className}`}>
    Subscribe our social media
</h3>
      <p className={`${rowdies.className} text-md text-secondary`}>Stay up to date with our latest news.</p>
  </div>
                <div className="flex sm:py-5  sm:justify-between md:justify-evenly lg:justify-evenly xl:justify-evenly w-[10%] min-w-[120px] max-w-[150px]">
                    <div className="bg-white rounded-full group cursor-pointer p-2">
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="duration-[0.2s] group-hover:fill-secondary" d="M32.0833 17.9427C32.0833 9.83934 25.5542 3.27026 17.5 3.27026C9.44583 3.27026 2.91666 9.83934 2.91666 17.9427C2.91666 25.266 8.24955 31.3362 15.2213 32.4369V22.184H11.5185V17.9427H15.2213V14.7102C15.2213 11.0329 17.3986 9.00169 20.7296 9.00169C22.3253 9.00169 23.9941 9.28827 23.9941 9.28827V12.8991H22.1553C20.3437 12.8991 19.7786 14.0302 19.7786 15.1905V17.9427H23.8232L23.1767 22.184H19.7786V32.4369C26.7505 31.3362 32.0833 25.2663 32.0833 17.9427Z" fill="black"/>
                        </svg>
                    </div>   <div className="bg-white cursor-pointer rounded-full group p-2">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="duration-[0.2s] group-hover:fill-secondary" d="M17.1761 4.24243H19.9362L13.9061 11.0198L21 20.2424H15.4456L11.0951 14.649L6.11723 20.2424H3.35544L9.80517 12.9932L3 4.24243H8.69545L12.6279 9.35505L17.1761 4.24243ZM16.2073 18.6178H17.7368L7.86441 5.78171H6.2232L16.2073 18.6178Z" fill="black"/>
                    </svg>
                </div>
                </div>
            </div>
            <div className="grid max-[450px]:grid-cols-1 grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5 w-full mx-2 my-10">
     <div className="flex flex-col items-start">
      <h6 className={`mb-3 text-lg text-amber-50 ${rowdies.className} hover:underline decoration-dashed underline-offset-2`}>Column One</h6>
     <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>
     </div> <div className="flex flex-col items-start">
      <h6 className={`mb-3 text-lg text-amber-50 ${rowdies.className} hover:underline decoration-dashed underline-offset-2`}>Column One</h6>
     <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>
     </div> <div className="flex flex-col items-start">
      <h6 className={`mb-3 text-lg text-amber-50 ${rowdies.className} hover:underline decoration-dashed underline-offset-2`}>Column One</h6>
     <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>
     </div> <div className="flex flex-col items-start">
      <h6 className={`mb-3 text-lg text-amber-50 ${rowdies.className} hover:underline decoration-dashed underline-offset-2`}>Column One</h6>
     <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>
     </div> <div className="flex flex-col items-start">
      <h6 className={`mb-3 text-lg text-amber-50 ${rowdies.className} hover:underline decoration-dashed underline-offset-2`}>Column One</h6>
     <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>
     </div> <div className="flex flex-col items-start">
      <h6 className={`mb-3 text-lg text-amber-50 ${rowdies.className} hover:underline decoration-dashed underline-offset-2`}>Column One</h6>
     <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>   <Link href={"#"}>
         <p className="text-sm text-white my-2 hover:text-secondary">Link One</p>
     </Link>
     </div>
            </div>
        </div>
    )
}
const SubFooter = ()=>{
    return (
        <div  className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col justify-between items-center p-1">
         <Image className="cursor-pointer sm:py-2 md:py-0 xl:py-0 lg:py-0" src="/LiiGi.jpg" alt="LiiGi_LoGo" title="LiiGi" width={100} height={100}/>
            <div className="flex sm:py-5 md:py-0 xl:py-0 lg:py-0 justify-evenly w-[25%] min-w-[300px] items-center">
   <Link href={"#"}>
       <p className="text-sm underline hover:underline-offset-2 duration-[0.1s] underline-offset-1">Privacy Policy</p>
   </Link><Link href={"#"}>
       <p className="text-sm underline hover:underline-offset-2 duration-[0.1s] underline-offset-1">Terms of Service</p>
   </Link><Link href={"#"}>
       <p className="text-sm underline hover:underline-offset-2 duration-[0.1s] underline-offset-1">Back To Top</p>
   </Link>
            </div>
            <p className={`${montserrat.className} sm:py-2 md:py-0 xl:py-0 lg:py-0 text-md`}>© 2024 Ligii. All rights reserved.</p>
        </div>
    )
}
const Footer = () =>{
    return (
        <div id="footer">
            <section  className="mt-[80px]">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                    <Link href={"#"} className="p-4 border-b flex justify-around items-center flex-col border-r border-gray-300">
                        <Image width={100} height={100} src="/sponsor_1.svg" alt="Sponsor 1" className="max-w-full max-h-full" />
                        <p className={`${montserrat.className} text-sm mt-1`}>Shirt sponsor</p>
                    </Link>
                    <Link href={"#"}  className="border-b border-r flex justify-around items-center flex-col border-l border-gray-300 p-4">
                        <Image width={100} height={100} src="/sponsor_2.svg" alt="Sponsor 2" className="max-w-full max-h-full" />
                        <p className={`${montserrat.className} text-sm mt-1`}>Sleeve sponsor</p>
                    </Link>
                    <Link href={"#"}  className="border-l sm:border-r md:border-r-0  lg:border-r-0  xl:border-r-0 sm:border-t md:border-t-0 lg:border-t-0 xl:border-t-0  border-b flex justify-around items-center flex-col border-gray-300 p-4">
                        <Image width={100} height={100} src="/sponsor_1.svg" alt="Sponsor 3" className="max-w-full max-h-full" />
                        <p className={`${montserrat.className} text-sm mt-1`}>Shirt sponsor</p>
                    </Link>
                    <Link href={"#"} className="border-t border-r sm:border-l md:border-l-0 lg:border-l-0 xl:border-l-0 sm:border-b md:border-b-0 lg:border-b-0 xl:border-b-0 flex justify-around items-center flex-col border-gray-300 p-4">
                        <Image width={100} height={100} src="/sponsor_2.svg" alt="Sponsor 4" className="max-w-full max-h-full" />
                        <p className={`${montserrat.className} text-sm mt-1`}>Sleeve sponsor</p>
                    </Link>
                    <Link href={"#"}  className="border-l border-t border-r flex justify-around items-center flex-col border-gray-300 p-4">
                        <Image width={100} height={100} src="/sponsor_1.svg" alt="Sponsor 5" className="max-w-full max-h-full" />
                        <p className={`${montserrat.className} text-sm mt-1`}>Shirt sponsor</p>
                    </Link>      <Link href={"#"}  className="border-l border-t flex justify-around items-center flex-col border-gray-300 p-4">
                    <Image width={100} height={100} src="/sponsor_2.svg" alt="Sponsor 5" className="max-w-full max-h-full" />
                    <p className={`${montserrat.className} text-sm mt-1`}>Shirt sponsor</p>
                </Link>

                </div>
            </section>
            <footer className="flex flex-col w-full mt-10">
                <MainFooter/>
                <SubFooter/>
            </footer>
        </div>

    )
}
export default  Footer;