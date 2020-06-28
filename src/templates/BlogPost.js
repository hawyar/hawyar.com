import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout/Layout"
const BlogPostTemplate = ({ data, pageContext }) => {
  const { title, date } = data.mdx.frontmatter
  const { body } = data.mdx

  // pagination ** use gatsby link for internal pages **
  // const { previous, next } = pageContext

  return (
    <div>
      <Layout>
        <h1>{title}</h1>
        <p> {date}</p>
        <MDXRenderer>{body}</MDXRenderer>

        {/* pagination implement soon */}
        {/* <div style={{ bg: "purple" }}>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slig} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>{" "}
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div> */}
      </Layout>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
