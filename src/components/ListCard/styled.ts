import { Link } from "react-router-dom";
import styled from "styled-components";
interface IMyImage {
    img: string
}

export const Mainwrapper = styled.div<IMyImage>`
background-image: url(${props => props.img});
height: 400px;
width: 270px;
background-size: 100%;
background-repeat: no-repeat;
background-position: center;
display: flex;
border: 4px solid gray;
border-radius: 24px;
margin-top: 1vh;
z-index: 1;
margin-bottom: 3vh;

cursor: pointer;

`;

export const MyLink = styled(Link)`
    text-decoration:none;
    color:${props=>props.theme.colors.secundary};
    :hover{
        transform: scale(1.1)
    }
`;

export const Descriscao = styled.div`
    background-color: ${props => props.theme.colors.backgoround};
    border-radius: 23px;
    height: 98%;
    flex:1;
    display: flex;
    flex-direction: column;
    margin: 4px;
    padding: 0 5px;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.5s linear;
    -moz-transition: opacity 0.5s linear;
    -o-transition: opacity 0.5s linear;
    transition: opacity 0.5s linear;
    text-align: left;

    span{
        margin-top: 20px;
    };
    section{
        display: block; 
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    };
    
    `  
    ;

export const Item = styled.div`
    position: relative;
    bottom: 0;
    height: 100%;
    width: 100%;
    &:hover ${Descriscao}{
       visibility: visible;
        opacity: 0.9;        
    }
   p{
       position: absolute;
       bottom: 8%;
       right: 2%;
       color:red
   }
   `;

