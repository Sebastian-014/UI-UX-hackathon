
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
    return (
        <>
            <section>
                <Wrapper>
                    <div>

                        <h1 className="flex justify-center items-center text-myblue text-[42px] font-bold pt-40">Trending Products</h1>

                        {/* First Row */}
                        <div className="flex justify-center gap-x-4 pt-10 pb-12">

                            <div className="h-[350px] w-[270px] border rounded-md cursor-pointer shadow-lg hover:scale-105 duration-100 py-3 px-3">
                                <div className=" flex justify-center items-center bg-gray10 h-[244px] w-[247px]">

                                    {/* Image */}
                                    <div>
                                        <Image src={TrendingProduct1} alt="Product-image" className=" h-[171px] w-[171px]" />
                                    </div>

                                </div>

                                <div className="pt-4 space-y-1">
                                    <h4 className="flex justify-center items-center text-myblue text-[16px] font-bold">Cantilever chair</h4>
                                    <ul className="flex justify-center items-center gap-x-2">
                                        <li className="text-myblue text-[14px] font-medium">$26.00 </li>
                                        <li className="text-[10px] text-gray4 line-through">$42.00</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="h-[350px] w-[270px] border rounded-md cursor-pointer shadow-lg hover:scale-105 duration-100 py-3 px-3">
                                <div className=" flex justify-center items-center bg-gray10 h-[244px] w-[247px]">

                                    {/* Image */}
                                    <div>
                                        <Image src={TrendingProduct2} alt="Product-image" className=" h-[187px] w-[187px]" />
                                    </div>

                                </div>

                                <div className="pt-4 space-y-1">
                                    <h4 className="flex justify-center items-center text-myblue text-[16px] font-bold">Cantilever chair</h4>
                                    <ul className="flex justify-center items-center gap-x-2">
                                        <li className="text-myblue text-[14px] font-medium">$26.00 </li>
                                        <li className="text-[10px] text-gray4 line-through">$42.00</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="h-[350px] w-[270px] border rounded-md cursor-pointer shadow-lg hover:scale-105 duration-100 py-3 px-3">
                                <div className=" flex justify-center items-center bg-gray10 h-[244px] w-[247px]">

                                    {/* Image */}
                                    <div>
                                        <Image src={TrendingProduct3} alt="Product-image" className=" h-[189px] w-[197px]" />
                                    </div>

                                </div>

                                <div className="pt-4 space-y-1">
                                    <h4 className="flex justify-center items-center text-myblue text-[16px] font-bold">Cantilever chair</h4>
                                    <ul className="flex justify-center items-center gap-x-2">
                                        <li className="text-myblue text-[14px] font-medium">$26.00 </li>
                                        <li className="text-[10px] text-gray4 line-through">$42.00</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="h-[350px] w-[270px] border rounded-md cursor-pointer shadow-lg hover:scale-105 duration-100 py-3 px-3">
                                <div className=" flex justify-center items-center bg-gray10 h-[244px] w-[247px]">

                                    {/* Image */}
                                    <div>
                                        <Image src={TrendingProduct4} alt="Product-image" className=" h-[211px] w-[253px]" />
                                    </div>

                                </div>

                                <div className="pt-4 space-y-1">
                                    <h4 className="flex justify-center items-center text-myblue text-[16px] font-bold">Cantilever chair</h4>
                                    <ul className="flex justify-center items-center gap-x-2">
                                        <li className="text-myblue text-[14px] font-medium">$26.00 </li>
                                        <li className="text-[10px] text-gray4 line-through">$42.00</li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                        {/* Second Row */}

                        <div className="flex justify-center gap-x-4">
                            <div className="h-[270px] w-[420px] bg-pink3 border rounded-md cursor-pointer shadow-md hover:scale-105 duration-100 relative">
                                <div className="pt-2 ml-4 space-y-2">
                                    <h2 className="text-[26px] font-semibold text-myblue">23% off in all products</h2>
                                    <h4 className="text-[16px] font-semibold text-mypink underline">Shop Now</h4>
                                </div>
                                <div className="absolute right-8">
                                    <Image src={TrendingProduct5} alt="Product-image" className=" h-[207px] w-[213px]" />
                                </div>
                            </div>

                            <div className="h-[270px] w-[420px] bg-mygray border rounded-md cursor-pointer shadow-md hover:scale-105 duration-100 relative">
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