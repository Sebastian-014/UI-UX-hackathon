
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
                    <h1 className="flex justify-center items-center text-myblue1 text-[42px] font-bold pt-40">Featured Products</h1>
                    <div className="flex justify-center gap-x-6 pt-10">

                        {/* Boxes */}

                        {
                            featuredProductsData.map((item, i) => (
                                (<div key={i} className="w-[270px] h-[361px] border rounded-md shadow-lg cursor-pointer hover:scale-105 duration-100">
                                    <div className=" bg-gray6 h-[236px] w-[270px] flex justify-center items-center">
                                        <div>
                                            <Image src={item.image} alt="Product-image" className=" h-[160px] w-[160px]" />
                                        </div>
                                    </div>

                                    <div className="space-y-2 pt-4">
                                        <h4 className="flex justify-center items-center text-[18px] text-mypink font-bold ">{item.name}</h4>
                                        <span className="flex justify-center items-center text-[14px] text-myblue">{item.code}</span>
                                        <span className="flex justify-center items-center text-[14px] text-myblue">{item.price}</span>

                                    </div>

                                </div>)

                            ))
                        }

                    </div>
                </Wrapper>
            </section>
        </>
    )
}

export default Featured