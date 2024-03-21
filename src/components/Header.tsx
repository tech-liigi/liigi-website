'use client'
import React, {useState,useEffect,useRef} from 'react';
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { motion } from "framer-motion";
import {kanit, rowdies, montserrat, inter} from "../fonts"

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
                             setActive,
                             active,
                             item,
                             children,
                         }: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className={`cursor-pointer flex ${inter.className} py-5 text-md px-6 text-white hover:text-secondary duration-[0.1s]`}
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: -25 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
                         setActive,
                         children,
    active
                     }: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
    active:boolean;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className={`relative ${active?'pl-10':'pl-5'} z-10 list-none flex justify-evenly`}
        >
            {children}
        </nav>
    );
};
export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-secondary"
        >
            {children}
        </Link>
    );
};
const TopHeader = () =>{
    return (
        <section className="flex p-8 justify-between items-center">
            <div className="flex">
            <div className="font-bold leading-[150%] text-md pr-4">
                Explore our league's football clubs
            </div>
                <Image src={"/cta-icon.svg"} alt={"cta-icon"}  width={20} height={20}/>
            </div>

            <div className="flex justify-evenly items-center group">
                <a href={'#'} target={"_blank"} rel={"noopener"}>
                    <Image  className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Agege_FC_Logo.png"} alt={"Agege_Logo"} title={"Agege FC"}  width={50} height={50}/>
                </a>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Apapa_FC_Logo.png"} alt={"Apapa_Logo"} title={"Apapa FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ikeja_FC_Logo.png"} alt={"Ikeja_Logo"} title={"Ikeja FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ikorodu_FC_Logo.png"} alt={"Ikorodu_Logo"} title={"Ikorodu FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ikoyi_FC_Logo.png"} alt={"Ikoyi_Logo"} title={"Ikoyi FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Kosofe_FC_Logo.png"} alt={"Kosofe_Logo"} title={"Kosofe FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Lekki_FC_Logo.png"} alt={"Lekki_Logo"} title={"Lekki FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Mushin_FC_Logo.png"} alt={"Mushin_Logo"} title={"Mushin FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ojo_FC_Logo.png"} alt={"Ojo_Logo"} title={"Ojo FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ondo_FC_Logo.png"} alt={"Ondo_Logo"} title={"Ondo FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Oshodi_FC_Logo.png"} alt={"Oshodi_Logo"} title={"Oshodi FC"} width={50} height={50}/>
                <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Oshogbo_FC_Logo.png"} alt={"Oshogbo_Logo"} title={"Osogbo FC"} width={50} height={50}/>
            </div>
        </section>
    )
}

