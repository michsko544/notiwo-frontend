import React from 'react'
import { ThemeContext } from "../../App"
import Link, { SpecialLink } from "../Link"
import { NavLinksStyled } from "./NavLinks.style"

const NavLinks = () => {
    const { color, mode } = React.useContext(ThemeContext)

    return (
        <NavLinksStyled>
            <Link dropdown={true} color={mode}>
                Ogłoszenia
                    </Link>
            <SpecialLink firstcolor={color.first} secondcolor={color.second}>
                Zarejestruj się
                    </SpecialLink>
            <Link dropdown={false} color={mode}>
                Zaloguj się
                    </Link>
        </NavLinksStyled>
    )
}

export default NavLinks
