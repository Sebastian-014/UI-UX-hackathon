
import Pagesheader from "../shared/Pagesheader"
import Wrapper from "../shared/Wrapper"
import ShoplistImg1 from "/public/images/shoplist-img1.png"
import ShoplistImg2 from "/public/images/shoplist-img2.png"
import ShoplistImg3 from "/public/images/shoplist-img3.png"
import ShoplistImg4 from "/public/images/shoplist-img4.png"
import ShoplistImg5 from "/public/images/shoplist-img5.png"
import ShoplistImg6 from "/public/images/shoplist-img6.png"
import ShoplistImg7 from "/public/images/shoplist-img7.png"
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"
import BottomLogos from "../shared/BottomLogos"
import { FiShoppingCart } from "react-icons/fi"
import { CgSearch } from "react-icons/cg"
import Ratingstars from "../shared/Ratingstars"


const Shoplist = () => {

    const shopListData = [

        {
            name: "Accumsan tincidunt",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShoplistImg1,
        },
        {
            name: "In nulla",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShoplistImg2,
        },
        {
            name: "Vel sem",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShoplistImg3,
        },
        {
            name: "Porttitor cum",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShoplistImg4,
        },
        {
            name: "Nunc in",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShoplistImg5,
        },
        {
            name: "Vitae facilisis",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShoplistImg6,
        },
        {
            name: "Curabitur lectus",
            price: "$26.00",
            oldprice: "$52.00",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            image: ShoplistImg7,
        },
    ]

    return (
        <>
            <Wrapper>
                <div className="pt-40">

                    <div>
                        <Pagesheader />
                    </div>

                    <div className="pt-20 space-y-14">


                        {
                            shopListData.map((item, i) => (
                                (<div key={i} className="flex items-center shadow-lg gap-x-10">

                                    <div>
                                        {/* Image */}
                                        <Image src={item.image} alt="Product-image" className="h-[217px] w-[313px] cursor-pointer" />
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

                    <BottomLogos />

                </div>
            </Wrapper>
        </>
    )
}

export default Shoplist