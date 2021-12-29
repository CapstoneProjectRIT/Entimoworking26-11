/* eslint-disable no-tabs */
import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #FFFFFF;
position: absolute;
width: 800px;
height: 48px;
left: 256px;
top: 72px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const Navlink = styled.div`
color: #808080;
display: flex;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 18.9296px;
line-height: 28px;
text-align: center;

align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;


cursor: pointer;
&.active {
	color: #000000;
}
&:hover {
	
	border-bottom: 3px solid black;
}
&:active {
	
		border-bottom: 3px solid black;
}

`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
	display: none;
	
}
`;


