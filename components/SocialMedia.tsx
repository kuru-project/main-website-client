import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

const styles = {
  discord: {
    color: '#7289da'
  },
  facebook: {
    color: '#3b5998'
  },
  twitter: {
    color: '00acee'
  },
}

function SocialMedia() {
  return (
    <ul>
      <li>
        <span><FontAwesomeIcon icon={faTwitter} className="mr-1" style={styles.twitter} /></span>
        <a href="http://twitter.kuru-anime.com/" target="_blank">Twitter</a>
      </li>
      <li>
        <span><FontAwesomeIcon icon={faFacebook} className="mr-1" style={styles.facebook} /></span>
        <a href="http://facebook.kuru-anime.com/" target="_blank">Facebook</a>
      </li>
      <li>
        <span><FontAwesomeIcon icon={faDiscord} className="mr-1" style={styles.discord} /></span>
        <a href="http://discord.kuru-anime.com/" target="_blank">Discord</a>
      </li>
    </ul>
  )
}

export default SocialMedia
