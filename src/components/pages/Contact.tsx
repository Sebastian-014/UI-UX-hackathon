
import Button from "../shared/Button"
import Dots from "../shared/Dots"
import Wrapper from "../shared/Wrapper"
import ContactImg from "/public/images/contact-img.png"
import Image from "next/image"

const Contact = () => {
    return (
        <>
            <Wrapper>
                <div className="pt-40">

                    {/* Top Section */}

                    <div className="flex justify-between">

                        {/* Information About us */}

                        <div className="max-w-[550px] space-y-6">
                            <h1 className="text-[36px] font-bold text-myblue">Information About us</h1>
                            <p className="text-[16px]  text-gray2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.
                                Accumsan faucibus vitae lobortis quis bibendum quam.</p>

                                <Dots />
                        </div>

                        {/* Contact Way */}

                        <div className="space-y-8">

                            <h1 className="text-[36px] font-bold text-myblue">Contact Way</h1>

                            <div className="flex gap-x-14">

                                <div className="text-[16px] text-gray2 max-w-[170px] space-y-8">
                                    <p>Tel: 877-67-88-99
                                        E-Mail: shop@store.com</p>
                                    <p>20 Margaret st, London
                                        Great britain, 3NM98-LK</p>
                                </div>

                                <div className="text-[16px] text-gray2 max-w-[180px] space-y-8">
                                    <p>Support Forum For over 24hr</p>
                                    <p>Free standard shipping
                                        on all orders.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Bottom Section */}

                    <div className="pt-36 flex justify-between">

                        {/* Get In Touch */}

                        <div className="max-w-[534px] space-y-6">
                            <h1 className="text-[36px] font-bold text-myblue">Get In Touch</h1>
                            <p className="text-[16px] text-gray2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>

                            <div>
                                <form className="space-y-6">
                                    <div className="flex justify-between">
                                        <input type="text" placeholder="Your Name*" className="h-[45px] w-[255px] border border-gray-300 pl-2 rounded-md" />
                                        <input type="text" placeholder="Your E-mail" className="h-[45px] w-[255px] border border-gray-300 pl-2 rounded-md" />
                                    </div>

                                    <input type="text" placeholder="Subject*" className="h-[45px] w-full border border-gray-300 pl-2 rounded-md" />
                                    <input type="text" placeholder="Type Your Message*" className="h-[160px] w-full border border-gray-300 pl-2 pb-20 rounded-md" />

                                    <Button text={"Send Mail"} />
                                </form>

                            </div>              

                        </div>

                         {/* Image */}
                         <div>
                                <Image src={ContactImg} alt="contact-image" className=" h-[600px] w-[600px]" />
                            </div>

                    </div>

                </div>

            </Wrapper>
        </>
    )
}

export default Contact