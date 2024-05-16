import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'

function Navigation({active, setActive}) {
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Dreamy</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
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
    background: rgba(26, 26, 26, 0.78); /* Change background color */
    border: 3px solid var(--primary-color); /* Change border color */
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: var(--color-grey); /* Change background color */
            border: 2px solid var(--primary-color); /* Change border color */
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2 {
            color: var(--color-grey); /* Change text color */
        }
        p {
            color: rgba(211, 211, 211, 0.6); /* Adjust text color */
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(211, 211, 211, 0.6); /* Adjust text color */
            padding-left: 1rem;
            position: relative;
            i {
                color: rgba(211, 211, 211, 0.6); /* Adjust icon color */
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }
    }

    .active {
        color: var(--color-grey) !important; /* Adjust active text color */
        i {
            color: var(--color-grey) !important; /* Adjust active icon color */
        }
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: var(--color-accent); /* Change background color */
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation