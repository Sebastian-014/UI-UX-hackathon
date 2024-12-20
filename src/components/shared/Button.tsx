

import { FC } from "react"

{/* Button */ }

const Button: FC<{ text: string }> = ({ text }) => {
  return (

    <button className="bg-mypink px-4 py-2 md:px-6 md:py-3 text-white font-medium rounded-md shadow-lg hover:bg-pink-600">{text} </button>

  )
}

export default Button