import SocialMedia from '@kuru/components/SocialMedia';
import Navigation from '@kuru/components/Navigation';

import { Layout as LayoutAnt } from 'antd';
const { Footer: FooterAnt } = LayoutAnt;

function Footer() {
  return (
    <FooterAnt style={{ textAlign: 'center', backgroundColor: '#CFCFCF', color: 'white' }}>
      <div>Kuru Anime &copy; {new Date().getFullYear()}</div>
      <Navigation />
      <SocialMedia />
    </FooterAnt>
  )
}

export default Footer
