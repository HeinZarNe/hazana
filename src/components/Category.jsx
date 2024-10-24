import Image from 'next/image'
import React from 'react'

const Category = () => {
    return (
        <div className='min-w-[145px] flex-1 h-[145px] md:w-[135px] md:h-[135px] bg-white cursor-pointer hover:shadow-custom flex flex-col items-center gap-2 border border-gray-200'>

            <Image className='w-[80px] h-[80px] mt-3' src="/ape.png" width={80} height={80} alt="ape" />
            <p className="text-sm">Category</p>
        </div>
    )
}
5
export default Category