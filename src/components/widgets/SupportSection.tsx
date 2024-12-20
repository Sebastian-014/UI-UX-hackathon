
import Wrapper from "../shared/Wrapper"
import SupportImage1 from "/public/images/support-image1.png"
import SupportImage2 from "/public/images/support-image2.png"
import SupportImage3 from "/public/images/support-image3.png"
import SupportImage4 from "/public/images/support-image4.png"
import Image from "next/image"

const SupportSection = () => {

    const supportBoxesData = [
        {
            header: "Free Delivery",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            image: SupportImage1,

        },
        {
            header: "100% Cash Back",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            image: SupportImage2,

        },
        {
            header: "Quality Product",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            image: SupportImage3,

        },
        {
            header: "24/7 Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            image: SupportImage4,

        },
    ]

    return (
        <>
            <section>
                <Wrapper>

                    <h1 className="flex justify-center items-center text-myblue text-[26px] md:text-[42px] font-bold pt-40">What Shopex Offer!</h1>

                    <div className="md:flex justify-center gap-2 md:gap-4 pt-10" >

                        {/* Boxes */}

                        {
                            supportBoxesData.map((item, i) => (
                                <div key={i} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-2">
                                <div className="h-[320px] w-full rounded-md cursor-pointer shadow-md space-y-8 pt-12">

                                    <div className="flex justify-center items-center">
                                        <Image src={item.image} alt="support-image" className=" h-[55px] w-[60px] mx-auto" />
                                    </div>

                                    <h4 className="text-myblue font-semibold text-[16px] md:text-[22px] flex justify-center items-center">{item.header}</h4>
                                    <p className="text-gray2 text-bold text-[12px] md:text[20px] flex justify-center items-center mx-6">{item.description}</p>
                                </div>
                                </div>

                            ))
                        }

                    </div>

                </Wrapper>
            </section>
        </>
    )
}

export default SupportSection