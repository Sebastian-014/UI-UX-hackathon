
import { FiPhoneCall } from "react-icons/fi";
import { LuHeart, LuUser } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

const Topheader = () => {
  return (
    <>
      <header>
        <div className="flex justify-between items-center flex-1 bg-myviolet text-mywhite text-[15px] w-full h-[40px] px-10 fixed top-0 z-10 ">

          <div className="flex items-center gap-x-4 cursor-pointer">
            <MdOutlineEmail size="20" /><h4>mhhasanul@gmail.com</h4>
            <FiPhoneCall size="16" /><h4>(12345)67890</h4>
          </div>

          <div>
            <ul className="flex items-center gap-x-3 cursor-pointer">
              <li>English</li><RiArrowDropDownLine size="20" />
              <li>USD</li><RiArrowDropDownLine size="20" />
              <li>Login</li><LuUser size="20" />
              <li>Wishlist</li><LuHeart size="20" />
              <br />
              <PiShoppingCartSimpleBold size="20" />
            </ul>
          </div>

        </div>
      </header>
    </>
  )
}

export default Topheader