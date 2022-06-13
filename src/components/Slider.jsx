import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100hv;
  display: flex;
`
const ArrowLeftOutlined = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
`

const Slider = () => {
  return (
    <Container>
      <Arrow>
        <ArrowLeftOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
