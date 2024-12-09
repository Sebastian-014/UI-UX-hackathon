
import Wrapper from "../shared/Wrapper"
import TrendingProduct1 from "/public/images/trending-product1.png"
import TrendingProduct2 from "/public/images/trending-product2.png"
import TrendingProduct3 from "/public/images/trending-product3.png"
import TrendingProduct4 from "/public/images/trending-product4.png"
import Image from "next/image"


const TrendingProducts = () => {
    return (
        <>
            <section>
                <Wrapper>
                    <div>

                    <h1 className="flex justify-center items-center text-myblue text-[42px] font-bold pt-40">Trending Products</h1>

                        {/* First Row */}
                        <div className="flex justify-center gap-x-4 pt-10">

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

                    </div>
                </Wrapper>

            </section>
        </>
    )
}

export default TrendingProducts