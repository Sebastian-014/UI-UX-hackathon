
import Wrapper from "../shared/Wrapper"
import TrendingProduct1 from "/public/images/trending-product1.png"
import TrendingProduct2 from "/public/images/trending-product2.png"
import TrendingProduct3 from "/public/images/trending-product3.png"
import TrendingProduct4 from "/public/images/trending-product4.png"
import TrendingProduct5 from "/public/images/trending-product5.png"
import TrendingProduct6 from "/public/images/trending-product6.png"
import TrendingProduct7 from "/public/images/trending-product7.png"
import TrendingProduct8 from "/public/images/trending-product8.png"
import TrendingProduct9 from "/public/images/trending-product9.png"
import Image from "next/image"


const TrendingProducts = () => {

const trendingProductsData = [

    {
      name : "Cantilever chair",
      price : "$26.00",
      oldPrice : "$42.00",
      image : TrendingProduct1,
    },
    {
        name : "Cantilever chair",
        price : "$26.00",
        oldPrice : "$42.00",
        image : TrendingProduct2,
      },
      {
        name : "Cantilever chair",
        price : "$26.00",
        oldPrice : "$42.00",
        image : TrendingProduct3,
      },
      {
        name : "Cantilever chair",
        price : "$26.00",
        oldPrice : "$42.00",
        image : TrendingProduct4,
      },
]

    return (
        <>
            <section>
                <Wrapper>
                    <div>

                        <h1 className="flex justify-center items-center text-myblue text-[26px] md:text-[42px] font-bold pt-40">Trending Products</h1>

                        {/* First Row */}
                        <div className="md:flex justify-center gap-x-4 pt-10 pb-12">

                            {
                                trendingProductsData.map( (item , i) => (
                                    <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-2">
                                    <div className="h-[350px] w-full border rounded-md cursor-pointer shadow-lg hover:scale-105 duration-100 py-3 px-3">
                                        <div className=" flex justify-center items-center bg-gray10 h-[245px] w-full">
        
                                            {/* Image */}
                                            <div>
                                                <Image src={item.image} alt="Product-image" className=" h-[171px] w-[170px] mx-auto" />
                                            </div>
        
                                        </div>
        
                                        <div className="pt-4 space-y-1">
                                            <h4 className="flex justify-center items-center text-myblue text-[14px] md:text-[18px] font-bold">{item.name}</h4>
                                            <ul className="flex justify-center items-center gap-x-2">
                                                <li className="text-myblue text-[12px] md:text-[16px] font-medium">{item.price} </li>
                                                <li className="text-[10px] md:text-[14px] text-gray4 line-through">{item.oldPrice}</li>
                                            </ul>
                                        </div>
        
                                    </div>
                                    </div>
        
                                ))
                            }

                        </div>

                        {/* Second Row */}

                        <div className="md:flex justify-center gap-x-8">

                        <div className="h-[270px] w-full bg-pink3 border rounded-md cursor-pointer shadow-md hover:scale-105 duration-100 relative mb-2">
                                <div className="pt-2 ml-4 space-y-2">
                                    <h2 className="text-[26px] font-semibold text-myblue">23% off in all products</h2>
                                    <h4 className="text-[16px] font-semibold text-mypink underline">Shop Now</h4>
                                </div>
                                <div className="absolute right-8">
                                    <Image src={TrendingProduct5} alt="Product-image" className=" h-[207px] w-[213px]" />
                                </div>
                            </div> 


                            <div className="h-[270px] w-full bg-mygray border rounded-md cursor-pointer shadow-md hover:scale-105 duration-100 relative mb-2">
                                <div className="pt-2 ml-4 space-y-2">
                                    <h2 className="text-[26px] font-semibold text-myblue">23% off in all products</h2>
                                    <h4 className="text-[16px] font-semibold text-mypink underline">View Collection</h4>
                                </div>
                                <div className="absolute right-8">
                                    <Image src={TrendingProduct6} alt="Product-image" className=" h-[173px] w-[312px]" />
                                </div>
                            </div>

                            <div className="space-y-6">

                                <div className="h-[74px] w-[267px] flex items-center hover:scale-105 duration-100 cursor-pointer">
                                    <div className="w-[107px] bg-gray10 rounded-md">
                                        {/* Image */}
                                        <div className="flex justify-center">
                                            <Image src={TrendingProduct7} alt="Product-image" className=" h-[71px] w-[64px]" />
                                        </div>
                                    </div>

                                    <div className="ml-1">
                                        <h4 className=" text-myblue text-[16px] font-semibold">Executive Seat chair</h4>
                                        <span className="text-myblue text-[12px] line-through">$32.00</span>
                                    </div>

                                </div>

                                <div className="h-[74px] w-[267px] flex items-center hover:scale-105 duration-100 cursor-pointer">
                                    <div className="w-[107px] bg-gray10 rounded-md">
                                        {/* Image */}
                                        <div className="flex justify-center">
                                            <Image src={TrendingProduct8} alt="Product-image" className=" h-[64px] w-[64px]" />
                                        </div>
                                    </div>

                                    <div className="ml-1">
                                        <h4 className=" text-myblue text-[16px] font-semibold">Executive Seat chair</h4>
                                        <span className="text-myblue text-[12px] line-through">$32.00</span>
                                    </div>

                                </div>

                                <div className="h-[74px] w-[267px] flex items-center hover:scale-105 duration-100 cursor-pointer">
                                    <div className="w-[107px] bg-gray10 rounded-md">
                                        {/* Image */}
                                        <div className="flex justify-center">
                                            <Image src={TrendingProduct9} alt="Product-image" className=" h-[67px] w-[67px]" />
                                        </div>
                                    </div>

                                    <div className="ml-1">
                                        <h4 className=" text-myblue text-[16px] font-semibold">Executive Seat chair</h4>
                                        <span className="text-myblue text-[12px] line-through">$32.00</span>
                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>
                </Wrapper>

            </section>
        </>
    )
}

export default TrendingProducts