import styled from "styled-components";

export const HomeContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 99px;
position: absolute;
width: 1288px;
height: 459px;
left: 100px;
top: 216px;

.text {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 48px;
width: 713px;
height: 400.08px;

}
.pinky{
/* font-style: normal; */
font-weight: 400;
font-size: 45px;
line-height: 140%;
letter-spacing: -0.02em;
color: #434343;
/* margin-bottom:48px */
}

span {
color: #A02279;
}

#words {
font-style: normal;
font-weight: 400;
font-size: 23px;
line-height: 35px;
color: #434343;
height: 105px;

}
.box2 {
display: flex;
flex-direction: row;
align-items: center;
height: 54.08px;
}
#inputbox {
box-sizing: border-box;
position: absolute;
left: 0%;
right: 45.3%;
top: 86.6%;
bottom: 0%;
background: rgba(247, 247, 247, 0.1);
border: 1px solid #A3A3A3;
border-radius: 8px 0px 0px 8px;

}
#inputbox:placeholder {
font-weight: 400;
line-height: 130%;
font-size: 14px;
left: 3.85%;
right: 57.95%;
top: 35.04%;
bottom: 37.18%;
color: #B8B8B8;

}


#search {
position: absolute;
left: 54.52%;
right: 13.22%;
top: 86.58%;
bottom: 0.02%;
background: linear-gradient(90deg, #A02279 11.45%, #A02279 11.46%);
border-radius: 0px 8px 8px 0px;
}

.pics {
width: 476px;
height: 459px;
margin-left: 99px;

}
`