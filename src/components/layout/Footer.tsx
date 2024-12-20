
import { BiLogoFacebookCircle } from "react-icons/bi"
import Button from "../shared/Button"
import { AiFillTwitterCircle } from "react-icons/ai"
import { RiInstagramFill } from "react-icons/ri"


const Footer = () => {
    return (
        <>
            <div className="h-[500px] w-full pt-40">
                <div className="flex justify-between h-[450px] px-6 md:px-12 bg-mygray pt-14">

                    <div className="space-y-6">
                        <h1 className="text-[38px] font-bold">Hekto</h1>
                        
                        <div className="h-[48px] w-[377px] bg-white rounded-md flex justify-between items-center">
                            <input type="text" placeholder="Enter Email Address"className="pl-2"  />
                            <Button text={"Sign Up"} />
                        </div>

                        <div>
                            <ul className="text-gray2 space-y-2 text-[16px]">
                                <li>Contact Info</li>
                                <li>17 Princess Road, London, Greater London NW1 8JR, UK</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[22px] font-semibold">Catagories</h4>
                        <ul className="text-gray2 space-y-4 text-[16px]">
                            <li className="cursor-pointer">Laptops & Computers</li>
                            <li className="cursor-pointer">Cameras & Photography</li>
                            <li className="cursor-pointer">Smart Phones & Tablets</li>
                            <li className="cursor-pointer">Video Games & Consoles</li>
                            <li className="cursor-pointer">Waterproof Headphones</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[22px] font-semibold">Customer Care</h4>
                        <ul className="text-gray2 space-y-4 text-[16px]">
                            <li className="cursor-pointer">My Account</li>
                            <li className="cursor-pointer">Discount</li>
                            <li className="cursor-pointer">Returns</li>
                            <li className="cursor-pointer">Orders History</li>
                            <li className="cursor-pointer">Order Tracking</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[22px] font-semibold">Pages</h4>
                        <ul className="text-gray2 space-y-4 text-[16px]">
                            <li className="cursor-pointer">Blog</li>
                            <li className="cursor-pointer">Browse the Shop</li>
                            <li className="cursor-pointer">Category</li>
                            <li className="cursor-pointer">Pre-Built Pages</li>
                            <li className="cursor-pointer">Visual Composer Elements</li>
                            <li className="cursor-pointer">WooCommerce Pages</li>
                        </ul>
                    </div>

                </div>

                <div className="flex justify-between items-center bg-gray3 text-gray4 text-[16px] font-semibold w-full h-[30px] px-20">
                    <h4>&copy; Webecy - All Rights Reserved</h4>
                    <div className="flex gap-x-5">
                        <BiLogoFacebookCircle size="20" className="text-myblue cursor-pointer" />
                        <RiInstagramFill size="20" className="text-myblue cursor-pointer" />
                        <AiFillTwitterCircle size="20" className="text-myblue cursor-pointer" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer