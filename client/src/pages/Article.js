import React from "react";
import Wrapper from "../components/Wrapper";
import SideScroll from "../components/SideScroll";
import RankHolder from "../components/RankHolder"

function Article() {
    return ( 
    
        <Wrapper>
            <SideScroll>
            <RankHolder
        text="#1"
        > 
        </RankHolder>
        <RankHolder
        text="#2"
        > 
        </RankHolder>
        <RankHolder
        text="#3"
        > 
        </RankHolder>
            </SideScroll>
        </Wrapper>
    
        );
}

export default Article;