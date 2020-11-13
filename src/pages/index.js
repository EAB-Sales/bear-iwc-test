import React from "react"
import { Link, graphql } from "gatsby"
import IWCLocation from "../components/iwc-location"
// import IWC from "../components/iwc"

// import Layout from "../components/Layout"
import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  const institution = data.yv.institutions

  return (
    <Layout title={institution.name}>
      <Link to="/one-page">One on a Page</Link> |{" "}
      <Link to="/two-page">Two on a Page</Link> |{" "}
      <Link to="/">Three on a Page</Link>
      <IWCLocation
        containerHeight="351px"
        title="See Resident Life"
        institution="121317"
        dataType="inline-embed"
        location="143201"
      />
      <IWCLocation
        containerHeight="351px"
        title="Dining Hall"
        institution="121317"
        dataType="inline-embed"
        location="143215"
      />
      <IWCLocation
        containerHeight="373px"
        title="Rec Center"
        institution="121317"
        dataType="inline-embed"
        location="143216"
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query($instID: String) {
    yv {
      institutions(instID: $instID) {
        locations {
          loc_id
          name
          cover_photo {
            thumb
          }
        }
        inst_id
        name
      }
    }
  }
`
