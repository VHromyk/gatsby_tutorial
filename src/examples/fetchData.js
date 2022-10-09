import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime
        siteMetadata {
          description
          simpleData
          title
          author
          complexData {
            age
            name
          }
          person {
            age
            name
          }
        }
      }
    }
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexData.map((item, i) => (
          <p key={i}>
            {item.name} : {item.age}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ComponentName
