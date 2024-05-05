import React from "react"
import styled from "styled-components"
import avatar from '../../img/avatar.png'
import { menuItems } from "../../utils/menuItems"
import { signout } from '../../utils/Icons'
function Navigation(){
    return(
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt=""/>
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className = "menu-items">
                {menuItems.map((item)=>{
                    return <li
                        key = {item.id}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
padding: 2rem 1.5rem;
width: 374px;
height: 100%;
background: rgba(252, 246, 249, 0.78);
border: 3px solid #FFFFFF;
backdrop-filter: blur(4.5px);
border-radius: 32px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 2rem;
.user-con{
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        background: #fcf6f9;
        border: 2px solid #FFFFFF;
        padding: .2rem;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2{
        color: rgba(34, 34, 96, 1);
    }
    p{
        color: rgba(34, 34, 96, .6);
    }

`;

export default Navigation