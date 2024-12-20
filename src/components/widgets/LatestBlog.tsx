
import { FaPenNib } from "react-icons/fa";
import BlogImg1 from "/public/images/latest-blog1.png"
import BlogImg2 from "/public/images/latest-blog2.png"
import BlogImg3 from "/public/images/latest-blog3.png"
import Image from "next/image"
import { MdOutlineCalendarMonth } from "react-icons/md";
import Wrapper from "../shared/Wrapper";

const LatestBlog = () => {

    const latestBlogData = [

        {
            name: "John",
            date: "21 August,2020",
            header: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            readmore: "Read More",
            image: BlogImg1,
        },
        {
            name: "Sam",
            date: "21 August,2020",
            header: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            readmore: "Read More",
            image: BlogImg2,
        },
        {
            name: "David",
            date: "21 August,2020",
            header: "Top esssential Trends in 2021",
            description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
            readmore: "Read More",
            image: BlogImg3,
        },
    ]

    return (
        <>
            <Wrapper>
                <div>

                    <h1 className="flex justify-center items-center text-myblue text-[26px] md:text-[42px] font-bold pt-40">Leatest Blog</h1>

                    <div className="md:flex justify-center gap-6 pt-5 md:pt-10">
                        {/* Boxes */}
                        {
                            latestBlogData.map((item, i) => (
                                <div key={i} className="w-full md:w-1/2 lg:w-1/3 mb-4">

                                    <div className="h-[340px] md:h-[490px] w-full border rounded-md shadow-md">

                                        <Image src={item.image} alt="blog-image" className="h-[180px] md:h-[255px] w-full rounded-md" />

                                        <div className="flex gap-x-2 md:gap-x-5 text-[10px] md:text-[14px] text-myblue pt-3 ml-2">
                                            <span className="flex items-center"><FaPenNib className="text-mypink" /> &nbsp;{item.name}</span>
                                            <span className="flex items-center"><MdOutlineCalendarMonth className="text-myyellow" /> &nbsp;{item.date}</span>
                                        </div>

                                        <div className=" space-y-3 md:space-y-6 pt-3 md:pt-6 mx-2">
                                            <h4 className="text-[14px] md:text-[18px] font-bold text-myblue">{item.header}</h4>
                                            <p className="text-[12px] md:text-[16px] text-gray4 pb-4">{item.description}</p>
                                            <span className="text-[12px] md:text-[16px] text-myblue underline hover:text-mypink cursor-pointer" >Read More</span>
                                        </div >

                                    </div>

                                </div>
                            ))
                        }

                    </div>


                </div>
            </Wrapper>
        </>
    )
}

export default LatestBlog