import styled from "styled-components";
import { ArrowLeftOutlinedIcon, ArrowRightOutlinedIcon } from '@mui/icons-material';

const Container = styled.div`
  width: 100px;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${props=> props.direcation === "left" && "10px"};
    right: ${props=> props.direcation === "right" && "10px"};;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    
`

const Slider = () => {
  return (
    <Container>
      <Arrow direcation="left">
        <ArrowLeftOutlinedIcon/>
      </Arrow>
      <Arrow direcation="right">
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
