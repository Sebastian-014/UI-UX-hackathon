
import Wrapper from "../shared/Wrapper"
import FeaturedImage1 from "/public/images/featured-image1.png"
import FeaturedImage2 from "/public/images/featured-image2.png"
import FeaturedImage3 from "/public/images/featured-image3.png"
import FeaturedImage4 from "/public/images/featured-image4.png"
import Image from "next/image"

const Featured = () => {

    // BoxesData

    const featuredProductsData = [
        {
            name: "Cantilever chair",
            code: "Code - Y523201",
            price: "$42.00",
            image: FeaturedImage1,
        },
        {
            name: "Cantilever chair",
            code: "Code - Y523201",
            price: "$42.00",
            image: FeaturedImage2,
        },
        {
            name: "Cantilever chair",
            code: "Code - Y523201",
            price: "$42.00",
            image: FeaturedImage3,
        },
        {
            name: "Cantilever chair",
            code: "Code - Y523201",
            price: "$42.00",
            image: FeaturedImage4,
        },

    ]

    return (
        <>
            <section>
                <Wrapper>
                    <h1 className="flex justify-center items-center text-myblue1 text-[26px] md:text-[42px] font-bold pt-20 md:pt-40">Featured Products</h1>
                    <div className="md:flex justify-center gap-4 pt-5 md:pt-10">

                        {/* Boxes */}

                        {
                            featuredProductsData.map((item, i) => (
                                <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-2">
                                    <div className="h-[340px] w-full border rounded-md shadow-lg cursor-pointer hover:scale-105 duration-100">

                                        <div className="h-[235px] w-full bg-gray6 flex justify-center items-center">
                                            <div>
                                                <Image src={item.image} alt="Product-image" className="h-[170px] w-[170px] mx-auto" />
                                            </div>
                                        </div>

                                        <div className="space-y-1 pt-2">
                                            <h4 className="flex justify-center text-[16px] md:text-[18px] text-mypink font-bold">{item.name}</h4>
                                            <span className="flex justify-center text-[14px] md:text-[16px] text-myblue">{item.code}</span>
                                            <span className="flex justify-center text-[10px] md:text-[12px] text-myblue">{item.price}</span>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </Wrapper>
            </section>
        </>
    )
}

export default Featured