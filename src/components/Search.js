import { Row, Col, Card } from "react-bootstrap-v5";
import { useState } from "react";
const axios = require('axios');
const Search = (props) => {
    const [recipes, setrecipes] = useState([]);
    const [query, setquery] = useState("");
    let url = 
  `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=5f94ff32&app_key=cc0741a3b6ca99f5d8fcbc5166fa5557`

    async function fetchData() {
       let result = await axios.get(url);
        setrecipes(result.data.hits);
    }
    
    const APISearchHandler = async (e) => {
      console.log(url);
      await fetchData();
      console.log(recipes);
    }

    const QueryChangedHandler = (e) => {
        setquery(e.target.value);
    }
    return(
        <div>
        <div class="input-group mb-3" style={{  width: '20rem', paddingTop: '80px'}}>
            <input type="text" class="form-control" placeholder="API Search" 
            aria-label="API Search" aria-describedby="button-addon2"
            value={query} onChange={QueryChangedHandler} />
            <div class="input-group-append">
                <button class="btn btn-outline-primary" type="button" 
                id="Search"  onClick={APISearchHandler}>Search</button>
            </div>
        </div>
        <div>
        <Row>
            {recipes.map((Recipe, index) => {
                return (
                    <Col md={5}>
                        <Card>
                        <Card.Img src={Recipe.recipe.image} style={{  cursor: 'pointer'}} onClick={() => {
                            window.open(Recipe.recipe.url)
                        }}></Card.Img>
                        <Card.Body>
                            <Card.Title style={{  width: '20rem'}}>Name: {Recipe.recipe.label}</Card.Title>
                            <Card.Title>Cuisine: {Recipe.recipe.cuisineType}</Card.Title>
                            <Card.Title>Recipe: {Recipe.recipe.mealType}</Card.Title>
                        </Card.Body>
                       </Card>
                    </Col>
                )}
            )}
        </Row>
        </div>    
        
        </div>
        
    
    )
};

export default Search;