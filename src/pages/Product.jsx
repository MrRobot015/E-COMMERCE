import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"

const Container = styled.div``
const Wrapper = styled.div``
const ImgContainer = styled.div``
const Image = styled.img``
const InfoContainer = styled.div``
const Title = styled.h3``
const Desc = styled.p``

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>

            </Wrapper>
            <NewsLetter/>
            <Footer/>
        </Container>
    )
}

export default Product
