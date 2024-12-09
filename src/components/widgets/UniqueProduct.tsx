
import Button from "../shared/Button"
import UniqueProduct1 from "/public/images/unique-product.png"
import Image from "next/image"


const UniqueProduct = () => {
    return (
        <>
            <section>

                <div className="pt-40">
                    <div className="bg-gray8 w-full h-[579px]">
                        <div className="flex justify-center items-center">

                            <div>
                                {/* Image */}
                                <Image src={UniqueProduct1} alt="Product-image" className=" h-[550px] w-[509px]" />
                            </div>

                            <div className="w-[507px] space-y-5">
                                {/* Text */}
                                <h1 className="text-[35px] font-bold text-myblue">Unique Features Of leatest &
                                    Trending Poducts</h1>

                                <p className="text-[16px] text-gray9 font-medium">All frames constructed with hardwood solids and laminates</p>
                                <p className="text-[16px] text-gray9">Reinforced with double wood dowels, glue, screw - nails corner
                                    blocks and machine nails</p>
                                <p className="text-[16px] text-gray9 font-medium">Arms, backs and seats are structurally reinforced</p>

                                {/* Botton */}

                                <div className="flex gap-x-5 pt-4">
                                    <Button text={"Add to Cart"} />

                                    <ul>
                                        <li className="text-myblue font-semibold">B&B Italian Sofa </li>
                                        <li className="text-myblue">$32.00</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default UniqueProduct