import { styled } from "styled-components"
import { flowerProducts } from "../data";
import Product from "./Product";


const Container =styled.div`
    
`;

const Products = () => {
  return (
    <Container>
        {flowerProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products