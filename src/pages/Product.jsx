import { styled } from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px", flexDirection:"column"})}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height:90vh;
  object-fit:cover;
  ${mobile({height:"40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin:20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  margin:30px 0px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const Filter = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterTitle =styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterQty = styled.option`
  width: 20px;
  height: 20px;
  
`;

const AddContainer =styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor:pointer;
    font-weight: 500;

    &:hover{
      background-color: #f8f4f4;
    }
`;


const Product = () => {
  return (
  <Container>
    <Navbar/>
    <Announcement/>
    <Wrapper>
      <ImgContainer>
          <Image src="../assets/images/theruntz.webp"/>
      </ImgContainer>
      <InfoContainer>
        <Title> The Runtz</Title>
        <Desc> The Runtz is a cannabis strain known for its sweet and fruity aroma, with high levels of the terpenes Caryophyllene. This hybrid strain is a cross between the strains Zkittlez and Gelato, and is known for its balanced and euphoric effects. The Runtz has quickly become one of the most sought-after strains in the market due to its high THC content and unique terpene profile.</Desc>
        <Price> ฿ 800</Price>
        <FilterContainer>
        <FilterTitle>Gram</FilterTitle> 
          <Filter>      
            <FilterQty>1</FilterQty>
            <FilterQty>3.5</FilterQty>
            <FilterQty>7</FilterQty>
            <FilterQty>28</FilterQty>
            </Filter>
            
        </FilterContainer>
        <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
        </AddContainer>
      </InfoContainer>
    </Wrapper>
    <Newsletter/>
    <Footer/>
  </Container>
  )
}

export default Product