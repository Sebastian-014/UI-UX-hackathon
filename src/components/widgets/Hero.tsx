
import Button from "../shared/Button"
import HeroImage from "/public/images/hero-image.png"
import Image from "next/image"


const Hero = () => {
  return (
    <section>
      <div className="md:flex justify-between items-center h-[783px] w-full bg-gray5 px-6 md:px-12 pt-40">

        <div className="max-w-[644px] space-y-3">
          <h4 className="text-[12px] md:text-[16px] font-bold text-mypink">Best Furniture For Your Castle....</h4>
          <h1 className="text-[25px] md:text-[53px] font-bold">New Furniture Collection
            Trends in 2020</h1>
          <p className="text-[10px] md:text-[16px] text-gray2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>

          <Button text={"Shop Now"} />
        </div>

        <div>
          <Image src={HeroImage} alt="hero-image" className=" h-[340px] w-[340px] md:h-[560px] md:w-[560px]" />
        </div>

      </div>
    </section>

  )
}

export default Hero