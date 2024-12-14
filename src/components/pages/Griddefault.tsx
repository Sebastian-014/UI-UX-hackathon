
import Pagesheader from "../shared/Pagesheader"
import Wrapper from "../shared/Wrapper"
import GridImg1 from "/public/images/grid-img1.png"
import GridImg2 from "/public/images/grid-img2.png"
import GridImg3 from "/public/images/grid-img3.png"
import GridImg4 from "/public/images/grid-img4.png"
import GridImg5 from "/public/images/grid-img5.png"
import GridImg6 from "/public/images/grid-img6.png"
import GridImg7 from "/public/images/grid-img7.png"
import GridImg8 from "/public/images/grid-img8.png"
import GridImg9 from "/public/images/grid-img9.png"
import GridImg10 from "/public/images/grid-img10.png"
import GridImg11 from "/public/images/grid-img11.png"
import GridImg12 from "/public/images/grid-img12.png"
import Image from "next/image"
import BottomLogos from "../shared/BottomLogos"

const Griddefault = () => {

  // First Row Data

  const gridDefaultData1 = [

    {
      name: "Vel elit euismod",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg1,
    },
    {
      name: "Ultricies condimentum imperdiet",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg2,
    },
    {
      name: "Vitae suspendisse sed",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg3,
    },
    {
      name: "Sed at fermentum",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg4,
    },
  ]

  // Second Row Data

  const gridDefaultData2 = [

    {
      name: "Fusce pellentesque at",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg5,
    },
    {
      name: "Vestibulum magna laoreet",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg6,
    },
    {
      name: "Sollicitudin amet orci",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg7,
    },
    {
      name: "Ultrices mauris sit",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg8,
    },
  ]

  // Third Row Data

  const gridDefaultData3 = [

    {
      name: "Pellentesque condimentum ac",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg9,
    },
    {
      name: "Cras scelerisque velit",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg10,
    },
    {
      name: "Lectus vulputate faucibus",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg11,
    },
    {
      name: "Purus risus, ut",
      price: "$26.00 ",
      oldprice: "$42.00",
      image: GridImg12,
    },
  ]


  return (
    <>
      <Wrapper>
        <div className="pt-40">

          <div>
            <Pagesheader />
          </div>

          {/* First Row */}

          <div className="flex justify-between pt-32">

            {
              gridDefaultData1.map((item, i) => (
                (<div key={i} className="h-[363px] w-[270px] cursor-pointer hover:scale-105 duration-100 hover:shadow-md">

                  <div className="h-[280px] w-[270px] bg-gray6 flex justify-center items-center">
                    <div>
                      <Image src={item.image} alt="Product-image" className=" h-[150px] w-[150px]" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h2 className=" flex justify-center items-center text-[16px] font-bold text-myblue">{item.name}</h2>
                    <div className="flex justify-center items-center gap-x-3">
                      <span className="text-[14px] text-myblue">{item.price}</span>
                      <span className="text-[14px] text-mypink line-through">{item.oldprice}</span>
                    </div>
                  </div>

                </div>)
              ))
            }

          </div>

          {/* Second Row */}


          <div className="flex justify-between pt-20">

            {
              gridDefaultData2.map((item, i) => (
                (<div key={i} className="h-[363px] w-[270px] cursor-pointer hover:scale-105 duration-100 hover:shadow-md">

                  <div className="h-[280px] w-[270px] bg-gray6 flex justify-center items-center">
                    <div>
                      <Image src={item.image} alt="Product-image" className=" h-[150px] w-[150px]" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className=" flex justify-center items-center text-[16px] font-bold text-myblue">{item.name}</h4>
                    <div className="flex justify-center items-center gap-x-3">
                      <span className="text-[14px] text-myblue">{item.price}</span>
                      <span className="text-[14px] text-mypink line-through">{item.oldprice}</span>
                    </div>
                  </div>

                </div>)
              ))
            }

          </div>

          {/* Third Row */}


          <div className="flex justify-between pt-20">

            {
              gridDefaultData3.map((item, i) => (
                (<div key={i} className="h-[363px] w-[270px] cursor-pointer hover:scale-105 duration-100 hover:shadow-md">

                  <div className="h-[280px] w-[270px] bg-gray6 flex justify-center items-center">
                    <div>
                      <Image src={item.image} alt="Product-image" className=" h-[150px] w-[150px]" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className=" flex justify-center items-center text-[16px] font-bold text-myblue">{item.name}</h4>
                    <div className="flex justify-center items-center gap-x-3">
                      <span className="text-[14px] text-myblue">{item.price}</span>
                      <span className="text-[14px] text-mypink line-through">{item.oldprice}</span>
                    </div>
                  </div>

                </div>)
              ))
            }

          </div>

          <div className="pt-20">
          <BottomLogos />
          </div>


        </div>
      </Wrapper>
    </>
  )
}

export default Griddefault