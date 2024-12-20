

import { FC } from "react";

{/* Wrapper */ }

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="max-w-[1920px] mx-auto px-6 md:px-12">
            {children}
        </div>
    )
}

export default Wrapper