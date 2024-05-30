import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { logoname } from "@/assets/data/dummydata"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              <TitleLogo title='Qualité' caption='ISS' className='logomin' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
            Accueil 
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              Control
            </Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Formation
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Sérvices
            </Link>
           
            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
             référence
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <button className='button-primary'>consultation</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
