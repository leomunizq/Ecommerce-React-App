import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'

const Container = styled.div`
  height: 60px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Languages = styled.div`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
`
const Right = styled.div`
  flex: 1;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Languages>EN</Languages>
          <SearchContainer>
            input
            <Search />
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
