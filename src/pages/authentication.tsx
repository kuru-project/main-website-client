import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const AuthenticationPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <div>Authentication Page</div>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default AuthenticationPage
