import React from 'react';
import ShowMovie from './ShowMovie';
import { resolve } from 'path';
const getData=() => import("../../data/data").then((module) => module.default)

async function ShowAllMovies({page}) {
 	const data=await getData();
  const results=[...data?.results]

 return (
 <>
{data&&data?.results?.splice?.length>0&& 	<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
					{results.map(e=><ShowMovie movie={e} key={e} />)}
</div>}
 </>
   );
}

export default ShowAllMovies;