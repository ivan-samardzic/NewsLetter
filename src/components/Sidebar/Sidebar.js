import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchBox from '../SearchBox/SearchBox'

const Sidebar = ({sidebarOpen}) => {
    
    return (
        <div>
            {sidebarOpen &&
            <div>
                <Navbar direction='column' />
                <SearchBox />
            </div>
            }
            
        </div>
    )
}

export default Sidebar
