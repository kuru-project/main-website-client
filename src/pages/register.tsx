import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const TestClick = () => console.log(`test`)

const RegisterPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <div>
          <h3>Register</h3>
          <p>...</p>
          <button type="button" onClick={TestClick}>
            Test
          </button>
        </div>
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default RegisterPage
