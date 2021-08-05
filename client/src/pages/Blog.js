import Wrapper from "../components/Wrapper";
import Title from "../components/Title"
import Scroll from "../components/Scroll"
import Card from "../components/Card"
import React from "react";
function Blog() {
    return (
        <Wrapper>
        <Title>Hello, welcome to Project Foresight.
            <br></br>
            Select an option from below to get started.
        </Title>
        <Scroll>
        <Card
        name={"Food"}
        image="assets/images/hamburger-icon.png"
        > 
        </Card>
        <Card
        name={"Household"}
        image="assets/images/toothpaste-icon.png"
        > 
        </Card>
        <Card
        name={"Food"}
        image="assets/images/hamburger-icon.png"
        > 
        </Card>
        <Card
        name={"Food"}
        image="assets/images/hamburger-icon.png"
        > 
        </Card>
        </Scroll>
        </Wrapper>
    );
}

export default Blog;