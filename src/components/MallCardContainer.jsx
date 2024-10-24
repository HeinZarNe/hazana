import React from 'react'
import MallCard from './MallCard'

const MallCardContainer = () => {
    return (
        <div className="w-full px-1 lg:px-0">  <p className='text-xl font-thin mb-3 w-full'>Haz Mall</p>
            <div className="flex flex-row items-center justify-center gap-1 overflow-x-auto ">

                <MallCard /><MallCard /><MallCard /><MallCard /><MallCard /><MallCard />
            </div>
        </div>
    )
}

export default MallCardContainer