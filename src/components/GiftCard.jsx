import React from 'react'

export const GiftCard = () => {
    return (
        <div className='flex flex-row items-center justify-between w-full gap-3 text-white font-bold my-5'>
            <div className='flex-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-3 h-[60px]'>
                Gift Card
            </div>
            <div className='flex-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-3 h-[60px]'>
                Gift Card
            </div>
            <div className='flex-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-3 h-[60px]'>
                Gift Card
            </div>
        </div>
    )
}
