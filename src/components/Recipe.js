import { useParams } from "react-router";
import { useState } from "react";
import FilterButtonsList from "./FilterButtonsList";
import RecipeList from "./RecipeList";
const Recipe = props => {
    const {slug} = useParams();
    const [filter, setFilter] = useState('ALL');

    const filterSelectedHandler = (e) => {
        console.log(e.target.value);
        setFilter(e.target.value.toUpperCase());
    }

    return <div>
    <FilterButtonsList type="Cuisine" onFilterSelected={filterSelectedHandler}/>
    <RecipeList recipe={slug} cuisine={filter} />
    </div>

};

export default Recipe;