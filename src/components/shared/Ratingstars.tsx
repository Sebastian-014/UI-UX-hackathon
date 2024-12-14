
import { FaStar } from "react-icons/fa"

const ratingstars = () => {
    return (
        <>
            <div>
                <span className="flex">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-gray-400" />
                </span>
            </div>
        </>
    )
}

export default ratingstars