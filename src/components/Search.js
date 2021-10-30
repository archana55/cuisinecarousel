import { useEffect, useState } from "react";
import { useParams } from "react-router";
const axios = require('axios');
const Search = ({...props}) => {
    const [recipes, setrecipes] = useState([]);
    console.log(props);
    let url = 
  `https://api.edamam.com/api/recipes/v2?type=public&q=${props.query}&app_id=5f94ff32&app_key=cc0741a3b6ca99f5d8fcbc5166fa5557`

    useEffect(()=> {
        async function fetchData() {
        let result = await axios.get(url);
        console.log(url);
        console.log(result.data);
        setrecipes(result.data.hits);
        console.log(props);
        console.log(props.test);
        }
        fetchData();
    },[]);
    return(
        <h1>Search {props.query}</h1>
    
    )
};

export default Search;