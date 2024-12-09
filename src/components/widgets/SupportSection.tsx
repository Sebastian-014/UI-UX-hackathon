
import Wrapper from "../shared/Wrapper"
import SupportImage1 from "/public/images/support-image1.png"
import SupportImage2 from "/public/images/support-image2.png"
import SupportImage3 from "/public/images/support-image3.png"
import SupportImage4 from "/public/images/support-image4.png"
import Image from "next/image"

const SupportSection = () => {
    return (
        <>
            <section>
                <Wrapper>

                    <h1 className="flex justify-center items-center text-myblue text-[42px] font-bold pt-40">What Shopex Offer!</h1>

                    <div className="flex justify-center gap-x-4 pt-10" >

                        <div className="w-[270px] h-[320px] rounded-md cursor-pointer shadow-md space-y-8 pt-12">
                            <div className="flex justify-center items-center">
                                <Image src={SupportImage1} alt="support-image" className=" h-[60px] w-[65px]" />
                            </div>
                            <h4 className="text-myblue font-semibold text-[22px] flex justify-center items-center">24/7 Support</h4>
                            <p className="text-gray2 text-bold text[16px] flex justify-center items-center mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>

                        <div className="w-[270px] h-[320px] rounded-md cursor-pointer shadow-md space-y-8 pt-12">
                            <div className="flex justify-center items-center">
                                <Image src={SupportImage2} alt="support-image" className=" h-[65px] w-[65px]" />
                            </div>
                            <h4 className="text-myblue font-semibold text-[22px] flex justify-center items-center">24/7 Support</h4>
                            <p className="text-gray2 text-bold text[16px] flex justify-center items-center mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>

                        <div className="w-[270px] h-[320px] rounded-md cursor-pointer shadow-md space-y-8 pt-12">
                            <div className="flex justify-center items-center">
                                <Image src={SupportImage3} alt="support-image" className=" h-[65px] w-[65px]" />
                            </div>
                            <h4 className="text-myblue font-semibold text-[22px] flex justify-center items-center">24/7 Support</h4>
                            <p className="text-gray2 text-bold text[16px] flex justify-center items-center mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>

                        <div className="w-[270px] h-[320px] rounded-md cursor-pointer shadow-md space-y-8 pt-12">
                            <div className="flex justify-center items-center">
                                <Image src={SupportImage4} alt="support-image" className=" h-[65px] w-[65px]" />
                            </div>
                            <h4 className="text-myblue font-semibold text-[22px] flex justify-center items-center">24/7 Support</h4>
                            <p className="text-gray2 text-bold text[16px] flex justify-center items-center mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                        </div>

                    </div>

                </Wrapper>
            </section>
        </>
    )
}

export default SupportSection