import { styled } from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
    
`;

const Title= styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`
    
`;
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Flowers</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Flowers:
                    <Select>
                        <Option disabled selected>Strain Type</Option>
                        <Option>Sativa</Option>
                        <Option>Sativa Dominant</Option>
                        <Option>Indica</Option>
                        <Option>Indica Dominant</Option>
                        <Option>Hybrid</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Quality</Option>
                        <Option>Top-Grade</Option>
                        <Option>Pop-Corn</Option>
                    </Select>
                </FilterText>
            </Filter>
            <Filter>
            <FilterText>Sort Flowers:
            <Select>
                        
                        <Option>Newest</Option>
                        <Option>Best Seller</Option>
                    </Select>
            </FilterText>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList