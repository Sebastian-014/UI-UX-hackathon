
import Button from "../shared/Button"
import AboutImg from "/public/images/aboutus-img.png"
import OurFeatures1 from "/public/images/support-image1.png"
import OurFeatures2 from "/public/images/support-image2.png"
import OurFeatures3 from "/public/images/support-image3.png"
import OurFeatures4 from "/public/images/support-image4.png"
import ClientImg1 from "/public/images/client-img1.png"
import ClientImg2 from "/public/images/client-img2.png"
import ClientImg3 from "/public/images/client-img3.png"
import Image from "next/image"


const Aboutus = () => {

    // Boxes Data

    const supportBoxesData = [
        {
            header: "Free Delivery",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            image: OurFeatures1,

        },
        {
            header: "100% Cash Back",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            image: OurFeatures2,

        },
        {
            header: "Quality Product",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            image: OurFeatures3,

        },
        {
            header: "24/7 Support",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
            image: OurFeatures4,

        },
    ]

    return (
            <div className="pt-40">

                <div className="flex gap-x-10 px-10">
                    <div>
                        {/* Image */}

                        <Image src={AboutImg} alt="About-image" className=" h-[390px] w-[555px]" />
                    </div>

                    <div className="max-w-[550px] space-y-8 py-10">

                        {/* Text */}

                        <h1 className="text-[36px] font-bold text-myblue">Know About Our Ecomerce
                            Business, History</h1>

                        <p className="text-[16px] text-gray2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.
                            Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>

                        {/* Button */}

                        <Button text={"Contact us"} />

                    </div>
                </div>

                {/* Our Features Boxes */}

                <div>
                    <h1 className="flex justify-center items-center text-black text-[42px] font-bold pt-40">Our Features</h1>

                    <div className="flex justify-between px-10 pt-10 " >

                        {/* Boxes */}

                        {
                            supportBoxesData.map((item, i) => (
                                (<div key={i} className="w-[270px] h-[320px] rounded-md cursor-pointer shadow-md space-y-8 pt-12">

                                    <div className="flex justify-center items-center">
                                        <Image src={item.image} alt="support-image" className=" h-[55px] w-[60px]" />
                                    </div>

                                    <h4 className="text-myblue font-semibold text-[22px] flex justify-center items-center">{item.header}</h4>
                                    <p className="text-gray2 text-bold text[16px] flex justify-center items-center mx-2">{item.description}</p>
                                </div>)

                            ))
                        }

                    </div>

                </div>

                {/* Our Client Say */}

                <div className="pt-40">

                <div className=" flex justify-center items-center h-[500px] w-full bg-gray13" >

                    <div className="max-w-[689px] space-y-10">

                    <div className="flex justify-center items-center text-black text-[42px] font-bold">
                        <h1>Our Client Say!</h1>
                    </div>

                    {/* Images */}

                    <div className="flex justify-center gap-x-2"> 
                    <Image src={ClientImg1} alt="client-image" className=" h-[55px] w-[55px]" />
                    <Image src={ClientImg2} alt="client-image" className=" h-[55px] w-[55px]" />
                    <Image src={ClientImg3} alt="client-image" className=" h-[55px] w-[55px]" />      
                    </div>

                    <div>
                    <h4 className="flex justify-center text-[22px] font-semibold">Selina Gomez</h4>
                    <span className=" flex justify-center text-[12px] font-semibold text-gray2">Ceo At Webecy Digital</span>
                    </div>

                    <p className="flex justify-center text-[16px] font-bold text-gray2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu.
                         Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>

                </div>

                </div>

                </div>

            </div>
    )
}

export default Aboutus