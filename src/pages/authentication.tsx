import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const AuthenticationPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h2>Authentication Page</h2>
        <div>
          <h3>Login</h3>
          <p>...</p>
        </div>
        <div>
          <h3>Register</h3>
          <p>...</p>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default AuthenticationPage
