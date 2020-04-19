import SocialMedia from '@kuru/components/SocialMedia';
import Navigation from '@kuru/components/Navigation';
import logo from '../public/images/logo.png'

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      Header
      <Navigation />
      <SocialMedia />
    </header>
  )
}

export default Header
