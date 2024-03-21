'use client'
import {inter, kanit, kanit_bold, montserrat, rowdies} from "@/fonts";
import Image from "next/image";
import { useRef, useEffect, useState } from 'react';

const NewsList = ({type}:{type?:string})=> {
    const productListRef = useRef<HTMLDivElement>(null);
    const product = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {
        const checkScrollLimit = () => {
            if (productListRef.current) {
                const list = productListRef.current;
                const left = list.scrollLeft;
                const width = list.clientWidth;
                const scrollWidth = list.scrollWidth;

                const newCanScrollLeft = left > 0;
                const newCanScrollRight = left + width < scrollWidth - 10;

                setCanScrollLeft(newCanScrollLeft);
                setCanScrollRight(newCanScrollRight);
            }
        };

        checkScrollLimit();

        const productListElement = productListRef.current;
        if (productListElement) {
            productListElement.addEventListener("scroll", checkScrollLimit);
            return () => {
                productListElement.removeEventListener("scroll", checkScrollLimit);
            };
        }
    }, [canScrollLeft, canScrollRight]);
    const scrollByAmount = (amount:number) => {
        if (productListRef.current) {
            productListRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };


    return (
        <section id="news" className="mt-10 product-list-container overflow-auto whitespace-nowrap w-full">
            <div  className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full lg:gap-4 md:gap-4 sm:gap-0 xl:gap-4">
                <div className="xl:p-10 lg:p-10 md:p-10 sm:p-5 text-wrap">
                    <h6 className={`text-sm font-semibold ${rowdies.className} text-primary`}>Tagline</h6>
                    <h2 className={`group-hover:underline xl:text-5xl md:text-4xl sm:text-3xl lg:text-5xl py-5 font-bold ${kanit_bold.className}`}>Stay Updated with Football News</h2>
                    <p className={`${montserrat.className} py-3 text-sm`}>Get the latest updates on football matches and league news.</p>
                </div>
                <div className="flex sm:justify-start md:justify-end lg:justify-end xl:justify-end items-end xl:mx-10 lg:mx-10 lg:my-10 md:my-10 md:mx-10 sm:mx-0 sm:my-0 xl:my-10">
                    <button className={`mt-3 ml-5 text-center mb-5 text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:text-white hover:bg-black hover:border-white  text-md font-sans-[${inter.className}] px-6 py-3 rounded-[4px]`}>View All</button>
                </div>
            </div>
            <div  ref={productListRef} id="product-list" className="product-list-container relative overflow-auto whitespace-nowrap w-full py-5">

                <div className="product-list inline-block xl:px-8 lg:px-8 md:px-6 sm:px-0">
                    <div ref={product} className={` product group max-w-[500px] lg:w-[50%] xl:w-[50%] md:w-[35%] sm:w-[20%] cursor-pointer inline-block px-2 min-w-[320px] `}>
                        <div className={`square-image-wrapper relative overflow-hidden ${type==='video'?'rounded-[4px]' : 'rounded-none'}`}>
                            <img alt="product-img" title="Nike Air Force 1'07" src="/example.jpg" className="w-full duration-[0.2s] group-hover:scale-125 md:min-h-[300px] lg:min-h-[300px] xl:min-h-[300px] sm:min-h-[200px] object-cover"/>
                            {type==='video' && <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-bl-[4px] rounded-tr-[4px] bg-primary">
                                <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
                                <p className={`text-md pr-1 text-white ${rowdies.className}`}>01:35</p>
                            </div>}
                        </div>
                        <div className="text-wrap">
                            <div className="flex items-center mt-4">
                                <div className="bg-primary w-fit px-3 py-1.5">
                                    <h6 className={`text-sm text-white font-bold ${rowdies.className}`}>All</h6>
                                </div>
                                <p className={`font-medium  text-sm text-center ml-3 ${rowdies.className}`}>16 Mar 2024</p>
                            </div>
                            <h3 className={`text-lg group-hover:underline font-bold py-2 ${kanit.className}`}>
                                Exciting Match Ends in Thrilling Draw
                            </h3>
                            {type !== 'video' && <> <p className={`text-md font-medium ${montserrat.className}`}>
                                Read about the intense battle between two top teams and the dramatic ending.
                            </p>
                                <button className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                                    Read More
                                    <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                                </button></>}

                        </div>
                    </div>   <div ref={product} className="product group max-w-[500px] lg:w-[50%] xl:w-[50%] md:w-[35%] sm:w-[20%] cursor-pointer inline-block px-2 min-w-[320px]">
                    <div className="square-image-wrapper relative overflow-hidden">
                        <img alt="product-img" title="Nike Air Force 1'07" src="/example.jpg" className="w-full duration-[0.2s] group-hover:scale-125 md:min-h-[300px] lg:min-h-[300px] xl:min-h-[300px] sm:min-h-[200px] object-cover"/>
                        {type==='video' && <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-bl-[4px] rounded-tr-[4px] bg-primary">
                            <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
                            <p className={`text-md pr-1 text-white ${rowdies.className}`}>01:35</p>
                        </div>}
                    </div>
                    <div className="text-wrap">
                        <div className="flex items-center mt-4">
                            <div className="bg-primary w-fit px-3 py-1.5">
                                <h6 className={`text-sm text-white font-bold ${rowdies.className}`}>All</h6>
                            </div>
                            <p className={`font-medium  text-sm text-center ml-3 ${rowdies.className}`}>16 Mar 2024</p>
                        </div>
                        <h3 className={`text-lg group-hover:underline font-bold py-2 ${kanit.className}`}>
                            Exciting Match Ends in Thrilling Draw
                        </h3>
                        {type !== 'video' && <> <p className={`text-md font-medium ${montserrat.className}`}>
                            Read about the intense battle between two top teams and the dramatic ending.
                        </p>
                            <button className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                                Read More
                                <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                            </button></>}

                    </div>
                </div>   <div ref={product} className="product group max-w-[500px] lg:w-[50%] xl:w-[50%] md:w-[35%] sm:w-[20%] cursor-pointer inline-block px-2 min-w-[320px]">
                    <div className="square-image-wrapper relative overflow-hidden">
                        <img alt="product-img" title="Nike Air Force 1'07" src="/example.jpg" className="w-full duration-[0.2s] group-hover:scale-125 md:min-h-[300px] lg:min-h-[300px] xl:min-h-[300px] sm:min-h-[200px] object-cover"/>
                        {type==='video' && <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-bl-[4px] rounded-tr-[4px] bg-primary">
                            <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
                            <p className={`text-md pr-1 text-white ${rowdies.className}`}>01:35</p>
                        </div>}
                    </div>
                    <div className="text-wrap">
                        <div className="flex items-center mt-4">
                            <div className="bg-primary w-fit px-3 py-1.5">
                                <h6 className={`text-sm text-white font-bold ${rowdies.className}`}>All</h6>
                            </div>
                            <p className={`font-medium  text-sm text-center ml-3 ${rowdies.className}`}>16 Mar 2024</p>
                        </div>
                        <h3 className={`text-lg group-hover:underline font-bold py-2 ${kanit.className}`}>
                            Exciting Match Ends in Thrilling Draw
                        </h3>
                        {type !== 'video' && <> <p className={`text-md font-medium ${montserrat.className}`}>
                            Read about the intense battle between two top teams and the dramatic ending.
                        </p>
                            <button className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                                Read More
                                <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                            </button></>}

                    </div>
                </div>   <div ref={product} className="product group max-w-[500px] lg:w-[50%] xl:w-[50%] md:w-[35%] sm:w-[20%] cursor-pointer inline-block px-2 min-w-[320px]">
                    <div className="square-image-wrapper relative overflow-hidden">
                        <img alt="product-img" title="Nike Air Force 1'07" src="/example.jpg" className="w-full duration-[0.2s] group-hover:scale-125 md:min-h-[300px] lg:min-h-[300px] xl:min-h-[300px] sm:min-h-[200px] object-cover"/>
                        {type==='video' && <div className="flex items-center justify-around w-[6%] min-w-[75px] p-0.5 absolute bottom-0 left-0 rounded-bl-[4px] rounded-tr-[4px] bg-primary">
                            <Image src={"/play-small-icon.svg"} alt={'play-icon'} width={30} height={30}/>
                            <p className={`text-md pr-1 text-white ${rowdies.className}`}>01:35</p>
                        </div>}
                    </div>
                    <div className="text-wrap">
                        <div className="flex items-center mt-4">
                            <div className="bg-primary w-fit px-3 py-1.5">
                                <h6 className={`text-sm text-white font-bold ${rowdies.className}`}>All</h6>
                            </div>
                            <p className={`font-medium  text-sm text-center ml-3 ${rowdies.className}`}>16 Mar 2024</p>
                        </div>
                        <h3 className={`text-lg group-hover:underline font-bold py-2 ${kanit.className}`}>
                            Exciting Match Ends in Thrilling Draw
                        </h3>
                        {type !== 'video' && <> <p className={`text-md font-medium ${montserrat.className}`}>
                            Read about the intense battle between two top teams and the dramatic ending.
                        </p>
                            <button className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}>
                                Read More
                                <Image className={'ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]'} src={'/black-arrow-down.svg'} alt={'arrow-down'} width={15} height={15}/>
                            </button></>}
                    </div>
                </div>

                </div>
            </div>
            <div className="w-full max-[1024px]:hidden justify-end items-center flex pr-[3%] mt-[2%]">
                <button disabled={!canScrollLeft}    onClick={() => scrollByAmount(-500)}  className="disabled:opacity-25 group scroll-button-left bg-white active:outline-blue-700 focus:outline-blue-700 focus:outline-1 active:outline-1 flex hover:bg-[#000] hover:border-white duration-[0.2s] cursor-pointer border-[1px] border-black justify-center items-center rounded-[50%] min-w-[70px] mx-2 min-h-[70px] w-fit">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-amber-50"  d="M20 10.9998H7.83L13.42 5.40976L12 3.99976L4 11.9998L12 19.9998L13.41 18.5898L7.83 12.9998H20V10.9998Z" fill="black"/>
                    </svg>

                </button>
                <button  disabled={!canScrollRight}   onClick={() => scrollByAmount(500)}  className="disabled:opacity-25 group scroll-button-left bg-white active:outline-blue-700 focus:outline-blue-700 focus:outline-1 active:outline-1 flex hover:bg-[#000] hover:border-white duration-[0.2s] cursor-pointer border-[1px] border-black justify-center items-center rounded-[50%] min-w-[70px] mx-2 min-h-[70px] w-fit">
                    <svg className="rotate-180" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="group-hover:fill-amber-50 "  d="M20 10.9998H7.83L13.42 5.40976L12 3.99976L4 11.9998L12 19.9998L13.41 18.5898L7.83 12.9998H20V10.9998Z" fill="black"/>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default NewsList;