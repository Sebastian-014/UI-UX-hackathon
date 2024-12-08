
import Link from "next/link"
import { FiSearch } from "react-icons/fi"

const Header = () => {
    return (
        <>
            <div className="bg-white w-full px-10 flex flex-1 justify-between items-center h-[65px]">
                <div className="flex items-center gap-x-14 py-4">
                    <h1 className="text-[34px] font-bold">Hekto</h1>

                    <div>
                        <nav>
                        <ul className="flex gap-x-8 text-[16px]">
                            <Link href="/"><li className="hover:text-mypink">Home</li></Link>
                            <Link href="/pages"><li className="hover:text-mypink">Pages</li></Link>
                            <Link href="/product"><li className="hover:text-mypink">Product</li></Link>
                            <Link href="/blog"><li className="hover:text-mypink">Blog</li></Link>
                            <Link href="/shop"><li className="hover:text-mypink">Shop</li></Link>
                            <Link href="/contact"><li className="hover:text-mypink">Contact</li></Link>
                        </ul>
                        </nav>
                    </div>
                </div>

                <div className="border border-slate-300 h-[36px] w-[220px] relative">
                    <span className="top-2 right-3 absolute text-slate-300"><FiSearch size="20" /></span>
                </div>

            </div>
        </>
    )
}

export default Header