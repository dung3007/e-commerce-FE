import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import { styled } from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column'})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`

const Description = styled.p`
    margin: 20px 0px;
`

const SocialCotainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#eee'})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 40%;
`

const Footer = (props) => {
    return (
        <Container>
            <Left>
                <Logo>E-COMMERCE</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                </Description>
                <SocialCotainer>
                    <SocialIcon color='3B5999' >
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F' >
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE' >
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='E60023' >
                        <Pinterest />
                    </SocialIcon>
                </SocialCotainer>
            </Left>
            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: '10px'}} /> 123 Thanh Xuan, Ha Noi</ContactItem>
                <ContactItem><Phone style={{marginRight: '10px'}} /> +84 676 757 765</ContactItem>
                <ContactItem><MailOutline style={{marginRight: '10px'}} /> 123@gmail.com</ContactItem>
                <Payment src='https://tse2.mm.bing.net/th?id=OIP.GLfU6tGgbDoy4tiVfsOY5gHaBB&pid=Api&P=0&h=180' />
            </Right>
        </Container>
    );
};

export default Footer;