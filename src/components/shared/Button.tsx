

import { FC } from "react"

{/* Button */ }

const Button: FC<{ text: string }> = ({ text }) => {
  return (

    <button className="bg-mypink px-5 py-3 text-white font-semibold rounded-md shadow-lg">{text} </button>

  )
}

export default Button