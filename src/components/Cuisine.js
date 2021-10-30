import { useParams } from "react-router";
import { useState } from "react";
import FilterButtonsList from "./FilterButtonsList";
import CuisineList from "./CuisineList";
const Cuisine = props => {
    const {slug} = useParams();
    const [filter, setFilter] = useState('ALL');

    const filterSelectedHandler = (e) => {
        console.log(e.target.value);
        setFilter(e.target.value.toUpperCase());
    }

    return <div>
    <FilterButtonsList type="Recipe" onFilterSelected={filterSelectedHandler}/>
    <CuisineList cuisine={slug} recipe={filter} />
    </div>

};

export default Cuisine;