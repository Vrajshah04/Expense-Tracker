import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/Icons';
import { menuItems } from '../../utils/menuItems';
import { useGlobalContext } from '../../context/globalContext';

function Navigation({ active, setActive }) {
    const { signOut } = useGlobalContext();

    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Vraj</h2>
                    <p>Personal Finances</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
            <div className="bottom-nav">
                <li className="signout" onClick={signOut}>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    );
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
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: 0.2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }

        h2 {
            color: rgba(34, 34, 96, 1);
        }

        p {
            color: rgba(34, 34, 96, 0.6);
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
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding-left: 1rem;
            position: relative;

            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all 0.4s ease-in-out;
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;

        i {
            color: rgba(34, 34, 96, 1) !important;
        }

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    .bottom-nav {
        li.signout {
            cursor: pointer;
            padding: 0.6rem;
            transition: background-color 0.3s ease;

           
        }
    }

    @media (max-width: 1024px) {
        width: 300px;
        padding: 1.5rem 1rem;

        .user-con img {
            width: 70px;
            height: 70px;
        }

        .menu-items li {
            padding-left: 0.5rem;
        }
    }

    @media (max-width: 768px) {
        width: 250px;
        padding: 1rem;

        .user-con img {
            width: 60px;
            height: 60px;
        }

        .menu-items li {
            padding-left: 0.5rem;
            font-size: 1.2rem;
        }

        .bottom-nav li.signout {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 480px) {
        width: 100%;
        height: auto;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

        .user-con {
            display: none; /* Hide user info on very small screens */
        }

        .menu-items {
            flex-direction: row;
            gap: 1rem;

            li {
                font-size: 1rem;
                padding-left: 0;
            }
        }

        .bottom-nav {
            li.signout {
                font-size: 1rem;
                padding: 0.5rem;
            }
        }
    }
`;

export default Navigation;
