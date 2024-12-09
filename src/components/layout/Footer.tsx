
import { BiLogoFacebookCircle } from "react-icons/bi"
import Button from "../shared/Button"
import { AiFillTwitterCircle } from "react-icons/ai"
import { RiInstagramFill } from "react-icons/ri"


const Footer = () => {
    return (
        <>
            <div className="h-[500px] w-full pt-40">
                <div className="flex justify-between h-[450px] px-10 bg-mygray pt-14">

                    <div className="space-y-6">
                        <h1 className="text-[38px] font-bold">Hekto</h1>
                        <div className=" flex justify-between pl-2 boreder rounded-md bg-white w-[377px] h-[44px]">
                            <input type="text" placeholder="Enter Email Address" />
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
                            <li>Laptops & Computers</li>
                            <li>Cameras & Photography</li>
                            <li>Smart Phones & Tablets</li>
                            <li>Video Games & Consoles</li>
                            <li>Waterproof Headphones</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[22px] font-semibold">Customer Care</h4>
                        <ul className="text-gray2 space-y-4 text-[16px]">
                            <li>My Account</li>
                            <li>Discount</li>
                            <li>Returns</li>
                            <li>Orders History</li>
                            <li>Order Tracking</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[22px] font-semibold">Pages</h4>
                        <ul className="text-gray2 space-y-4 text-[16px]">
                            <li>Blog</li>
                            <li>Browse the Shop</li>
                            <li>Category</li>
                            <li>Pre-Built Pages</li>
                            <li>Visual Composer Elements</li>
                            <li>WooCommerce Pages</li>
                        </ul>
                    </div>

                </div>

                <div className="flex justify-between items-center bg-gray3 text-gray4 text-[16px] font-semibold w-full h-[30px] px-20">
                    <h4>&copy; Webecy - All Rights Reserved</h4>
                    <div className="flex gap-x-5">
                        <BiLogoFacebookCircle size="20" className="text-myblue" />
                        <RiInstagramFill size="20" className="text-myblue" />
                        <AiFillTwitterCircle size="20" className="text-myblue" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer