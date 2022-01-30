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
margin-top: 3vh;
cursor: pointer;
/* 
div{
    display: flex;
    bottom: 0;
    filter: blur(1rem);
    height: 100px;
    width: 100%;
    margin-top: 100%;
    border-radius: 12px;
    background-color: gray;
    //background-color: rgba(0,0,0,0.6);
    
    span{
        color:red;

    }
} */
`;