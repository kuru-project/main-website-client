import Link from 'next/link'

function Navigation() {
  return (
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About Us</a></Link></li>
      <li><Link href="/opensource"><a>Open Source</a></Link></li>
      <li><Link href="/mission"><a>Mission</a></Link></li>
      <li><Link href="/vision"><a>Vision</a></Link></li>
      <li><Link href="/team"><a>Team</a></Link></li>
      <li><Link href="/rules/discord"><a>Discord Rules</a></Link></li>
      <li><Link href="/bot"><a>Bot</a></Link></li>
    </ul>
  )
}

export default Navigation
