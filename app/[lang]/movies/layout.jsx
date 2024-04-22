import React from 'react';
import SideBar from '@/app/components/homepage/SideBar';

function Layout({children,modal,params}) {
 console.log(params);
 return (
  	<div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
   <SideBar lang={params.lang}/>
   {modal}
   {children}
  </div>
 );
}

export default Layout;