import styled from "styled-components";
import { BsMoon } from "react-icons/bs";

export const Slider = styled.span`
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
-webkit-transition: .4s;
transition: .4s;
border-radius: 34px;
:before {
border-radius: 50%;
}
:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}
`;

export const Switch = styled.label`
  right: 0;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
       input { 
            opacity: 0;
            width: 0;
            height: 0;
            :checked +${Slider}{
                background-color: black;
                :focus +${Slider}{
                     box-shadow: 0 0 1px gray;
                }
            }
            :checked  +${Slider}:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
            }
        }
`;

export const Moon = styled(BsMoon)`
    margin-left: 15px;
`;

export const Mainwrapper = styled.div`
    flex-direction:row;
    display:flex;
    margin-left: auto;
    @media (max-width:786px) {
        margin-top: 10px;
    }
`;