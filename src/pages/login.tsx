import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const LoginPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <div>
          <h3>Login</h3>
          <p>...</p>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default LoginPage
