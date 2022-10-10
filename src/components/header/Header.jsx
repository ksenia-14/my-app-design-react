import GreenLine from './greenLine/GreenLine'
import MainLine from './mainLine/MainLine'
import MenuLine from './menuLine/MenuLine'

const Header = () => {
    return(
        <header className="app">
            <GreenLine/>
            <MainLine/>
            <MenuLine/>
        </header>
    )
}

export default Header