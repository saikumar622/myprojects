import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">Saikumar</p>
      <ul className="nav-menu">
        <a href="www.linkedin.com">
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </li>
        </a>
        <a href="www.github.com">
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </li>
        </a>
        <a href="www.twitter.com">
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </li>
        </a>
      </ul>
    </div>
  </nav>
)

export default Header