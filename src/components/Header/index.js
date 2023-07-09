import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">Saikumar</p>
      <ul className="nav-menu">
        <a href="https://www.linkedin.com/">
          <li>
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </li>
        </a>
        <a href="https://www.github.com/">
          <li>
            <img
              className="social-network-img"
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
              alt="Git Hub"
            />
          </li>
        </a>
        <a href="https://www.twitter.com/">
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
