import { Row, Col, Card } from "react-bootstrap-v5";
import {RecipesListData} from '../data/RecipesListData';
import SocialShare from "./SocialShare";

const RecipeList = props => {
    return(
        <Row>
    {RecipesListData.filter(Recipe => (Recipe.recipe.toUpperCase().includes(props.recipe.toUpperCase()) &&
    (Recipe.cuisine.toUpperCase().includes(props.cuisine.toUpperCase()) || (props.cuisine.includes('ALL'
    ))))).map((Recipe, index) => {
      return (
         <Col md={5}> 
        <Card style={{height: "520px"}}>
        <Card.Img src={Recipe.image} style={{  cursor: 'pointer', borderRadius: '25%'}} onClick={() => {
                            window.open(Recipe.url)
                        }}></Card.Img>
        <Card.Body>
            <Card.Title style={{  width: '20rem'}}>Name: {Recipe.label}</Card.Title>
            <Card.Title>Cuisine: {Recipe.cuisine}</Card.Title>
            <Card.Title>Recipe: {Recipe.recipe}</Card.Title>
            <Card.Title><SocialShare url={Recipe.url} /></Card.Title>
        </Card.Body>
     </Card>
     </Col>
      );
    })}
    </Row>
    )};

export default RecipeList;