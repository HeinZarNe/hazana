import Image from 'next/image'
import React from 'react'

const MallCard = () => {
    return (
        <div className='flex flex-col min-w-[188px] items-center  cursor-pointer hover:shadow-custom'>
            <Image src="/abstract.png" width={188} height={188} alt="img" />
            <div className='flex flex-col w-full bg-white items-center justify-center '>

                <div className='p-1 bg-white  mt-[-20px] w-fit shadow-md'>
                    <Image width={40} height="40" src="/ape.png" alt="img" />
                </div>
                <p className="text-">
                    Item
                </p>
                <p className="text-sm text-gray-400">
                    Item
                </p>
            </div>
        </div>
    )
}

export default MallCard