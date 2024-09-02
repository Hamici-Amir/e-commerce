import { Dash, List, Products, Profile, Request, Sidebar } from '../components/dashboard'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Menu } from 'lucide-react'

const Dashboard = () => {
  const location = useLocation()
  
  const [tab ,setTab] =useState("/") 
  useEffect(()=> {
      const urlParams =new URLSearchParams(location.search)
      const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl){
        setTab(tabFromUrl) ;
      }
     

  },[location.search])



  return (
    <div className=' flex     '>
        <div className=' hidden sm:inline-block'>
        <Sidebar />
        </div>

    <div className=' w-[700px]  '>
    
    
      {tab == '/' || tab=="dash" && <Dash />   }
      {tab == 'orders' && <List /> }
      {tab == 'requests' && <Request /> }
      {tab == 'products' && <Products /> }
      {tab == 'profile'  && <Profile /> }

    
    
    
    
    
    
    <div className="drawer sm:hidden inline-block">
  <input id="my-drawer" type="checkbox" className="drawer-toggle "  />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" fixed top-0 z-40  right-0 p-1 "> <Menu size={36} strokeWidth={3} /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <Sidebar />
  </div>
    </div>
    </div>

    









    </div>
  )
}

export default Dashboard