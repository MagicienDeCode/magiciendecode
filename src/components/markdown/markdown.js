import './markdown.less'
import { graphql } from 'gatsby'
import React from 'react'
import BackWard from './backward'
import NavigationBar from './navigation-bar'

const MarkdownPageTemplate = ({ data }) => {
  console.log('===================================')
  const { markdownRemark } = data
  console.log(markdownRemark)
  const { frontmatter, html } = markdownRemark
  const { path } = frontmatter

  return (
    <div>
      <div className="md-div">
        <BackWard path={path} />
        <NavigationBar paths={path.substring(1)} />
        <div className="md-main" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
      }
    }
  }
`
export default MarkdownPageTemplate
