import { categoryCards } from '@/constant'
import React from 'react'


const CategoryCards = () => {
    return (
        <div className="flex flex-row gap-2 items-center justify-between px-2 flex-wrap">
            {
                categoryCards.map((card, i) =>
                    <div key={i} className='flex rounded-lg flex-row p-3 gap-3 flex-1 justify-between bg-white h-[112px] min-w-[235px]'>
                        <div className="flex flex-col gap-2 text-sm">
                            <p className="text-lg font-bold">{card.title}</p>
                            <p>{card.description}</p>
                        </div>
                        <div className="p-3 rounded-md bg-cyan-100">
                            <card.icon className="w-16 h-16 text-cyan-500  " />
                        </div>
                    </div>)
            }
        </div>
    )
}

export default CategoryCards