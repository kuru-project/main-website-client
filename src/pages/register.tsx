import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const RegisterPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <div>
          <h3>Register</h3>
          <p>...</p>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default RegisterPage
