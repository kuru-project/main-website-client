import * as React from 'react'
import { Link } from 'gatsby'
import Axios from 'axios'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface State {
  email?: string
  password?: string
}

class LoginPage extends React.Component<State> {
  constructor(props: any) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: any) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event: any) {
    const { email, password }: State = this.state
    Axios.post(`${process.env.GATSBY_SERVER_URL}/auth/sign_in`, {
      email,
      password
    })
      .then(function(response: any) {
        sessionStorage.token = response.headers[`access-token`]
        sessionStorage.user = JSON.stringify(response.data.data)
      })
      .catch(function(error: any) {
        console.log(error)
      })
    event.preventDefault()
  }

  render() {
    return (
      <IndexLayout>
        <Page>
          <Container>
            <div>
              <h3>Login</h3>
              <form>
                <input onChange={this.handleChange} name="email" id="email" type="email" placeholder="Email" />
                <input onChange={this.handleChange} name="password" id="password" type="password" placeholder="Password" />
                <button type="button" onClick={this.handleSubmit}>
                  Test
                </button>
              </form>
            </div>
            <Link to="/">Go back to the homepage</Link>
          </Container>
        </Page>
      </IndexLayout>
    )
  }
}

export default LoginPage
