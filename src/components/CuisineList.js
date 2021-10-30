import { Row, Col, Card } from "react-bootstrap-v5";
import {RecipesListData} from '../data/RecipesListData';


const CuisineList = props => {
    return(
        <Row>
    {RecipesListData.filter(Recipe => (Recipe.cuisine.toUpperCase().includes(props.cuisine.toUpperCase()) &&
    (Recipe.recipe.toUpperCase().includes(props.recipe.toUpperCase()) || (props.recipe.includes('ALL'
    ))))).map((Recipe, index) => {
      return (
         <Col md={5}> 
        <Card>
        <Card.Img src={Recipe.image} style={{  cursor: 'pointer'}} onClick={() => {
                            window.open(Recipe.url)
                        }}></Card.Img>
        <Card.Body>
            <Card.Title style={{  width: '20rem'}}>Name: {Recipe.label}</Card.Title>
            <Card.Title>Cuisine: {Recipe.cuisine}</Card.Title>
            <Card.Title>Recipe: {Recipe.recipe}</Card.Title>
        </Card.Body>
     </Card>
     </Col>
      );
    })}
    </Row>
    )};

export default CuisineList;