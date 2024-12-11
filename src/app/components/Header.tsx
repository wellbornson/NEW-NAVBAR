import Link from "next/link"
import { Component } from "react"
const Header = () => {
  return (
<header className="flex bg-gradient-to-r from-blue-500 to-red-500 justify-between w-full mx-auto py-5 px-10">
        <h1 className="font-bold">
        LOGO!!!
        </h1>
        <ul className="flex space-x-8">
        <li> <Link href={"/"}> Home </Link></li>
        <li> <Link href={"/contact-us"}> Contact Us </Link></li>
        </ul>

    </header>
  )
}

export default Header