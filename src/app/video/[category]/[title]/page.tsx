import { Header, Footer, Player, NewsList, Social } from "@/components"
import Image from "next/image"
// import Link from "next/link"
import React from "react";

export default function Video({params}:{params:{title:string, category:string}}){
    return(
        <>
            <Header els={[{name:"Preview", href:"preview"}, {name:"Sponsors", href:"footer"}]}/>
            <main className="my-[200px] h-full w-full">
                <div id={"preview"} className="sm:w-full lg:items-center md:items-center sm:items-start xl:items-center md:w-[95%] lg:w-[90%] xl:w-[90%] mx-auto max-[570px]:h-[55vh] h-[75vh] lg:h-[40vh] md:h-[40vh] xl:h-[40vh] flex xl:flex-row lg:flex-row md:flex-row sm:flex-col px-5 my-10">
                    <div className="flex flex-col justify-center items-start sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] sm:px-2 md:px-10 lg:px-10 xl:px-10 m-auto">
                        <div className="flex-row flex">
                            <p className="pr-2">Video</p>
                            <Image src={"/black-arrow-down.svg"} alt={"arrow-down"} width={10} height={10} className="-rotate-90" />
                            <p className="px-2 first-letter:uppercase">{params.category}</p>
                        </div>
                        <h1 className="font-bold mt-5 sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-snug">Exciting Match Between Rivals Ends in Draw</h1>
                        <div className="xl:my-10 lg:my-10 md:my-10 sm:my-4 flex flex-col justify-between items-start w-full">
                            <div className='flex flex-col items-start sm:my-4 md:my-0 xl:my-0 lg:my-0'>
                                <p className="font-bold text-sm">By John Doe</p>
                                <div className="flex py-1">
                                    <p className="pr-2 text-sm">March 16, 2024</p>
                                    <Image src={"/ball.svg"} alt={"arrow-down"} width={10} height={10} />
                                    <p className="px-2 text-sm">5 Minute Watch</p>
                                </div>
                                <p className="font-bold text-md">Share This Video</p>
                            </div>
                            <Social/>
                        </div>
                    </div>
                    <div className="w-full mx-auto h-full block">
                        <Player />
                    </div>
                </div>
            </main>
            <NewsList type={'video'} />
            <Footer/>
        </>
    )
}