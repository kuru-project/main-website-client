import SocialMedia from '@kuru/components/SocialMedia';
import Navigation from '@kuru/components/Navigation';

import { Layout as LayoutAnt } from 'antd';
const { Footer: FooterAnt } = LayoutAnt;

function Footer() {
  return (
    <FooterAnt>
      <footer>
        footer
        <Navigation />
        <SocialMedia />
      </footer>
    </FooterAnt>
  )
}

export default Footer
