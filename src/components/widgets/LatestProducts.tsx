
import Wrapper from "../shared/Wrapper"
import LatestProduct1 from "/public/images/latest-product1.png"
import LatestProduct2 from "/public/images/latest-product2.png"
import LatestProduct3 from "/public/images/latest-product3.png"
import LatestProduct4 from "/public/images/latest-product4.png"
import LatestProduct5 from "/public/images/latest-product5.png"
import LatestProduct6 from "/public/images/latest-product6.png"
import Image from "next/image"

const LatestProducts = () => {
    return (
        <>
            <section>
                <Wrapper>
                    <h1 className="flex justify-center items-center text-myblue text-[42px] font-bold pt-40">Leatest Products</h1>
                    <div className="flex justify-center pt-4">
                        <ul className="flex gap-x-14">
                            <li className="text-[18px] text-myblue hover:text-mypink hover:underline cursor-pointer">New Arrival</li>
                            <li className="text-[18px] text-myblue hover:text-mypink hover:underline cursor-pointer">Best Seller</li>
                            <li className="text-[18px] text-myblue hover:text-mypink hover:underline cursor-pointer">Featured</li>
                            <li className="text-[18px] text-myblue hover:text-mypink hover:underline cursor-pointer">Special Offer</li>
                        </ul>
                    </div>
                    <div className="space-y-10 pt-14">
                        {/* First Row */}
                        <div>
                            <div className="flex justify-center gap-x-6">

                                <div className="h-[306px] w-[360px] border rounded-md shadow-md cursor-pointer hover:scale-105 duration-100">
                                    <div className="h-[270px] w-[360px] bg-gray7 flex justify-center items-center">
                                        <div>
                                            <Image src={LatestProduct1} alt="latestproduct-image" className=" h-[229px] w-[223px]" />
                                        </div>

                                    </div>
                                    <div className="flex justify-between mx-2 py-1">
                                        <h4 className="text-[14px] text-myblue">Comfort Handy Craft</h4>
                                        <ul className="flex items-center gap-x-2">
                                            <li className="text-[14px] text-myblue">$42.00</li>
                                            <li className="text-[12px] text-myred line-through">$65.00</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="h-[306px] w-[360px] cursor-pointer shadow-md hover:scale-105 duration-100">
                                    <div className="h-[270px] w-[360px] bg-white flex justify-center items-center">
                                        <div>
                                            <Image src={LatestProduct2} alt="latestproduct-image" className=" h-[245px] w-[245px]" />
                                        </div>

                                    </div>
                                    <div className="flex justify-between mx-2 py-1">
                                        <h4 className="text-[14px] text-myblue">Comfort Handy Craft</h4>
                                        <ul className="flex items-center gap-x-2">
                                            <li className="text-[14px] text-myblue">$42.00</li>
                                            <li className="text-[12px] text-myred line-through">$65.00</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="h-[306px] w-[360px] border rounded-md shadow-md cursor-pointer hover:scale-105 duration-100">
                                    <div className="h-[270px] w-[360px] bg-gray7 flex justify-center items-center">
                                        <div>
                                            <Image src={LatestProduct3} alt="latestproduct-image" className=" h-[222px] w-[222px]" />
                                        </div>

                                    </div>
                                    <div className="flex justify-between mx-2 py-1">
                                        <h4 className="text-[14px] text-myblue">Comfort Handy Craft</h4>
                                        <ul className="flex items-center gap-x-2">
                                            <li className="text-[14px] text-myblue">$42.00</li>
                                            <li className="text-[12px] text-myred line-through">$65.00</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Second Row */}

                        <div>

                            <div className="flex justify-center gap-x-6">

                                <div className="h-[306px] w-[360px] border rounded-md shadow-md cursor-pointer hover:scale-105 duration-100">
                                    <div className="h-[270px] w-[360px] bg-gray7 flex justify-center items-center">
                                        <div>
                                            <Image src={LatestProduct4} alt="latestproduct-image" className=" h-[267px] w-[277px]" />
                                        </div>

                                    </div>
                                    <div className="flex justify-between mx-2 py-1">
                                        <h4 className="text-[14px] text-myblue">Comfort Handy Craft</h4>
                                        <ul className="flex items-center gap-x-2">
                                            <li className="text-[14px] text-myblue">$42.00</li>
                                            <li className="text-[12px] text-myred line-through">$65.00</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="h-[306px] w-[360px] border rounded-md shadow-md cursor-pointer hover:scale-105 duration-100">
                                    <div className="h-[270px] w-[360px] bg-gray7 flex justify-center items-center">
                                        <div>
                                            <Image src={LatestProduct5} alt="latestproduct-image" className=" h-[303px] w-[264px]" />
                                        </div>

                                    </div>
                                    <div className="flex justify-between mx-2 py-1">
                                        <h4 className="text-[14px] text-myblue">Comfort Handy Craft</h4>
                                        <ul className="flex items-center gap-x-2">
                                            <li className="text-[14px] text-myblue">$42.00</li>
                                            <li className="text-[12px] text-myred line-through">$65.00</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="h-[306px] w-[360px] border rounded-md shadow-md cursor-pointer hover:scale-105 duration-100">
                                    <div className="h-[270px] w-[360px] bg-gray7 flex justify-center items-center">
                                        <div>
                                            <Image src={LatestProduct6} alt="latestproduct-image" className=" h-[229px] w-[223px]" />
                                        </div>

                                    </div>
                                    <div className="flex justify-between mx-2 py-1">
                                        <h4 className="text-[14px] text-myblue">Comfort Handy Craft</h4>
                                        <ul className="flex items-center gap-x-2">
                                            <li className="text-[14px] text-myblue">$42.00</li>
                                            <li className="text-[12px] text-myred line-through">$65.00</li>
                                        </ul>
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

export default LatestProducts