

const Pagesheader = () => {
  return (
    <div className="flex justify-between">

        <div>
            <h2 className="text-[22px] text-myblue font-bold">Ecommerce Acceories & Fashion item </h2>
            <span className="text-[12px] text-gray2">About 9,620 results (0.62 seconds)</span>
        </div>

        <div className="flex gap-x-4 text-[16px] text-myblue3">
            <span className="">Per Page:</span>
            <div className="h-[25px] w-[55px] border"></div>
            <span>Sort By:</span>
            <div className="h-[28px] w-[96px] text-[14px] text-gray2 border flex justify-center items-center ">    
                Best Match      
            </div>
            <span>View:</span>
            <div className="h-[30px] w-[162px] border"></div>
        </div>
    </div>
  )
}

export default Pagesheader