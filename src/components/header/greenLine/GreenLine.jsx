import style from './greenLine.module.css'

const GreenLine = () => {
    return(
        <div className={style.greenLine}>
            <p className={style.welcome}>Welcome to our online shop</p>
            <nav>
                <a className={style['nav-item']} href=''>Войти</a>
                <text> или </text>
                <a className={style['nav-item']} href=''>зарегистрироваться</a>
            </nav>
        </div>
    )
}

export default GreenLine