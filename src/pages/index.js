import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Shopper1 from "../assets/images/shopper-1.png"
import Shopper2 from "../assets/images/shopper-2.png"
import Shopper3 from "../assets/images/shopper-3.png"
import Shopper4 from "../assets/images/shopper-4.png"
import Shopper5 from "../assets/images/shopper-5.png"
import Shopper6 from "../assets/images/shopper-6.png"
import Shopper7 from "../assets/images/shopper-7.png"
import Shopper9 from "../assets/images/shopper-9.png"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="#ATXHolidayHours - Holiday Shopping Hours by Month"
        keywords={[
          `atx`,
          `holidays`,
          `holiday shopping`,
          `shopping hours`,
          `what's open in atx`,
        ]}
      />
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
        </header>
      )}

      <div className="post-feed">
        <section className="page-season-section page-season-fall">
          <div className="page-season">
            <h1 className="page-season-title">Autumn</h1>
            <div className="page-season-month">
              <h1>September</h1>
              <Link className="page-season-link" to="/september/labor-day">
                <h3>Labor Day</h3>
              </Link>
            </div>
            <div className="page-season-month">
              <h1>October</h1>
              <Link className="page-season-link" to="/october/columbus-day">
                <h3>Columbus Day,</h3>
              </Link>
              <Link className="page-season-link" to="/october/halloween">
                <h3>Halloween</h3>
              </Link>
            </div>
            <div className="page-season-month">
              <h1>November</h1>
              <Link className="page-season-link" to="/october/veterans-day">
                <h3>Veteran's Day,</h3>
              </Link>
              <Link className="page-season-link" to="/october/thanksgiving">
                <h3>Thanksgiving</h3>
              </Link>
            </div>

            <div className="page-season-shopper">
              <img src={Shopper1} />
              <img src={Shopper2} />
            </div>
          </div>
        </section>
        <section className="page-season-section page-season-winter">
          <div className="page-season-shopper"></div>
          <div className="page-season">
            <h1 className="page-season-title">Winter</h1>
            <div className="page-season-month">
              <h1>December</h1>
              <Link
                className="page-season-link"
                to="/october/christmas-holidays"
              >
                <h3>Christmas Holidays</h3>
              </Link>
            </div>
            <div className="page-season-month">
              <h1>January</h1>
              <Link className="page-season-link" to="/october/new-years-day">
                <h3>New Year's Day,</h3>
              </Link>
              <Link className="page-season-link" to="/october/mlk-day">
                <h3>Martin Luther King Day</h3>
              </Link>
            </div>
            <div className="page-season-month">
              <h1>February</h1>
              <Link className="page-season-link" to="/october/presidents-day">
                <h3>President's Day</h3>
              </Link>
            </div>
            <div className="page-season-shopper">
              <img src={Shopper3} />
              <img src={Shopper9} />
            </div>
          </div>
        </section>
        <section className="page-season-section page-season-spring">
          <div className="page-season">
            <h1 className="page-season-title">Spring</h1>
            <div className="page-season-month">
              <h1>March</h1>
              <Link
                className="page-season-link"
                to="/october/texas-independence-day"
              >
                <h3>Texas Independence Day</h3>
              </Link>
            </div>
            <div className="page-season-month">
              <h1>April</h1>
              <Link className="page-season-link" to="/october/easter">
                <h3>Easter Sunday</h3>
              </Link>
            </div>
            <div className="page-season-month">
              <h1>May</h1>
              <Link className="page-season-link" to="/october/memorial">
                <h3>Memorial Day</h3>
              </Link>
            </div>

            <div className="page-season-shopper">
              <img src={Shopper5} />
              <img src={Shopper6} />
            </div>
          </div>
        </section>
        <section className="page-season-section page-season-summer">
          <div className="page-season">
            <h1 className="page-season-title">Summer</h1>
            <div className="page-season-month">
              <h1>June</h1>
              <h3 className="no-closures">(No holiday closures)</h3>
            </div>
            <div className="page-season-month">
              <h1>July</h1>
              <Link className="page-season-link" to="/october/independence-day">
                <h3>Independence Day</h3>
              </Link>
            </div>
            <div className="page-season-month">
              <h1>August</h1>
              <h3 className="no-closures">(No holiday closures)</h3>
            </div>

            <div className="page-season-shopper">
              <img src={Shopper4} />
              <img src={Shopper7} />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
