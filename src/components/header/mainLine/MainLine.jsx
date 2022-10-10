import style from './mainLine.module.css'

const MainLine = () => {
    return (
        <div className={style.mainLine}>
            <div className={style.logo}>
                <img src="./img/header/logo.png" alt="logo" />
                <h1>Furniking</h1>
            </div>

            <div className={style["search-block"]}>
                <div className={style["search-block-input"]}>
                    <input placeholder="Поиск по товарам" />
                </div>
                <div className={style["search-icon"]}>
                    <img src="./img/header/search.png" alt="search" />
                </div>
            </div>

            <div className={style["icons"]}>
                <img src="./img/header/bell.png" alt="bell" />
                <img src="./img/header/cart.png" alt="cart" />
                <img src="./img/header/user.png" alt="user" />
            </div>

        </div>
    )
}

export default MainLine