
import BottomLogos from "<@>/components/shared/BottomLogos"
import Button from "<@>/components/shared/Button"
import Wrapper from "<@>/components/shared/Wrapper"
import Link from "next/link"


const notFound = () => {
    return (
        <Wrapper>
            <div className="space-y-14 pt-40">

                {/* Text */}

                <div className="flex justify-center items-center">
                    <h1 className="text-[24px] font-bold text-myblue">oops!  The page you requested was not found!</h1>
                </div>

                {/* Button */}

                <div className="flex justify-center items-center">
                    <Link href="/"><Button text={"Back To Home"} /></Link>
                </div>

                <div>
                    <BottomLogos />
                </div>


            </div>

        </Wrapper>
    )
}

export default notFound