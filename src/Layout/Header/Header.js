
import logo  from '../../assets/logo.PNG'
import React, {useContext, useRef} from 'react';
import {MyContext} from "../../Context";
import {Link, NavLink} from "react-router-dom";
import {MdPhoneInTalk} from 'react-icons/md'
import {SlLogin} from 'react-icons/sl'
import basket from '../../assets/basket.svg'
import vhod from "../../assets/vhod.svg"

export default function Header() {


    const {user, removeUser} = useContext(MyContext)


  return (
   
    
        <header className="header">
            <div className="container">
                <nav className="header__nav">

                    <a href= "#" >
                        <h1 className="header__title">
                            <img src={logo} alt=""/>
                        </h1>
                    </a>


                    <div className="header__menu">
                        {/* у навлинка есть active проверка url */}
                        <NavLink to="/"  className="header__link">
                            Главная
                        </NavLink>

                        <NavLink to="/Shop"  className="header__link">
                            Магазин
                            </NavLink>

                        <NavLink to="/Product"  className="header__link">
                            О продукте
                            </NavLink>

                        <NavLink to="/Contact"  className="header__link">
                            Контакты
                            </NavLink>
                        <NavLink to="/Blog"  className="header__link">
                            Блог
                            </NavLink>
                    </div>


                    <div className="header__right">


                       

                                {/* <a href="#" className="header__user"
                                      
                                >
                                    Выйти
                                </a>
                             */}

                                
                            
                             {/* КОРЗИНА */}
                            <Link to="/Basket"> 
                                <div className="header__user">
                                <img src={basket} className="header__basket"/> 
                            </div>
                            </Link>

                            {
                                // если длина логина больше 0,true - что за хуйня почему user ругается на пустую строку своего начального стейта и почему это работает именно так???
                                user.login.length?<Link className="header__out" to="/" onClick={() => removeUser()}>Выйти</Link>:<Link to="/Login" className="header__user">  <img src={vhod} className="header__basket"/> </Link>
                                                                                               
                             }

                    </div>
                </nav>

            </div>
        </header>
        
    );
    

}
