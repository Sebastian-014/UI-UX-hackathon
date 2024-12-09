
import Wrapper from "../shared/Wrapper"
import FeaturedImage1 from "/public/images/featured-image1.png"
import FeaturedImage2 from "/public/images/featured-image2.png"
import FeaturedImage3 from "/public/images/featured-image3.png"
import FeaturedImage4 from "/public/images/featured-image4.png"
import Image from "next/image"

const Featured = () => {
    return (
        <>
            <section>
                <Wrapper>
                    <h1 className="flex justify-center items-center text-myblue1 text-[42px] font-bold pt-40">Featured Products</h1>
                    <div className="flex justify-center gap-x-6 pt-10">

                        <div className="w-[270px] h-[361px] border rounded-md shadow-lg cursor-pointer hover:scale-105 duration-100">
                            <div className=" bg-gray6 h-[236px] w-[270px] flex justify-center items-center">
                                <div>
                                    <Image src={FeaturedImage1} alt="featured-image" className=" h-[178px] w-[178px]" />
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <h4 className="flex justify-center items-center text-[18px] text-mypink font-bold ">Cantilever chair</h4>
                                <span className="flex justify-center items-center text-[14px] text-myblue">Code - Y523201</span>
                                <span className="flex justify-center items-center text-[14px] text-myblue">$42.00</span>

                            </div>

                        </div>

                        <div className="w-[270px] h-[361px] border rounded-md shadow-lg cursor-pointer hover:scale-105 duration-100">
                            <div className=" bg-gray6 h-[236px] w-[270px] flex justify-center items-center">
                                <div>
                                    <Image src={FeaturedImage2} alt="featured-image" className=" h-[178px] w-[178px]" />
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <h4 className="flex justify-center items-center text-[18px] text-mypink font-bold ">Cantilever chair</h4>
                                <span className="flex justify-center items-center text-[14px] text-myblue">Code - Y523201</span>
                                <span className="flex justify-center items-center text-[14px] text-myblue">$42.00</span>

                            </div>

                        </div>

                        <div className="w-[270px] h-[361px] border rounded-md shadow-lg cursor-pointer hover:scale-105 duration-100">
                            <div className=" bg-gray6 h-[236px] w-[270px] flex justify-center items-center">
                                <div>
                                    <Image src={FeaturedImage3} alt="featured-image" className=" h-[178px] w-[178px]" />
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <h4 className="flex justify-center items-center text-[18px] text-mypink font-bold ">Cantilever chair</h4>
                                <span className="flex justify-center items-center text-[14px] text-myblue">Code - Y523201</span>
                                <span className="flex justify-center items-center text-[14px] text-myblue">$42.00</span>

                            </div>

                        </div>

                        <div className="w-[270px] h-[361px] border rounded-md shadow-lg cursor-pointer hover:scale-105 duration-100">
                            <div className=" bg-gray6 h-[236px] w-[270px] flex justify-center items-center">
                                <div>
                                    <Image src={FeaturedImage4} alt="featured-image" className=" h-[178px] w-[178px]" />
                                </div>
                            </div>

                            <div className="space-y-2 pt-4">
                                <h4 className="flex justify-center items-center text-[18px] text-mypink font-bold ">Cantilever chair</h4>
                                <span className="flex justify-center items-center text-[14px] text-myblue">Code - Y523201</span>
                                <span className="flex justify-center items-center text-[14px] text-myblue">$42.00</span>

                            </div>

                        </div>

                    </div>
                </Wrapper>
            </section>
        </>
    )
}

export default Featured