

import { FC } from "react";

{/* Wrapper */ }

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-[1920px] mx-auto px-10">
            {children}
        </div>
    )
}

export default Wrapper