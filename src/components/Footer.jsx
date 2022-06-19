import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  background: #f4f4f4;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
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
  margin-right: 10px;
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
  margin-bottom: 5px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;
`

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`
const Payment = styled.img`
  width: 70%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LOGO.</Logo>
        <Desc>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid
          praesentium eligendi minima nesciunt explicabo tempore nam! Quod
          voluptatem."
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Acessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Lorem ipsum</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {' '}
          <Room style={{ marginRight: '10px' }} /> 622 any Adress, California
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} /> +1 234 567 890
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> contac@logo.dev
        </ContactItem>
        <Payment
          style={{ marginLeft: '-15px' }}
          src="https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg"
        />
      </Right>
    </Container>
  )
}

export default Footer
