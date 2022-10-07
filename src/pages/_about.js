import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"

function _about() {
  return (
    <Layout>
      <Wrapper>
        <h1>Hello world</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          fuga illo ipsa nulla quasi, quod! Ducimus, eaque esse est impedit
          inventore iusto laborum modi nisi recusandae saepe, sed sint
          voluptate.
        </p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;

  h1 {
    color: burlywood;
  }

  .text {
    text-transform: uppercase;
  }
`

export default _about
