
import Button from "../shared/Button"
import HeroImage from "/public/images/hero-image.png"
import HeroImage2 from "/public/images/hero-image2.png"
import Image from "next/image"


const Hero = () => {
  return (
    <section>
      <div className="flex justify-between items-center h-[783px] w-full bg-gray5 px-10 relative pt-40">

        <div>
          <Image src={HeroImage2} alt="hero-image" className=" h-[300px] w-[200px] absolute top-0" />
        </div>

        <div className="max-w-[644px] space-y-3">
          <h4 className="text-[16px] font-bold text-mypink">Best Furniture For Your Castle....</h4>
          <h1 className="text-[53px] font-bold">New Furniture Collection
            Trends in 2020</h1>
          <p className="text-[16px] text-gray2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
            in phasellus non in justo.</p>

          <Button text={"Shop Now"} />
        </div>

        <div>
          <Image src={HeroImage} alt="hero-image" className=" h-[629px] w-[629px]" />
        </div>

      </div>
    </section>
  )
}

export default Hero