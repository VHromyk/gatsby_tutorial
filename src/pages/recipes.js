import React from "react"
import Layout from "../components/layout/Layout"
import AllRecipes from "../components/AllRecipes";

function Recipes() {
  return (
    <Layout>
      <main className="page">
      <AllRecipes />

      </main>
    </Layout>
  )
}

export default Recipes
