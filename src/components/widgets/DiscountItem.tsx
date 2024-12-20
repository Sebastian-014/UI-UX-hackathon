
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import DiscountItem1 from "/public/images/discount-item.png"
import Image from "next/image"
import { PiCheck } from "react-icons/pi"


const DiscountItem = () => {
    return (
        <>
            <Wrapper>
                <section>
                    <div>

                        <h1 className="flex justify-center items-center text-myblue text-[26px] md:text-[42px] font-bold pt-40">Discount Item</h1>

                        <div className="flex justify-center pt-4">
                            <ul className="flex gap-x-10">
                                <li className="text-[18px] text-myblue hover:text-mypink hover:underline cursor-pointer">Wood Chair</li>
                                <li className="text-[18px] text-myblue hover:text-mypink hover:underline cursor-pointer">Plastic Chair</li>
                                <li className="text-[18px] text-myblue hover:text-mypink hover:underline cursor-pointer">Sofa Colletion</li>
                            </ul>
                        </div>

                        <div className="md:flex justify-between items-center">

                            <div className="w-[500px] space-y-6">
                                {/* Text */}
                                <h2 className="text-[35px] font-bold text-myblue">20% Discount Of All Products</h2>
                                <h4 className="text-[21px] text-mypink">Eams Sofa Compact</h4>
                                <p className="text-[17px] text-gray11">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>

                                <div className="flex justify-between">

                                    <div>
                                        <ul className="text-[16px] text-gray11 space-y-2">
                                            <li className="flex items-center"><PiCheck />&nbsp;Material expose like metals</li>
                                            <li className="flex items-center"><PiCheck />&nbsp;Simple neutral colours.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <ul className=" text-[16px] text-gray11 space-y-2">
                                            <li className="flex items-center"><PiCheck />&nbsp;Clear lines and geomatric figures</li>
                                            <li className="flex items-center"><PiCheck />&nbsp;Material expose like metals</li>
                                        </ul>
                                    </div>

                                </div>

                                <Button text={"Shop Now"} />

                            </div>

                            <div className="relative h-[597px] w-[699px]">
                                {/* image */}
                                <Image src={DiscountItem1} alt="Product-image" className=" h-[597px] w-[699px]" />
                                <div className="h-[472px] w-[472px] bg-pink4 rounded-full absolute top-16 left-28 -z-10" />
                            </div>

                        </div>
                    </div>

                </section>

            </Wrapper>

        </>
    )
}

export default DiscountItem