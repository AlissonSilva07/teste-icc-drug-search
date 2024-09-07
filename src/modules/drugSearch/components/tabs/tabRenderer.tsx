import React from 'react'

interface ITabRenderer {
    children: React.ReactNode
}

const TabRenderer = ({ children }: ITabRenderer) => {
    return (
        <div className='flex-1 w-full flex flex-col'>
            {children}
        </div>
    )
}

export { TabRenderer }