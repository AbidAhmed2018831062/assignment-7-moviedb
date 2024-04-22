import movieList from "../../data/data";

export async function GET(){
 const data=movieList;
  return  Response.json({data})
}