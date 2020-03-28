import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'

function SocialMedia() {
  return (
    <ul>
      <li>
        <span><FontAwesomeIcon icon={faTwitter} style={{ marginRight: 5, color: '#00acee '}} /></span>
        <a href="http://twitter.kuru-anime.com/" target="_blank">Twitter</a>
      </li>
      <li>
        <span><FontAwesomeIcon icon={faFacebook} style={{ marginRight: 5, color: '#3b5998' }} /></span>
        <a href="http://facebook.kuru-anime.com/" target="_blank">Facebook</a>
      </li>
      <li>
        <span><FontAwesomeIcon icon={faDiscord} style={{ marginRight: 5, color: '#7289da' }} /></span>
        <a href="http://discord.kuru-anime.com/" target="_blank">Discord</a>
      </li>
    </ul>
  )
}

export default SocialMedia
