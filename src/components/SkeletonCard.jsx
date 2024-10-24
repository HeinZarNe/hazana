import React from 'react'

const SkeletonCard = () => {
    return (

        <div role="status" className="py-2 flex flex-col min-w-[188px] max-w-[200px] flex-1 bg-white gap-2  animate-pulse">
            <div className="bg-gray-700 w-[188px] h-[189px] max-auto"></div>
            <div className="px-2 flex flex-col gap-3">
                <div className="h-2 rounded-full bg-gray-500 max-w-[80%]" />
                <div className="h-2 rounded-full bg-gray-500 max-w-[50%]" />
                <div className="h-2 rounded-full bg-gray-500 max-w-[30%]" />
            </div>

            <span className="sr-only">Loading...</span>
        </div>

        //   <div className="py-2 flex flex-col hover:shadow-custom cursor-pointer gap-1 min-w-[188px] max-w-[200px] flex-1 bg-white   ">
        //             <img src={data?.image} alt="product image" className="h-[189px] mx-auto" width={188} />
        //             <div className="px-2 flex flex-col gap-1">
        //                 <p className="h-[36px] truncate ...">{data?.title}</p>
        //                 <p className="flex flex-row text-lg items-center text-accent ">
        //                     <BiDollar className="w-6 h-6" />{data?.price}
        //                 </p>
        //                 {getRateStar(data?.rating)}
        //             </div>
        //         </div>
    )
}

export default SkeletonCard