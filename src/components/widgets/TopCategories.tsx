
import TopCategories1 from "/public/images/top-categories1.png"
import TopCategories2 from "/public/images/top-categories2.png"
import TopCategories3 from "/public/images/top-categories3.png"
import TopCategories4 from "/public/images/top-categories4.png"
import TopCategoriesbg from "/public/images/top-categories-bg.png"
import Image from "next/image"
import Button from "../shared/Button"
import BottomLogos from "../shared/BottomLogos"

const TopCategories = () => {

    const topCategoriesData = [

        {
            name: "Mini LCW Chair",
            price: "$56.00",
            image: TopCategories1,
        },
        {
            name: "Mini LCW Chair",
            price: "$56.00",
            image: TopCategories2,
        },
        {
            name: "Mini LCW Chair",
            price: "$56.00",
            image: TopCategories3,
        },
        {
            name: "Mini LCW Chair",
            price: "$56.00",
            image: TopCategories4,
        },
    ]

    return (
        <>
            <div>

                <h1 className="flex justify-center items-center text-myblue text-[42px] font-bold pt-40">Top Categories</h1>

                <div className="flex justify-center gap-x-5 pt-10">

                    {/* Boxes */}

                    {
                        topCategoriesData.map((item, i) => (
                            (<div key={i} className="h-[345px] w-[269px]">
                                <div className="h-[269px] w-[269px] bg-gray6 rounded-full flex justify-center items-center shadow-md cursor-pointer hover:scale-105 duration-100">
                                    {/* Image */}
                                    <div>
                                        <Image src={item.image} alt="Product-image" className=" h-[170px] w-[170px]" />
                                    </div>
                                </div>

                                <div className="space-y-2 pt-2">
                                    <h4 className="text-[20px] text-myblue flex justify-center">{item.name}</h4>
                                    <span className="text-[16px] text-myblue flex justify-center">{item.price}</span>
                                </div>

                            </div>)

                        ))
                    }

                </div>


                <div className="pt-40">
                    <div className="relative">
                        <Image src={TopCategoriesbg} alt="background-image" className=" h-[462px] w-full" />

                        <div className="absolute top-0 w-full h-full flex justify-center items-center">
                            <h1 className="text-[35px] font-bold text-myblue">
                                Get Leatest Update By Subscribe <br />0ur Newslater
                            </h1>
                        </div>

                        <div className="absolute bottom-24 w-full flex justify-center">
                            <Button text={"Shop Now"} />
                        </div>
                    </div>

                </div>

                <BottomLogos />

            </div>
        </>
    )
}

export default TopCategories