const MainHeader = ({ paddingResize }: any) => {
    const [showSubMenu, setShowSubMenu] = useState<string | null>(null) // State to control submenu visibility
    const logoRef= useRef(null);
    const handleMouseEnter = () => {
        if(typeof window !== "undefined" && window.innerWidth > 1024 && window.scrollY <= 350){
            const tl = gsap.timeline();

            tl.to(logoRef.current, { y: -10, duration: 0.2, ease: 'power1.inOut' })
                .to(logoRef.current, { y: 0, duration: 0.2, ease: 'power1.inOut' })
                .to(logoRef.current, { y: -5, duration: 0.1, ease: 'power1.inOut' })
                .to(logoRef.current, { y: 0, duration: 0.1, ease: 'power1.inOut' })
                .to(logoRef.current, { y: -2, duration: 0.1, ease: 'power1.inOut' })
                .to(logoRef.current, { y: 0, duration: 0.1, ease: 'power1.inOut' });
        }
    };
    return (
        <section className="flex z-10 py-0 px-16 bg-black justify-between items-center">
            <div className="flex justify-center items-center">
                <Link href={"/"}>
                <Image
                    id={"logo"}
                    ref={logoRef}
                    className="scale-125"
                    src={"/LiiGi.jpg"}
                    alt={"LiiGi_Logo"}
                    title={"LiiGi"}
                    width={100}
                    height={100}
                    onMouseEnter={handleMouseEnter}
                    quality={100}
                />
                </Link>
                <nav>
                    <Menu active={paddingResize} setActive={setShowSubMenu}>
                        <Link href={"/"}>
                        <li className={`flex ${inter.className} p-5 text-md px-6 text-white hover:text-secondary duration-[0.1s]`}>
                            Home
                        </li>
                        </Link>
                        <MenuItem
                            setActive={setShowSubMenu} active={showSubMenu} item="Clubs"
                        >
                                <div className="grid grid-cols-6 gap-4 space-y-4 text-sm z-10">
                                    <div className="flex col-span-1 mt-4 items-center justify-center flex-col">
                                        <Image src={"/Agege_FC_Logo.png"} alt={"Agege_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Agege</HoveredLink>
                                    </div> <div className="flex col-span-1 mt-4 items-center justify-center flex-col">
                                        <Image src={"/Apapa_FC_Logo.png"} alt={"Apapa_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Apapa</HoveredLink>
                                    </div> <div className="flex col-span-1 items-center justify-center flex-col">
                                        <Image src={"/Ikeja_FC_Logo.png"} alt={"Ikeja_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Ikeja</HoveredLink>
                                    </div> <div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Ikorodu_FC_Logo.png"} alt={"Ikorodu_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Ikorodu</HoveredLink>
                                    </div> <div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Ikoyi_FC_Logo.png"} alt={"Ikoyi_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Ikoyi</HoveredLink>
                                    </div> <div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Kosofe_FC_Logo.png"} alt={"Kosofe_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Kosofe</HoveredLink>
                                    </div> <div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Lekki_FC_Logo.png"} alt={"Lekki_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Lekki</HoveredLink>
                                    </div> <div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Mushin_FC_Logo.png"} alt={"Mushin_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Mushin</HoveredLink>
                                    </div> <div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Ojo_FC_Logo.png"} alt={"Ojo_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Ojo</HoveredLink>
                                    </div> <div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Ondo_FC_Logo.png"} alt={"Ondo_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Ondo</HoveredLink>
                                    </div> <div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Oshodi_FC_Logo.png"} alt={"Oshodi_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Oshodi</HoveredLink>
                                    </div><div className="flex col-span-1 m-0 items-center justify-center flex-col">
                                        <Image src={"/Oshogbo_FC_Logo.png"} alt={"Oshogbo_LoGo"} width={50} height={50} />
                                       <HoveredLink href="#">Oshogbo</HoveredLink>
                                    </div>
                                </div>
                        </MenuItem>
                        <MenuItem
                            setActive={setShowSubMenu} active={showSubMenu} item="Links"
                        >
                            <div className={"flex flex-col justify-around items-center p-2"}>
                                <HoveredLink href="#">Link 1</HoveredLink>
                                <HoveredLink href="#">Link 2</HoveredLink>
                                <HoveredLink href="#">Link 3</HoveredLink>
                                <HoveredLink href="#">Link 4</HoveredLink>
                                <HoveredLink href="#">Link 5</HoveredLink>
                            </div>
                        </MenuItem>
                    </Menu>
                </nav>
            </div>
            <div className="flex justify-evenly w-[40%] min-w-[300px] max-w-[320px]">
                <button className={`text-white border-amber-50 text-md border-2 rounded-[4px] px-6 py-2 outline-none hover:bg-white hover:text-black hover:border-black duration-[0.1s]`}>
                    First CTA
                </button>
                <button className={`text-white border-amber-50 text-md border-2 rounded-[4px] px-6 py-2 outline-none hover:bg-white hover:text-black hover:border-black duration-[0.1s]`}>
                    Second CTA
                </button>
            </div>
        </section>
    );
};
const MobileMainHeader = () => {
    const [open, isOpen] = useState(false);
    const [toggle, setToggle] = useState("arrow");
    const [toggleOpened, setToggleOpened] = useState(false);
    useEffect(() => {
        if (open) {
            gsap.fromTo(
                '.mobile-content',
                { y: '100%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.2, ease: 'power2.out' }
            );
        } else {
            gsap.to('.mobile-content', { y: '-100%', opacity: 0, duration: 0.5, ease: 'power2.out' });
        }
    }, [open]);
    const onToggle = ()=>{
        if(toggleOpened && toggle.length){
            gsap.to(`.${toggle}`, { rotation: '-=90', ease: 'bounce.out', duration: 0.5 });
            setToggleOpened(false);
        }else{
            gsap.to(`.${toggle}`, { rotation: '+=90', ease: 'bounce.out', duration: 0.5 });
            setToggleOpened(true);
        }
    }
    return (
        <section className={`flex flex-col justify-start items-center w-full max-h-screen ${open ? 'overflow-y-auto' : 'overflow-y-hidden'}`}>
            <div className="w-full flex justify-between bg-black px-10 relative">
                <Image className='scale-105' src={"/LiiGi.jpg"} alt={'LiiGi_Logo'} title={"LiiGi"} width={80} height={80} quality={100}/>
                {!open &&<Image onClick={()=>isOpen(true)} src='/bars-icon.svg' alt='bars-icon' width={30} height={30}/>}
                {open&&<Image onClick={()=>isOpen(false)} src='/cross-icon.svg' alt='cross-icon' width={30} height={30}/>}
            </div>
            {open &&   <div className={`mobile-content flex flex-col bg-white z-10 w-full px-10 py-5 overflow-x-hidden h-screen  duration-[0.2s]`}>
                <nav>
                    <ul className="list-none flex flex-col">
                        <li className={`flex text-lg py-3 ${inter.className}`}>Home</li>
                        <details onClick={()=>{
                            setToggle('arrow');
                            onToggle();
                        }} className="toggle-arrow">
                            <summary className={`flex justify-between  ${inter.className} text-lg py-3 `}>
                                Clubs
                                <Image  className='-rotate-90 arrow' src={"/black-arrow-down.svg"} alt={'arrow-down'} width={15} height={15}/>
                            </summary>
                            <div className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                                <div className='flex flex-wrap justify-center bg-white'>
                                    <a href={'#'} target={"_blank"} rel={"noopener"}>
                                        <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Agege_FC_Logo.png"} alt={"Agege_Logo"} title={"Agege FC"}  width={100} height={100}/>
                                    </a>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Apapa_FC_Logo.png"} alt={"Apapa_Logo"} title={"Apapa FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ikeja_FC_Logo.png"} alt={"Ikeja_Logo"} title={"Ikeja FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ikorodu_FC_Logo.png"} alt={"Ikorodu_Logo"} title={"Ikorodu FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ikoyi_FC_Logo.png"} alt={"Ikoyi_Logo"} title={"Ikoyi FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Kosofe_FC_Logo.png"} alt={"Kosofe_Logo"} title={"Kosofe FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Lekki_FC_Logo.png"} alt={"Lekki_Logo"} title={"Lekki FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Mushin_FC_Logo.png"} alt={"Mushin_Logo"} title={"Mushin FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ojo_FC_Logo.png"} alt={"Ojo_Logo"} title={"Ojo FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Ondo_FC_Logo.png"} alt={"Ondo_Logo"} title={"Ondo FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Oshodi_FC_Logo.png"} alt={"Oshodi_Logo"} title={"Oshodi FC"} width={100} height={100}/>
                                    <Image className="cursor-pointer duration-[0.1s] hover:scale-125" src={"/Oshogbo_FC_Logo.png"} alt={"Oshogbo_Logo"} title={"Osogbo FC"} width={100} height={100}/>
                                </div>
                            </div>
                        </details>
                    </ul>
                </nav>

                <div className='bg-[#EEEEEE] px-5 py-5 mt-10'>
                    <div className='pb-2'>Want to see more?</div>
                    <div className='underline underline-offset-[1.5px]'>Subscribe our social media</div>
                </div>

                <div className="mt-5 py-5 flex flex-col">
                    <button className="text-center mb-5 text-black bg-white border-black border-2 outline-none duration-[0.1s] active:text-white active:bg-black active:border-white text-md font-sans-['Inter'] min-w-[250px] py-2">Join</button>
                    <button className="text-center text-white bg-black border-black border-2 outline-none text-md active:text-black active:bg-white font-sans-['Inter'] min-w-[250px] py-2">Sign Up</button>
                </div>
            </div>}
        </section>
    )
}
type El = {name:string; href:string}
const SubHeader = (props:
                       {
                           els: Array<El>
                       }) =>{
    return (
        <section className="flex z-10 bg-white xl:px-5 xl:pl-16 lg:px-5 lg:pl-16 md:px-0 sm:px-0">
            <div className='w-[100px] xl:block lg:block md:hidden sm:hidden'/>
            <div className="overflow-x-auto overflow-y-hidden flex xl:w-fit lg:w-fit xl:justify-evenly lg:justify-evenly md:justify-center sm:justify-start sm:w-full md:w-full items-center pl-4">
                {props.els?.map((el:{name:string, href:string})=>(
                    <div className="px-8 sm:text-sm md:text-md lg:text-md xl:text-md cursor-pointer text-center py-5 relative font-sans-['Inter'] group">
                        <Link href={`#${el.href}`} className='font-medium text-md'>
                            {el.name}
                        </Link>
                        <div className="w-full px-5 h-1.5 absolute bottom-[-10%] opacity-0 left-0 duration-[0.2s] bg-primary group-hover:opacity-100 group-hover:bottom-0"/>
                    </div>
                ))}
            </div>
        </section>

    );
}

const Header = (props:
    {
        els: Array<El>
    })=> {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [active, setActive] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 950);
        }
        function debounce(func: Function, delay: number) {
            let timeoutId: NodeJS.Timeout;
            return (...args: any) => {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    func(...args);
                }, delay);
            };
        }
        function handleScroll() {
                const currentScrollY = window.scrollY;
                if (!isMobile) {
                    if (currentScrollY > prevScrollY && currentScrollY > 350) { // Adjust the scroll position threshold as needed
                        gsap.to("#header", {
                            y: -115, // Adjust this value according to the height of your header
                            duration: 0.5,
                            ease: "back.out",
                            className: "fixed w-full z-10 max-h-[180px] drop-shadow-md"
                        });
                        setActive(true);
                        gsap.to("#logo",{
                            scale:"1",
                            duration: 0.1,
                            ease: "power1.in",
                            width:80,
                            height:80
                        })
                    } else if(currentScrollY < prevScrollY || currentScrollY <= 350) {
                        gsap.to("#header", {
                            y: 0,
                            duration: 0.2,
                            ease: "power1.inOut",
                            className: "w-full absolute z-10 max-h-[180px]"
                        });
                        gsap.to("#logo",{
                            duration: 0.2,
                            ease: "power1.out",
                            scale:"1.25",
                            width:100,
                            height:100
                        })
                        setActive(false);
                    }
                    setPrevScrollY(currentScrollY);
                }

        }
        const debouncedHandleScroll = debounce(handleScroll, 100);
        window.addEventListener('scroll', debouncedHandleScroll);
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', debouncedHandleScroll);
        };
    }, [isMobile]);

    return (
        // fixed here
        <header>
            {!isMobile ? <><TopHeader/><div ref={headerRef} className="w-full z-10 absolute max-h-[180px]" id="header"><MainHeader paddingResize={active}/><SubHeader els={props.els}/></div></> : <div id="header" className='w-full fixed top-0 z-10 drop-shadow-md'><MobileMainHeader/><SubHeader els={props.els}/></div>}
        </header>
    )
}

export default Header;