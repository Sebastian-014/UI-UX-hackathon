
import TopCategories1 from "/public/images/top-categories1.png"
import TopCategories2 from "/public/images/top-categories2.png"
import TopCategories3 from "/public/images/top-categories3.png"
import TopCategories4 from "/public/images/top-categories4.png"
import TopCategoriesbg from "/public/images/top-categories-bg.png"
import LogosImg from "/public/images/logos-img.png"
import Image from "next/image"
import Button from "../shared/Button"

const TopCategories = () => {
    return (
        <>
            <div>

                <h1 className="flex justify-center items-center text-myblue text-[42px] font-bold pt-40">Top Categories</h1>

                <div className="flex justify-center gap-x-5 pt-10">

                    <div className="h-[345px] w-[269px]">
                        <div className="h-[269px] w-[269px] bg-gray6 rounded-full flex justify-center items-center shadow-md cursor-pointer hover:scale-105 duration-100">
                            {/* Image */}
                            <div>
                                <Image src={TopCategories1} alt="Product-image" className=" h-[178px] w-[178px]" />
                            </div>
                        </div>

                        <div className="space-y-2 pt-2">
                            <h4 className="text-[20px] text-myblue flex justify-center">Mini LCW Chair</h4>
                            <span className="text-[16px] text-myblue flex justify-center">$56.00</span>
                        </div>

                    </div>

                    <div className="h-[345px] w-[269px]">
                        <div className="h-[269px] w-[269px] bg-gray6 rounded-full flex justify-center items-center shadow-md cursor-pointer hover:scale-105 duration-100">
                            {/* Image */}
                            <div>
                                <Image src={TopCategories2} alt="Product-image" className=" h-[158px] w-[157px]" />
                            </div>
                        </div>

                        <div className="space-y-2 pt-2">
                            <h4 className="text-[20px] text-myblue flex justify-center">Mini LCW Chair</h4>
                            <span className="text-[16px] text-myblue flex justify-center">$56.00</span>
                        </div>

                    </div>

                    <div className="h-[345px] w-[269px]">
                        <div className="h-[269px] w-[269px] bg-gray6 rounded-full flex justify-center items-center shadow-md cursor-pointer hover:scale-105 duration-100">
                            {/* Image */}
                            <div>
                                <Image src={TopCategories3} alt="Product-image" className=" h-[149px] w-[149px]" />
                            </div>
                        </div>

                        <div className="space-y-2 pt-2">
                            <h4 className="text-[20px] text-myblue flex justify-center">Mini LCW Chair</h4>
                            <span className="text-[16px] text-myblue flex justify-center">$56.00</span>
                        </div>

                    </div>

                    <div className="h-[345px] w-[269px]">
                        <div className="h-[269px] w-[269px] bg-gray6 rounded-full flex justify-center items-center shadow-md cursor-pointer hover:scale-105 duration-100">
                            {/* Image */}
                            <div>
                                <Image src={TopCategories4} alt="Product-image" className=" h-[178px] w-[178px]" />
                            </div>
                        </div>

                        <div className="space-y-2 pt-2">
                            <h4 className="text-[20px] text-myblue flex justify-center">Mini LCW Chair</h4>
                            <span className="text-[16px] text-myblue flex justify-center">$56.00</span>
                        </div>

                    </div>

                </div>

                <div className="pt-40">
                    <div className="relative">
                        <Image src={TopCategoriesbg} alt="background-image" className=" h-[462px] w-full" />

                        <div className="absolute top-0 w-full h-full flex justify-center items-center">
                            <h1 className="text-[35px] font-bold text-myblue">
                                Get Leatest Update By Subscribe <br />0ur Newslater
                            </h1>
                        </div>

                        <div className="absolute bottom-24 w-full flex justify-center">
                            <Button text={"Shop Now"} />
                        </div>
                    </div>

                </div>

                <div className="flex justify-center pt-28">
                    <Image src={LogosImg} alt="logos-image" className=" h-[93px] w-[904px]" />
                </div>

            </div>
        </>
    )
}

export default TopCategories