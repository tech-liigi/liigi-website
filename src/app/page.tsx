import { Carousel, NewsList, Footer, VideoMark } from "../components";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), {
  ssr: true,
});
import Link from "next/link";
import { kanit, kanit_bold, rowdies, montserrat, inter } from "../fonts";
import { sanityFetch } from "@/lib/fetch";
import {
  navQuery,
  clubsQuery,
  generalQuery,
  bannerQuery,
  sponsorsQuery,
  newsQuery,
  videoQuery,
  footerQuery,
  socialQuery,
  policiesQuery,
  Video,
  News,
  navResponse,
  BannerResponse,
  Sponsor,
} from "@/lib/queries";
import { urlForImage } from "@/lib/utils";
import React from "react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

function createSlug(category: string, slug: string, type: string) {
  return `/${type}/${category.charAt(0).toLowerCase() + category.slice(1, category.length)}/${slug}`;
}
function createDate(date: string) {
  const createdAtDate = new Date(date);
  return createdAtDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
export default async function Home() {
  const [
    nav,
    clubs,
    general,
    banner,
    sponsors,
    news,
    video,
    footer,
    social,
    policies,
  ] = await Promise.all([
    sanityFetch<navResponse>({
      query: navQuery,
    }),
    sanityFetch({
      query: clubsQuery,
    }),
    sanityFetch({
      query: generalQuery,
    }),
    sanityFetch<BannerResponse>({
      query: bannerQuery,
    }),
    sanityFetch<Sponsor[]>({
      query: sponsorsQuery,
    }),
    sanityFetch<News[]>({
      query: newsQuery,
    }),
    sanityFetch<Video[]>({
      query: videoQuery,
    }),
    sanityFetch({
      query: footerQuery,
    }),
    sanityFetch({
      query: socialQuery,
    }),
    sanityFetch({
      query: policiesQuery,
    }),
  ]);
  const home = nav.pages.find((p) => p.id === "home");
  // @ts-ignore
  return (
    <>
      <Header pageId={"home"} logo={general} clubs={clubs} menuItems={nav} />
      <main className={"pt-[160px]"}>
        {home?.page_sections?.map((section) => (
          <>
            {section.visible && (
              <>
                {section?.id === "banner" && (
                  <>
                    <div className="mt-[160px]" />
                    <section
                      style={{
                        backgroundImage: `url("${banner.background && urlForImage(banner.background)?.url()}")`,
                        objectFit: "cover",
                      }}
                      id="banner"
                      key={section.id}
                      className={`sm:mb-[370px] md:mb-0 lg:mb-0 xl:mb-0 sm:p-0 md:px-5 md:py-5 lg:px-5 lg:py-5 xl:px-5 xl:py-5 w-full object-cover h-full`}
                    >
                      <div className="grid  sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 gap-4 h-full">
                        {/* Big element */}
                        <div className="col-span-2 z-0 sm:border-0 sm:rounded-none sm:w-full bg-white rounded-[4px] border-[1px] border-black group h-full">
                          <div className="flex flex-col items-start px-5 sm:py-0 md:py-10 lg:py-10 xl:py-10 sm:h-full md:h-[50%] lg:h-[50%] xl:h-[50%] ">
                            <h6
                              className={`text-sm font-semibold py-2 ${rowdies.className} text-primary`}
                            >
                              {banner.items[0].category.title}
                            </h6>
                            {/*theme color here*/}
                            <Link
                              href={createSlug(
                                banner.items[0].category.title,
                                banner.items[0].slug.current,
                                banner.items[0]._type,
                              )}
                            >
                              <h2
                                className={`group-hover:underline xl:text-5xl md:text-4xl sm:text-3xl lg:text-5xl py-5 font-bold ${kanit_bold.className}`}
                              >
                                {banner.items[0].title}
                              </h2>
                            </Link>
                            <p
                              className={`${montserrat.className} py-3 text-sm`}
                            >
                              {banner.items[0].short_description}
                            </p>
                            <Link
                              href={createSlug(
                                banner.items[0].category.title,
                                banner.items[0].slug.current,
                                banner.items[0]._type,
                              )}
                            >
                              <button
                                className={`mt-10 text-center text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:text-white hover:bg-black hover:border-white text-md ${inter.className} xl:px-6 lg:px-6 md:px-5 sm:px-4 xl:py-3 lg:py-3 md:py-3 sm:py-2 rounded-[4px]`}
                              >
                                More
                              </button>
                            </Link>
                          </div>
                          <Link
                            href={createSlug(
                              banner.items[0].category.title,
                              banner.items[0].slug.current,
                              banner.items[0]._type,
                            )}
                          >
                            <div className="w-full relative sm:mt-5 md:mt-0 xl:mt-0 lg:mt-0 sm:h-full md:h-[50%] lg:h-[50%] xl:h-[50%] overflow-hidden cursor-pointer">
                              <div
                                style={{
                                  backgroundImage:
                                    banner.items[0]._type === "video"
                                      ? `url("${banner.items[0]?.video?.preview && urlForImage(banner.items[0]?.video?.preview)?.url()}")`
                                      : `url("${banner.items[0].preview && urlForImage(banner.items[0].preview)?.url()}")`,
                                }}
                                className="object-cover block h-full w-full  bg-no-repeat bg-center group-hover:scale-110 duration-300"
                              />
                              {banner.items[0]._type == "video" && (
                                <VideoMark url={banner.items[0]?.video?.url} />
                              )}
                            </div>
                          </Link>
                        </div>
                        <div className="sm:hidden md:grid col-span-1 grid-cols-1 xl:grid lg:grid gap-4">
                          {banner.items.slice(1, 3).map((item, i) => (
                            <div
                              key={item.slug.current}
                              className="bg-white relative rounded-[4px] border-[1px] border-black overflow-hidden max-h-[410px] min-h-[410px]"
                            >
                              <div className="flex flex-col items-start px-4 py-5 group">
                                <h6
                                  className={`text-sm font-semibold ${rowdies.className} text-primary`}
                                >
                                  {item.category.title}
                                </h6>
                                <Link
                                  href={createSlug(
                                    item.category.title,
                                    item.slug.current,
                                    item._type,
                                  )}
                                >
                                  <h2
                                    className={`group-hover:underline text-2xl cursor-pointer py-3 font-bold ${kanit.className}`}
                                  >
                                    {item.title}
                                  </h2>
                                </Link>
                                <Link
                                  href={createSlug(
                                    item.category.title,
                                    item.slug.current,
                                    item._type,
                                  )}
                                >
                                  <button
                                    className={`mt-3 duration-[0.1s] flex items-center text-md ${inter.className}`}
                                  >
                                    More
                                    <Image
                                      className={
                                        "ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]"
                                      }
                                      src={"/black-arrow-down.svg"}
                                      alt={"arrow-down"}
                                      width={15}
                                      height={15}
                                    />
                                  </button>
                                </Link>
                              </div>
                              <Link
                                href={createSlug(
                                  item.category.title,
                                  item.slug.current,
                                  item._type,
                                )}
                              >
                                <div className="overflow-hidden h-[60%]">
                                  <div
                                    style={{
                                      backgroundImage:
                                        item._type === "video"
                                          ? `url("${item?.video?.preview && urlForImage(item?.video?.preview)?.url()}")`
                                          : `url("${item.preview && urlForImage(item.preview)?.url()}")`,
                                    }}
                                    className="bg-no-repeat w-full duration-[0.3s] h-full object-center  object-contain bg-center hover:scale-110"
                                  />
                                  {item._type == "video" && (
                                    <VideoMark url={item?.video?.url} />
                                  )}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                        <div className="sm:hidden md:hidden col-span-1 grid-cols-1 xl:grid lg:grid gap-4">
                          {banner.items.slice(3, 5).map((item, i) => (
                            <div
                              key={item.slug.current}
                              className="bg-white relative rounded-[4px] border-[1px] border-black  overflow-hidden max-h-[410px] min-h-[410px]"
                            >
                              <div className="flex flex-col items-start px-4 py-5 group">
                                <h6
                                  className={`text-sm font-semibold ${rowdies.className} text-primary`}
                                >
                                  {item.category.title}
                                </h6>
                                <Link
                                  href={createSlug(
                                    item.category.title,
                                    item.slug.current,
                                    item._type,
                                  )}
                                >
                                  <h2
                                    className={`group-hover:underline text-2xl cursor-pointer py-3 font-bold ${kanit.className}`}
                                  >
                                    {item.title}
                                  </h2>
                                </Link>
                                <Link
                                  href={createSlug(
                                    item.category.title,
                                    item.slug.current,
                                    item._type,
                                  )}
                                >
                                  <button
                                    className={`mt-3 duration-[0.1s] flex items-center text-md ${inter.className}`}
                                  >
                                    More
                                    <Image
                                      className={
                                        "ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]"
                                      }
                                      src={"/black-arrow-down.svg"}
                                      alt={"arrow-down"}
                                      width={15}
                                      height={15}
                                    />
                                  </button>
                                </Link>
                              </div>
                              <Link
                                href={createSlug(
                                  item.category.title,
                                  item.slug.current,
                                  item._type,
                                )}
                              >
                                <div className="overflow-hidden h-[60%]">
                                  <div
                                    style={{
                                      backgroundImage:
                                        item._type === "video"
                                          ? `url("${item?.video?.preview && urlForImage(item?.video?.preview)?.url()}")`
                                          : `url("${item.preview && urlForImage(item.preview)?.url()}")`,
                                    }}
                                    className="bg-no-repeat w-full duration-[0.3s] h-full object-contain bg-center hover:scale-110"
                                  />
                                  {item._type == "video" && (
                                    <VideoMark url={item?.video?.url} />
                                  )}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  </>
                )}
                {section.id === "cta" && (
                  <section
                    key={section.id}
                    className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-4 w-full xl:x-16 lg:px-16 lg:py-16 md:px-16 md:py-16 sm:px-5 sm:py-12 xl:py-16 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0"
                  >
                    <h1
                      className={` xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl leading-snug w-[100%] font-bold  `}
                    >
                      {section.title}
                    </h1>
                    <div className="flex flex-col w-[100%] xl:pl-10 lg:pl-10 md:pl-10 sm:pl-0">
                      <p className="text-md font-medium">
                        {section.description}
                      </p>
                      <div className="flex items-start justify-start mt-3">
                        <Link href={section.cta[0].link}>
                          <button
                            className={`mt-3 text-center mb-5 text-white bg-black border-black border-2 outline-none duration-[0.1s] hover:underline hover:rounded-[8px] text-md ${inter.className} px-6 py-3 rounded-[4px]`}
                          >
                            {section.cta[0].title}
                          </button>
                        </Link>
                        <Link href={section.cta[1].link}>
                          <button
                            className={`mt-3 ml-5 text-center mb-5 text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:underline hover:rounded-[8px]  text-md ${inter.className} px-6 py-3 rounded-[4px]`}
                          >
                            {section.cta[1].title}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </section>
                )}
                {section.id === "sponsors-line" && (
                  <section key={section.id} className="py-3">
                    <p className="text-center text-lg font-semibold py-5">
                      {section.title}
                    </p>
                    <Carousel
                      responsive={responsive}
                      containerClassName={"carousel-container"}
                      arrowsDesktop={false}
                      itemClass={"running-line-animation sponsor"}
                    >
                      {sponsors?.length < 8
                        ? Array.from({
                            length: 8 - (sponsors?.length || 0),
                          }).map((_, index) => (
                            <div
                              key={`duplicate-${index}`}
                              className="flex flex-col justify-center items-center w-[150px] h-[150px]"
                            >
                              <img
                                src={urlForImage(
                                  sponsors[sponsors.length - 1].image,
                                )?.url()}
                                alt={sponsors[sponsors.length - 1].kind}
                                title={sponsors[sponsors.length - 1].kind}
                              />
                              <p
                                className={`${montserrat.className} text-sm pt-2`}
                              >
                                {sponsors[sponsors.length - 1].kind}
                              </p>
                            </div>
                          ))
                        : sponsors?.map((sponsor) => (
                            <div
                              key={sponsor._id}
                              className="flex justify-center flex-col items-center w-[150px] h-[150px]"
                            >
                              <img
                                src={
                                  sponsor.image &&
                                  urlForImage(sponsor.image)?.url()
                                }
                                alt={sponsor.kind}
                                title={sponsor.kind}
                              />
                              <p
                                className={`${montserrat.className} text-sm pt-2`}
                              >
                                {sponsor.kind}
                              </p>
                            </div>
                          ))}
                    </Carousel>
                  </section>
                )}
                {section.id === "news" && (
                  <>
                    <div
                      key={section.id}
                      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full lg:gap-4 md:gap-4 sm:gap-0 xl:gap-4"
                    >
                      <div className="xl:p-10 lg:p-10 md:p-10 sm:p-5 text-wrap">
                        <h6
                          className={`text-sm font-semibold ${rowdies.className} text-primary`}
                        >
                          {section.tagline}
                        </h6>
                        <h2
                          className={`group-hover:underline xl:text-5xl md:text-4xl sm:text-3xl lg:text-5xl py-5 font-bold ${kanit_bold.className}`}
                        >
                          {section.title}
                        </h2>
                        <p className={`${montserrat.className} py-3 text-sm`}>
                          {section.description}
                        </p>
                      </div>
                      <div className="flex sm:justify-start md:justify-end lg:justify-end xl:justify-end items-end xl:mx-10 lg:mx-10 lg:my-10 md:my-10 md:mx-10 sm:mx-0 sm:my-0 xl:my-10">
                        <Link href={section.cta[0].link}>
                          <button
                            className={`mt-3 ml-5 text-center mb-5 text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:text-white hover:bg-black hover:border-white  text-md font-sans-[${inter.className}] px-6 py-3 rounded-[4px]`}
                          >
                            {section.cta[0].title}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <NewsList news={news} />
                  </>
                )}
                {section.id === "video" && (
                  <section key={section.id} id="video">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full lg:gap-4 md:gap-4 sm:gap-0 xl:gap-4">
                      <div className="xl:p-10 lg:p-10 md:p-10 sm:p-5 ">
                        <h6
                          className={`text-sm font-semibold ${rowdies.className} text-primary`}
                        >
                          {section.tagline}
                        </h6>
                        <h2
                          className={`group-hover:underline xl:text-5xl md:text-4xl sm:text-3xl lg:text-5xl py-5 font-bold ${kanit_bold.className}`}
                        >
                          {section.title}
                        </h2>
                        <p className={`${montserrat.className} py-3 text-sm`}>
                          {section.description}
                        </p>
                      </div>
                      <div className="flex sm:justify-start md:justify-end lg:justify-end xl:justify-end items-end xl:mx-10 lg:mx-10 lg:my-10 md:my-10 md:mx-10 sm:mx-0 sm:my-0 xl:my-10">
                        <Link href={section.cta[0].link}>
                          <button
                            className={`mt-3 ml-5 text-center mb-5 text-black bg-white border-black border-2 outline-none duration-[0.1s] hover:text-white hover:bg-black hover:border-white  text-md font-sans-[${inter.className}] px-6 py-3 rounded-[4px]`}
                          >
                            {section.cta[0].title}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-5 w-[95%] m-auto">
                      {video?.map((item) => (
                        <div
                          key={item._id}
                          className="flex sm:flex-col md:flex-col xl:flex-row lg:flex-col col-span-1 group w-full sm:items-start  md:items-start lg:items-start xl:items-center cursor-pointer"
                        >
                          <Link
                            href={createSlug(
                              item.category.title,
                              item.slug.current,
                              item._type,
                            )}
                          >
                            <div className="square-image-wrapper relative rounded-[4px] overflow-hidden w-full min-w-[250px] max-w-[850px]">
                              <img
                                alt={item.title}
                                title={item.title}
                                src={
                                  item.video.preview &&
                                  urlForImage(item.video.preview)?.url()
                                }
                                className="w-full duration-[0.2s] group-hover:scale-125 h-full lg:min-h-[300px] md:min-h-[200px] xl:min-h-[300px] object-cover"
                              />
                              <VideoMark url={item?.video?.url} />
                            </div>
                          </Link>
                          <div className="text-wrap flex flex-col items-start lg:px-0 md:px-0 sm:px-0 xl:px-10">
                            <div className="flex items-center mt-4">
                              <div className="bg-primary w-fit px-3 py-1.5">
                                <h6
                                  className={`text-sm text-white font-bold ${rowdies.className}`}
                                >
                                  {item?.category?.title}
                                </h6>
                              </div>
                              <p
                                className={`font-medium text-sm text-center ml-3 ${rowdies.className}`}
                              >
                                {createDate(item._createdAt)}
                              </p>
                            </div>
                            <Link
                              href={createSlug(
                                item.category.title,
                                item.slug.current,
                                item._type,
                              )}
                            >
                              <h3
                                className={`text-xl group-hover:underline py-4 font-bold ${kanit.className}`}
                              >
                                {item.title}
                              </h3>
                            </Link>
                            <p
                              className={`text-sm py-2 font-medium ${montserrat.className}`}
                            >
                              {item.short_description}
                            </p>
                            <Link
                              href={createSlug(
                                item.category.title,
                                item.slug.current,
                                item._type,
                              )}
                            >
                              <button
                                className={`my-4 duration-[0.1s] flex items-center text-md ${inter.className}`}
                              >
                                Read More
                                <Image
                                  className={
                                    "ml-3 -rotate-90 group-hover:ml-4 duration-[0.1s]"
                                  }
                                  src={"/black-arrow-down.svg"}
                                  alt={"arrow-down"}
                                  width={15}
                                  height={15}
                                />
                              </button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </>
        ))}
      </main>
      <Footer
        sponsors={sponsors}
        data={footer}
        social={social}
        policies={policies}
        general={general}
      />
    </>
  );
}
