import SocialMedia from '@kuru/components/SocialMedia';
import Navigation from '@kuru/components/Navigation';

import { Layout as LayoutAnt } from 'antd';
const { Header: HeaderAnt } = LayoutAnt;

function Header() {
  return (
    <HeaderAnt>
      <header>
        Header
        <Navigation />
        <SocialMedia />
      </header>
    </HeaderAnt>
  )
}

export default Header
