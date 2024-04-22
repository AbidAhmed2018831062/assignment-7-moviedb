import movieList, { updateMovie } from "@/app/data/data.js";
export async function GET(request,{params}){
  const id=params?.id;
  console.log(id);
  const movie=movieList?.results?.find(e=>parseInt(id)===e.id);
  console.log(movie)
  if(movie){
   return Response.json({movie});
  }
  else{
   return Response.json({message:`Movie with ${id} not found`},{
    status:404
   })
  }
}

export async function PATCH(request,{params}){
   const id=params?.id;
   const movieTitle = await request.json();
   const movieIndex = movieList?.results?.findIndex(
        (movie) => movie.id === parseInt(id)
    );
    if(movieIndex!==-1){
      updateMovie(movieIndex,movieTitle?.title)
      return Response.json(movieList.results[movieIndex]);
  }
  else{
     return Response.json({message:`Movie with ${id} not found`},{
    status:404
   })
  }
}

export async function DELETE(request, { params }) {
    const movieId = params.id;
    const movieIndex = movieList.results.findIndex(
        (movie) => movie.id === parseInt(movieId)
    );
    if(movieIndex!==-1){
    const movieToDelete = movieList.results[movieIndex];
    movieList.results.splice(movieIndex, 1);
    return Response.json(movieToDelete);
    }
    else{
      return Response.json({message:`Movie with ${movieId} not found`},{
    status:404
   })
    }
}