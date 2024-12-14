
import Pagesheader from "../shared/Pagesheader"
import Ratingstars from "../shared/Ratingstars"
import Wrapper from "../shared/Wrapper"
import { IoIosCheckboxOutline } from "react-icons/io"
import { FiSearch, FiShoppingCart } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa"
import { CgSearch } from "react-icons/cg"
import ShopImg1 from "/public/images/shopsidebar-img1.png"
import ShopImg2 from "/public/images/shopsidebar-img2.png"
import ShopImg3 from "/public/images/shopsidebar-img3.png"
import ShopImg4 from "/public/images/shopsidebar-img4.png"
import ShopImg5 from "/public/images/shopsidebar-img5.png"
import ShopImg6 from "/public/images/shopsidebar-img6.png"
import ShopImg7 from "/public/images/shopsidebar-img7.png"
import Image from "next/image"
import BottomLogos from "../shared/BottomLogos"


const Shopleftsidebar = () => {

    const shopData = [

        {
            name: "Dictum morbi",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShopImg1,
        },
        {
            name: "Sodales sit",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShopImg2,
        },
        {
            name: "Nibh varius",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShopImg3,
        },
        {
            name: "Mauris quis",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShopImg4,
        },
        {
            name: "Morbi sagittis",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShopImg5,
        },
        {
            name: "Ultricies venenatis",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShopImg6,
        },
        {
            name: "Scelerisque dignissim",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShopImg7,
        },
    ]

    return (
        <>
            <Wrapper>
                <div className="pt-40">

                    <div>
                        <Pagesheader />
                    </div>

                    <div className="flex pt-20 gap-x-14">

                        {/* Sidebar */}

                        <div className="space-y-16">

                            <div>
                                <h2 className="text-[20px] font-bold text-myblue underline pb-3">Product Brand</h2>
                                <div className="text-[15px] text-gray2 space-y-4">
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-blue-800 cursor-pointer" />Coaster Furniture</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-blue-800 cursor-pointer" />Fusion Dot High Fashion</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-blue-800 cursor-pointer" />Unique Furnitture Restor</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-blue-800 cursor-pointer" />Dream Furnitture Flipping</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-blue-800 cursor-pointer" />Young Repurposed</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-blue-800 cursor-pointer" />Green DIY furniture</span>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[20px] font-bold text-myblue underline pb-3">Discount Offer</h2>
                                <div className="text-[15px] text-gray2 space-y-4">
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />20% Cashback</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />5% Cashback Offer</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />25% Discount Offer</span>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[20px] font-bold text-myblue underline pb-3">Rating Item</h2>
                                <div className="space-y-4 text-[12px]">
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-yellow-400 cursor-pointer" /> <Ratingstars /> (2341)</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-yellow-400 cursor-pointer" /> <Ratingstars /> (1726)</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-yellow-400 cursor-pointer" /> <Ratingstars /> (258)</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-yellow-400 cursor-pointer" /> <Ratingstars /> (25)</span>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[20px] font-bold text-myblue underline pb-3">Categories</h2>
                                <div className="text-[15px] text-gray2 space-y-4">
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />Prestashop</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />Magento</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />osCommerce</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />3dcart</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />Bags</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />Accessories</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />Jewellery</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />Watches</span>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[20px] font-bold text-myblue underline pb-3">Price Filter</h2>
                                <div className="text-[15px] text-gray2 space-y-4 pb-4">
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />$0.00 - $150.00</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />$150.00 - $350.00</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />$150.00 - $504.00</span>
                                    <span className="flex items-center gap-x-2"><IoIosCheckboxOutline className="text-mypink cursor-pointer" />$450.00 +</span>
                                </div>

                                <div className="border border-slate-300 h-[31px] w-[203px] relative">
                                    <span className="top-1 right-3 absolute text-slate-300"><FiSearch size="20" /></span>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[20px] font-bold text-myblue underline pb-3">Filter By Color</h2>
                                <div className="space-y-2">
                                    <div className="flex items-center  gap-x-4 text-[15px] text-gray2">
                                        <span>Blue</span>
                                        <span>Orange</span>
                                        <span>Brown</span>
                                    </div>
                                    <div className="flex items-center gap-x-4 text-[15px] text-gray2">
                                        <span>Green</span>
                                        <span>Purple</span>
                                        <span>Sky</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Shoplist */}

                        <div className="space-y-14">

                            {
                                shopData.map((item, i) => (
                                    (<div key={i} className="flex items-center shadow-lg gap-x-10 max-w-[921px] h-[223px]">

                                        <div>
                                            {/* Image */}
                                            <Image src={item.image} alt="Product-image" className="h-[197px] w-[284px] cursor-pointer" />
                                        </div>

                                        <div className="w-[591px] space-y-4">
                                            {/* Text */}
                                            <h2 className="text-[19px] font-bold text-myblue4">{item.name}</h2>

                                            <div className="flex items-center gap-x-4">
                                                <span className="text-[15px] text-myblue4">{item.price}</span>
                                                <span className="text-[15px] text-mypink line-through">{item.oldprice}</span>
                                                <Ratingstars />
                                            </div>

                                            <p className="text-[17px] text-gray4">{item.description}</p>

                                            <div className="flex gap-x-8">
                                                <FiShoppingCart className="text-mypurple cursor-pointer" />
                                                <FaRegHeart className="text-mypurple cursor-pointer" />
                                                <CgSearch className="text-mypurple cursor-pointer" />
                                            </div>
                                        </div>

                                    </div>)
                                ))
                            }

                        </div>

                    </div>

                    <BottomLogos />

                </div>

            </Wrapper>

        </>
    )
}

export default Shopleftsidebar