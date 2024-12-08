
import { FiPhoneCall } from "react-icons/fi";
import { LuHeart, LuUser } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Topheader = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center flex-1 bg-myviolet text-mywhite text-[16px] w-full h-[40px] px-10 ">

          <div className="flex items-center gap-x-4 ">
            <MdOutlineEmail /><h4>mhhasanul@gmail.com</h4>
            <FiPhoneCall /><h4>(12345)67890</h4>
          </div>

          <div className="flex items-center gap-x-4">
            <ul>English</ul>  <RiArrowDropDownLine />
            <ul>USD </ul><RiArrowDropDownLine />
            <ul>Login</ul><LuUser />
            <ul>Wishlist</ul><LuHeart />
            <PiShoppingCartSimpleBold />
          </div>

        </div>
      </header>
    </>
  )
}

export default Topheader