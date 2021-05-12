import http from "../Utilities/http";
import {omdApiKey} from "../key";
const url='http://www.omdbapi.com/';

const movieService={
    searchByName: async (name:string, page:number)=>{
        try{
            const responce=await <any>http.get(url,{
                apikey: omdApiKey,
                s:name,
                page
            });
            if (responce?.Error){
                console.log(responce.Error)
                return null;
            } else {
                return {
                    totalResults: parseInt(responce.totalResults,10),
                    movies: responce.Search.map((movie:any)=>({
                        id:movie.imdbID,
                        poster:movie.Poster,
                        title:movie.Title,
                        type:movie.Type,
                        year:movie.Year,
                }))
                }
            }
        } catch(error){
            console.log(error);
        }
    },
    getById:async (id:string)=>{
        const responce=await <any>http.get(url,{
            apikey: omdApiKey,
            i:id,
        });
    }
};
export default movieService