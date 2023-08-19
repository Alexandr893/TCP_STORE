import React, {useContext, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {MyContext} from "../../Context";
import BasketCard from "./CardBasket";
import axios from "axios";
import "./Basket.scss"


const Basket = () => {

    


    const {cart, deleteCart, setCart, ticket, setTicket} = useContext(MyContext);

    const useTicket = (e) => {
        e.preventDefault();
        axios(`http://localhost:8080/tickets?title=${e.target[0].value}`)
            .then(({data}) => {
                if (data.length) {
                    setTicket(data)
                } else {
                    setTicket('Такого купона не существует!!!')
                }
            })

    };

    return (
        <section className='basket'>
            <div className="container">
                <h2 className="title" > Корзина </h2>
                <div className="basket__crumbs">
                    <Link className="basket__crumbs-home" to='/'>Главная</Link>
                    -
                    <NavLink className="basket__crumbs-cart" to='/basket'>Корзина</NavLink>
                </div>
                <div className="basket__info">
                    <h3 className="basket__info-title">Тайтл</h3>
                    <ul className="basket__info-list">
                        
                        <li className="basket__info-item basket__info-item2">текст</li>
                        <li className="basket__info-item basket__info-item2">текст</li>
                        <li className="basket__info-item basket__info-item2">текст</li>
                    </ul>
                </div>
                         <> 
                {
                    
                    cart.map((item, idx) => (
                        <React.Fragment key={idx}>
                            <BasketCard cart={cart} item={item} />
                        </React.Fragment>
                        
                    ))
                    

                }
                    </>
                {
                    cart ?
                        <>
                            <div className='basket__ticket'>
                                <form className='basket__ticket-left' onSubmit={useTicket}>
                                    <input className='basket__ticket-input' placeholder={"билет"} type="text"/>
                                    <button type='submit' className="basket__ticket-btn">Применить купон</button>

                                    {
                                        Array.isArray(ticket) && ticket.length ? <p className='basket__ticket-message'>
                                            По данному промокоду вы получили скидку в размере {ticket[0].discount} %
                                        </p> : ticket.length ? <p className='basket__ticket-message'>{ticket}</p> : ''
                                    }

                                </form>
                                <button className="basket__ticket-btn" onClick={() => setCart([])}>Обновить</button>
                            </div>
                            <div className='basket__pay'>
                                <div className='basket__pay-header'>
                                    <p className='basket__pay-info'>субинфа:</p>
                                    <p className='basket__pay-info'>&#8381;{cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)}</p></div>
                                <div className='basket__pay-btns'>
                                    <button className='basket__pay-btn1'>Сумма: <span>$ {Array.isArray(ticket) && ticket.length
                                        ? cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) - cart.reduce((acc, rec) => acc + rec.count * rec.price, 0) / 100 * ticket[0].discount
                                        : cart.reduce((acc, rec) => acc + rec.count * rec.price, 0)
                                    }  </span></button>
                                    <Link to='/order'>
                                        <button className='basket__pay-btn2'>Оформить заказ</button>
                                    </Link>
                                </div>
                            </div>
                        </> : ''
                }
            </div>

        </section>
    );
};

export default Basket;