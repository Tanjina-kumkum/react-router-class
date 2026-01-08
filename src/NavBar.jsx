import React from 'react'


const NavigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
    description: "Main landing page",
    isPublic: true
  },
  {
    id: 2,
    name: "About Us",
    path: "/about",
    description: "Information about the company",
    isPublic: true
  },
  {
    id: 3,
    name: "Dashboard",
    path: "/dashboard",
    description: "User dashboard page",
    isPublic: false
  },
  {
    id: 4,
    name: "Profile",
    path: "/profile",
    description: "User profile information",
    isPublic: false
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    description: "Contact and support page",
    isPublic: true
  }
];







const NavBar = () => {
  return (
    <nav> 
        
           
            
        

        <ul className='flex'>
           
            
         {
              NavigationData.map(route=> <li className='m-4'><a href={route.path}>{route.name}</a></li>)

           
         }
            
            </ul>                      
    {/* <ul className='flex'>
<li className='m-4'><a href="./">Home</a></li>
<li className='m-4'><a href="about">about</a></li>
<li className='m-4'><a href="blog">blog</a></li>
 
    </ul> */}
    </nav>
  )
}

export default NavBar