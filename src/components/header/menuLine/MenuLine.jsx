import style from './menuLine.module.css'

const MenuLine = () => {
    return (
        <div className={style.menuLine}>
            <div className={style['all-collections']}>
                <img src="./img/header/menu.png" alt="" />
                <a href=''>ВСЕ КАТЕГОРИИ</a>
            </div>
            
            <a className={style['menu-item']} href=''>МАГАЗИН</a>
            <a className={style['menu-item']} href=''>БЛОГ</a>
            <a className={style['menu-item']} href=''>О НАС</a>
            <a className={style['menu-item']} href=''>КОНТАКТЫ</a>

        </div>
    )
}

export default MenuLine