import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import STAR from '../images/star.png'

const Seo = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <title><link rel="icon" href={STAR} />{data.site.siteMetadata.title}</title>
  )
}

export default Seo