import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  query {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 200, height: 200)
        }
      }
    }
  }
`

const Gallery = () => {
  // use useStaticQuery when we use something from the system folder throught the gatsby-config.js
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((item, i) => {
        const { name } = item
        const pathToImage = getImage(item)
        return (
          <article key={i} className="item">
            <GatsbyImage
              alt={name}
              image={pathToImage}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`

export default Gallery
