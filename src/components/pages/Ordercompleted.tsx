
import { GiCheckMark } from "react-icons/gi"
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import BottomLogos from "../shared/BottomLogos"


const Ordercompleted = () => {
    return (
        <Wrapper>
            <div className="pt-40">

                <div className=" flex justify-center items-center">

                <div className="h-[326px] w-[625px] space-y-10">

                    <span className="flex justify-center">
                    <GiCheckMark size="50" className="text-mypink" />
                    </span>

                    <h1 className="flex justify-center text-[36px] font-bold text-myblue5 ">Your Order Is Completed! </h1>

                    <p className="text-[14px] text-gray2">Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </p>

                    <div className="flex justify-center">
                    <Button text={"Continue Shopping"} />
                    </div>

                </div>

                </div>

                <BottomLogos />

            </div>
        </Wrapper>
    )
}

export default Ordercompleted