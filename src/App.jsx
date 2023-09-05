import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { styled} from 'styled-components';
import { mobile } from './responsive';
import { Routes, Route, Link } from 'react-router-dom';
import { hover } from "@testing-library/user-event/dist/hover";
import Announcement from "./components/Announcement";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMtk8ps8ObcFXNzu0y25iFJohmLeqA_wo",
  authDomain: "fourtwenty-shop.firebaseapp.com",
  projectId: "fourtwenty-shop",
  storageBucket: "fourtwenty-shop.appspot.com",
  messagingSenderId: "84405612672",
  appId: "1:84405612672:web:8f391bbdcbbc04279fb665",
  measurementId: "G-YNMQ7BM77Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0"})}
`;

const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;  
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;;
`;

const Input = styled.input`
    border:none;  
    ${mobile({width:"50px"})}
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"17px"})}
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`;

const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent:"center"})}
`;

const MenuItem = styled.div`
  text-decoration:none;
  font-size: 14px;
  cursor: pointer;  
  margin-left: 25px;
  ${mobile({fontSize:"12px", marginLeft:"10px"})}
`;

const App = () => {
  const menu ={
    textDecoration: 'none',
    marginLeft: '25px',
    fontSize:'14px',
    cursor:'pointer',
    color:'black'
  };

  const logo = {
    textDecoration:'none',
    color:'black'
  };
  return (
    <Container>
        <Announcement/>
        <Wrapper>
        <Left><Language>EN</Language>
        <SearchContainer>
            <Input placeholder="Search"/> 
            <Search style={{color:"gray", fontSize:16}}/>

        </SearchContainer>
        </Left>
        <Center>
            <Logo>
               <Link to="/" style={logo}> Four Twenty</Link>
            </Logo>
        </Center>
        <Right>
            <Link to="/register" style={menu}>Register</Link>
            <Link to="/login"  style={menu}> SIGN IN</Link>
            
            <MenuItem>
            <Badge badgeContent={4} color="primary">
               <Link to="/cart" style={{color:'black'}}> <ShoppingCartOutlined/></Link>
            </Badge>
            </MenuItem>
            
        </Right>
        </Wrapper>
        <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </Container>
    

  )
}

export default App

// const App = () => {
//   return <Home/>
// }

// export default App;