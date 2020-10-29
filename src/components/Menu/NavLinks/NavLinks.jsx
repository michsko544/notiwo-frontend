import React, { useEffect, useState } from "react"
import { ThemeContext } from "contexts"
import { Link, SpecialLink } from "../Link"
import { NavLinksStyled } from "./NavLinks.style"
import Store from "store"
import { getCategories } from "api"

const NavLinks = ({ handleMenuClose }) => {
  const { color, mode } = React.useContext(ThemeContext)
  const store = Store.useStore()
  const [categoriesDropdown, setCategoriesDropdown] = useState(store.get("categoryOptions"))

  const convertToNoticesDropdown = (data) => {
    return data.map((elem) => ({ name: elem.name, path: `/notices/${elem.nameInUrl}`, id: elem.id }))
  }

  useEffect(() => {
    const asyncCategories = async () => {
      try {
        const response = await getCategories()
        if (response.ok) {
          const categories = response.data.map((category) => ({ ...category }))
          store.set("categoryOptions")(categories)
        }
      } catch (error) {}
    }

    if (store.get("categoryOptions").length === 0) asyncCategories()
  }, []) // eslint-disable-line

  useEffect(() => {
    const covertedCategories = convertToNoticesDropdown(store.get("categoryOptions"))
    setCategoriesDropdown(covertedCategories)
  }, [store])

  const displayNavlinks = () => {
    if (store.get("authToken")) {
      return displayAuthenticatedNavlinks()
    } else {
      return (
        <>
          <SpecialLink firstcolor={color.first} secondcolor={color.second} to="/register" onClick={handleMenuClose}>
            Zarejestruj się
          </SpecialLink>
          <Link color={mode} to="/login" handleMenuClose={handleMenuClose}>
            Zaloguj się
          </Link>
        </>
      )
    }
  }

  const displayAuthenticatedNavlinks = () => {
    if (!store.get("isFreelancer")) {
      return (
        <>
          <Link color={mode} to="/your-orders" handleMenuClose={handleMenuClose}>
            Twoje zamówienia
          </Link>
          <Link color={mode} to="/settings" handleMenuClose={handleMenuClose}>
            Ustawienia
          </Link>
          <SpecialLink firstcolor={color.first} secondcolor={color.second} to="/become-freelancer" onClick={handleMenuClose}>
            Zostań freelancerem!
          </SpecialLink>
        </>
      )
    } else {
      return (
        <>
          <Link color={mode} to="/your-orders" handleMenuClose={handleMenuClose}>
            Twoje zamówienia
          </Link>
          <Link color={mode} to="/your-commisions" handleMenuClose={handleMenuClose}>
            Twoje zlecenia
          </Link>
          <Link color={mode} to="/your-notices" handleMenuClose={handleMenuClose}>
            Twoje ogłoszenia
          </Link>
          <Link color={mode} to="/settings" handleMenuClose={handleMenuClose}>
            Ustawienia
          </Link>
          <SpecialLink firstcolor={color.first} secondcolor={color.second} to="/add-notice" onClick={handleMenuClose}>
            Dodaj ogłoszenie
          </SpecialLink>
        </>
      )
    }
  }

  return (
    <NavLinksStyled>
      <Link dropdown={true} color={mode} links={categoriesDropdown} handleMenuClose={handleMenuClose}>
        Ogłoszenia
      </Link>
      {displayNavlinks()}
    </NavLinksStyled>
  )
}

export default NavLinks
