import React from 'react';
import logo from "../../assets/logo.png";
import s from "./Header.module.scss";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.left_logo}>
            <img className={s.logo} src={logo} alt="logo" />
            <ul>
                <li>Кто мы?</li>
                <li>Продукция</li>
                <li>Поставщики</li>
                <li>Отзывы</li>
                <li>О нас</li>
            </ul>
            </div>

            <div className={s.btn_sign}>
                <button>Вход и регистрация</button>
            </div>
        </div>
    );
};
 
export default Header;