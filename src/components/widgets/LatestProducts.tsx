
import Wrapper from "../shared/Wrapper"
import LatestProduct1 from "/public/images/latest-product1.png"
import LatestProduct2 from "/public/images/latest-product2.png"
import LatestProduct3 from "/public/images/latest-product3.png"
import LatestProduct4 from "/public/images/latest-product4.png"
import LatestProduct5 from "/public/images/latest-product5.png"
import LatestProduct6 from "/public/images/latest-product6.png"
import Image from "next/image"

const LatestProducts = () => {

    // First Row

    const latestProductData1 = [

        {
            name: "Comfort Handy Craft",
            price: "$42.00",
            oldPrice: "$65.00",
            image: LatestProduct1,
        },
        {
            name: "Comfort Handy Craft",
            price: "$42.00",
            oldPrice: "$65.00",
            image: LatestProduct2,
        },
        {
            name: "Comfort Handy Craft",
            price: "$42.00",
            oldPrice: "$65.00",
            image: LatestProduct3,
        },
    ]

    // Second row

    const latestProductData2 = [

        {
            name: "Comfort Handy Craft",
            price: "$42.00",
            oldPrice: "$65.00",
            image: LatestProduct4,
        },
        {
            name: "Comfort Handy Craft",
            price: "$42.00",
            oldPrice: "$65.00",
            image: LatestProduct5,
        },
        {
            name: "Comfort Handy Craft",
            price: "$42.00",
            oldPrice: "$65.00",
            image: LatestProduct6,
        },
    ]

    return (
        <>
            <section>
                <Wrapper>
                    <h1 className="flex justify-center items-center text-myblue text-[26px] md:text-[42px] font-bold pt-20 md:pt-40">Leatest Products</h1>
                    <div className="space-y-5 md:space-y-10 pt-5 md:pt-10">

                        {/* First Row */}

                        <div className="md:flex justify-center gap-4 md:gap-6">

                            {
                                latestProductData1.map((item, i) => (
                                    <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
                                        <div className="h-[306px] w-full border rounded-md cursor-pointer">

                                            <div className="h-[270px] w-full bg-gray7 flex justify-center items-center">
                                                <div>
                                                    <Image src={item.image} alt="latestproduct-image" className="h-[230px] w-[225px] mx-auto" />
                                                </div>
                                            </div>

                                            <div className="flex justify-between mx-2 py-1">
                                                <h4 className="text-[12px] sm:text-[14px] md:text-[16px] text-myblue">{item.name}</h4>
                                                <ul className="flex items-center gap-x-2">
                                                    <li className="text-[10px] sm:text-[12px] md:text-[14px] text-myblue">{item.price}</li>
                                                    <li className="text-[8px] sm:text-[10px] md:text-[12px] text-myred line-through">{item.oldPrice}</li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }

                        </div>


                        {/* Second Row */}

                        <div className="md:flex justify-center gap-4 md:gap-6">

                            {
                                latestProductData2.map((item, i) => (

                                    (<div key={i} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">

                                        <div className="h-[306px] w-full border rounded-md cursor-pointer">
                                            <div className="h-[270px] w-full bg-gray7 flex justify-center items-center">
                                                <div>
                                                    <Image src={item.image} alt="latestproduct-image" className="h-[265px] w-[275px] mx-auto" />
                                                </div>

                                            </div>
                                            <div className="flex justify-between mx-2 py-1">
                                                <h4 className="text-[12px] sm:text-[14px] md:text-[16px] text-myblue">{item.name}</h4>
                                                <ul className="flex items-center gap-x-2">
                                                    <li className="text-[10px] sm:text-[12px] md:text-[14px] text-myblue">{item.price}</li>
                                                    <li className="text-[8px] sm:text-[10px] md:text-[12px] text-myred line-through">{item.oldPrice}</li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>)
                                ))
                            }

                        </div>


                    </div>
                </Wrapper>
            </section>
        </>
    )
}

export default LatestProducts