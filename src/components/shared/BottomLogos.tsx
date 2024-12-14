
import LogosImg from "/public/images/logos-img.png"
import Image from "next/image"

const BottomLogos = () => {
    return (
        <>
            <div className="flex justify-center pt-32">
                <Image src={LogosImg} alt="logos-image" className=" h-[93px] w-[904px]" />
            </div>
        </>
    )
}

export default BottomLogos