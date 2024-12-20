
import Button from "../shared/Button"
import Wrapper from "../shared/Wrapper"
import CartImg1 from "/public/images/cart-img1.png"
import CartImg2 from "/public/images/cart-img2.png"
import CartImg3 from "/public/images/cart-img3.png"
import CartImg4 from "/public/images/cart-img4.png"
import CartImg5 from "/public/images/cart-img5.png"
import Image from "next/image"

const Shoppingcart = () => {

    const cartData = [

        {
            name: "Ut diam consequat",
            color: "Brown",
            size: "XL",
            price: "$32.00",
            total: "£219.00",
            image: CartImg1,
        },
        {
            name: "Vel faucibus posuere",
            color: "Brown",
            size: "XL",
            price: "$32.00",
            total: "£219.00",
            image: CartImg2,
        },
        {
            name: "Ac vitae vestibulum",
            color: "Brown",
            size: "XL",
            price: "$32.00",
            total: "£219.00",
            image: CartImg3,
        },
        {
            name: "Elit massa diam",
            color: "Brown",
            size: "XL",
            price: "$32.00",
            total: "£219.00",
            image: CartImg4,
        },
        {
            name: "Proin pharetra elementum",
            color: "Brown",
            size: "XL",
            price: "$32.00",
            total: "£219.00",
            image: CartImg5,
        },

    ]

    return (
        <>
            <Wrapper>
                <div className="pt-40">

                    {/* Parent Div */}
                    <div className="flex justify-between">

                        {/* Left Side */}

                        <div className="max-w-[718px]">

                            {/* Headings */}

                            <div className="flex justify-between text-[20px] font-bold text-myblue4">
                                <h1>Product</h1>
                                <div className="flex gap-x-28">
                                    <h1>Price</h1>
                                    <h1>Quantity</h1>
                                    <h1>Total</h1>
                                </div>
                            </div>

                            {
                                cartData.map((item, i) => (
                                    (<div key={i} className=" flex justify-between items-center gap-x-24 border-b pb-8 pt-8">

                                        {/* Product    */}
                                        <div className="flex items-center gap-x-4">
                                            {/* Image */}
                                            <div>
                                                <Image src={item.image} alt="Product-image" className=" h-[87px] w-[83px]" />
                                            </div>
                                            {/* Product Details */}
                                            <div>
                                                <h1 className="text-[16px]">{item.name}</h1>
                                                <div className="flex items-center gap-x-1 text-gray9">
                                                    <span className="text-[12px]">Color:</span>
                                                    <span className="text-[15px]">{item.color}</span>
                                                </div>
                                                <div className="flex items-center gap-x-1 text-gray9">
                                                    <span className="text-[12px]">Size:</span>
                                                    <span className="text-[16px]">{item.size}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <span className="text-[16px] text-myblue1">{item.price}</span>
                                        </div>

                                        {/* Quantity */}
                                        <div className="flex justify-between items-center bg-slate-100 text-slate-500 h-[22px] w-[74px]">
                                            <span className="bg-slate-200 h-[22px] w-[16px] flex justify-center cursor-default">-</span>
                                            <span>1</span>
                                            <span className="bg-slate-200 h-[22px] w-[16px] flex justify-center cursor-default">+</span>
                                        </div>

                                        {/* Total */}
                                        <div>
                                            <span className="text-[16px] text-myblue1">{item.total}</span>
                                        </div>

                                    </div>)
                                ))
                            }

                            {/* Buttons */}

                            <div className="flex justify-between pt-14">
                                <div>
                                    <Button text={"Update Cart"} />
                                </div>

                                <div>
                                    <Button text={"Clear Cart"} />
                                </div>
                            </div>

                        </div>

                        {/* Right side */}

                        <div className="space-y-10">

                            <h1 className="text-[20px] font-bold text-myblue4 flex justify-center">Cart Totals</h1>

                            {/* Cart total */}
                            <div className="h-[284px] w-[371px] bg-gray6 rounded-md py-6 px-4 space-y-10">

                             <div className="flex justify-between text-[17px] text-myblue1 border-b border-gray14">
                                <h2 className="font-semibold">Subtotals:</h2>
                                <span>£219.00</span>
                             </div>

                             <div className="flex justify-between text-[17px] text-myblue1 border-b border-gray14">
                                <h1 className="font-medium">Totals:</h1>
                                <span>£325.00</span>
                             </div>

                             <h4 className="text-[14px] text-gray2">Shipping & taxes calculated at checkout</h4>

                             <button className="py-2 w-full bg-mygreen shadow-md hover:bg-green-500 rounded-md text-white font-bold">Proceed To Checkout</button>

                            </div>

                            <h1 className="text-[20px] font-bold text-myblue4 flex justify-center">Calculate Shopping</h1>

                            {/* Calculate Shopping */}
                            <div className="h-[284px] w-[371px] text-gray9 font-semibold bg-gray6 rounded-md py-6 px-4 space-y-10">

                             <h4 className="border-b">Bangladesh</h4>
                             <h4 className="border-b">Mirpur Dhaka - 1200</h4>
                             <h4 className="border-b">Postal Code</h4>

                             {/* Button */}
                             <Button text={"Calculate Shiping"} />
                            </div>
                             
                        </div>

                    </div>

                </div>
            </Wrapper>
        </>
    )
}

export default Shoppingcart