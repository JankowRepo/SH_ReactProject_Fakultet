import React from 'react'
import NavPanel from "../../components/NavPanel";
import movieService from "../../services/movies";

const Home=()=>{
    const[search, setSearch]=React.useState('Harry Potter')
    const [movie, setMovie] = React.useState({});
    React.useEffect( ()=>{
        const makeRequest=async()=>{
            try{
                const responce= movieService.searchByName(search,1);
                setMovie(responce);
            } catch(error){
                    console.log(error)
                    }
        };
        makeRequest();
    }, [search]);
    return (
        <div>
            <NavPanel/>
            <div>This is home page</div>
        </div>
    );
}

export default Home