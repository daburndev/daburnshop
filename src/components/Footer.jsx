import { Facebook, Instagram } from "@mui/icons-material";
import { styled } from "styled-components"


const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;

`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color:#${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;



const Center = styled.div`
    flex:1;
    padding: 20px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
    
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List =styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Line = styled.img`
    height: 25px;
    width: 25px;
`

const Map = styled.iframe`
    margin-bottom: 20px;
    display: flex;
    width: 600px;
    height: 450px;
    border: 0;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Four Twenty, going beyond a cannabis brand</Logo>
            <Desc>
            Our main ambition is to share our expertise on premium-quality cannabis products and to create an unforgettable experience by seamlessly fitting them into your lifestyle. We are committed to offering a diverse range of products that cater to various needs and preferences and delivering exceptional customer service. By doing so, we hope to inspire a movement of the cannabis community and appreciate the use of cannabis benefits.

Be a part of our movement.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">    
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="06C755">
                    <Line src="../assets/images/LINE_Brand_icon.png"/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Flowers</ListItem>
                <ListItem>CBD</ListItem>
                <ListItem>Merchandise & Accessories</ListItem>
                <ListItem>Apparel</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6364633907715!2d100.55973687511872!3d13.740445997556296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f32e5ace581%3A0x4120f96b6b1c77ad!2sFour%20Twenty%20Dispensary%20-%20High%20Garden%20Asoke!5e0!3m2!1sen!2sth!4v1691866776147!5m2!1sen!2sth" />
        </Right>

    </Container>
  )
}

export default Footer