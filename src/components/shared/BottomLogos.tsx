
import LogosImg from "/public/images/logos-img.png"
import Image from "next/image"

const BottomLogos = () => {
    return (
        <>
            <div className="flex justify-center pt-16 md:pt-32">
                <Image src={LogosImg} alt="logos-image" className="h-[60px] w-[300px] md:h-[90px] md:w-[900px]" />
            </div>
        </>
    )
}

export default BottomLogos