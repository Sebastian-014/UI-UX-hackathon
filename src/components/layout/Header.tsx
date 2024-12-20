
import Link from "next/link"
import { FiSearch } from "react-icons/fi"

const Header = () => {
    return (
        <>
            <div className="bg-white w-full px-6 md:px-12 flex flex-1 justify-between items-center h-[65px] fixed top-10 z-10">
                <div className="flex items-center gap-x-14 py-4">
                    <h1 className="text-[34px] font-bold">Hekto</h1>

                    {/* Navbar */}

                    <div>
                        <nav>
                        <ul className="flex gap-x-8 text-[16px]">
                            <Link href="/"><li className="hover:text-mypink">Home</li></Link>
                            <Link href="/pages"><li className="hover:text-mypink">Pages</li></Link>
                            <Link href="/griddefault"><li className="hover:text-mypink">Products</li></Link>
                            <Link href="/blog"><li className="hover:text-mypink">Blog</li></Link>
                            <Link href="/shoplist"><li className="hover:text-mypink">Shop</li></Link>
                            <Link href="/contact"><li className="hover:text-mypink">Contact</li></Link>
                        </ul>
                        </nav>
                    </div>
                </div>

                {/* Search Bar */}

                <div className="border border-slate-300 h-[40px] w-[317px] flex justify-end">
                    <div className="h-[40px] w-[50px] bg-mypink relative">
                       <span className="top-2 right-4 absolute text-slate-300"><FiSearch size="20" color="white" /></span> 
                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default Header