

import BottomLogos from "../shared/BottomLogos"
import Wrapper from "../shared/Wrapper"

const Login = () => {
    return (
        <>
            <Wrapper>
                <div className="pt-40">

                    <div className="flex justify-center items-center">

                        <div className="flex justify-center items-center h-[474px] w-[544px] shadow-lg rounded-md">
                            <form>
                                <h1 className="flex justify-center items-center text-[32px] font-bold text-black pb-2">Login</h1>
                                <h4 className="flex justify-center items-center text-[17px] text-gray12">Please login using account detail bellow.</h4>

                                <div className="space-y-4 pt-8">

                                    <div>
                                        <input type="text" placeholder="Email Address" required className="text-[17px] text-gray12 h-[52px] w-[432px] border rounded-md pl-2" />
                                    </div>

                                    <div>
                                        <input type="text" placeholder="Password" required className="text-[17px] text-gray12 h-[52px] w-[432px] border rounded-md pl-2" />
                                    </div>

                                </div>

                                <h4 className="text-[17px] text-gray12 pb-6 pt-4 cursor-pointer">Forgot your password?</h4>

                                <div className="flex justify-center">
                                    <button className="text-[17px] font-bold text-white bg-mypink hover:bg-pink-600 py-3 w-full rounded-md ">Sign In</button>
                                </div>

                                <h4 className=" flex justify-center text-[17px] text-gray12 pt-6 cursor-pointer">Don&apos;t have an Account? Create account</h4>
                            </form>

                        </div>

                    </div>

                    <BottomLogos />

                </div>
            </Wrapper>
        </>
    )
}

export default Login