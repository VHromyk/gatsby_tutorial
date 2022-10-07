import React from "react"
import { Navbar } from "../Navbar"
import { Footer } from "../Footer"

// This way to import from basically css file
import "./Layout.css"
import "normalize.css"
import "../../assets/css/main.css"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
