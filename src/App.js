import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
// eslint-disable-next-line import/extensions
import Footer from './components/Footer'

import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
    url: 'https://musicpage8522.ccbp.tech/',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    title: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    url: 'https://tourismweb8522.ccbp.tech/',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL:
      'https://res.cloudinary.com/dqdlpjyhw/image/upload/v1681913439/WhatsApp_Image_2023-04-19_at_19.39.52_ynmeja.jpg',
    title: 'My Projects',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
    url: 'https://projstaticsai.ccbp.tech/',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'Destinations',
    description:
      'Destination Website enables users to explore Destiantions by typing in seachbar',
    url: 'https://dessearchsai.ccbp.tech/',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    url: 'https://fdmnchsai8522.ccbp.tech/',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
    url: 'https://sai8522projects.ccbp.tech/',
  },
  {
    projectId: 7,
    category: 'RESPONSIVE',
    imageURL:
      'https://res.cloudinary.com/dqdlpjyhw/image/upload/v1681901647/WhatsApp_Image_2023-04-19_at_16.17.01_1_f9ynuz.jpg',
    title: 'Theme Changer',
    description: 'Theme Changer is Webpage, in which user can toggle the theme',
    url: 'https://themechangersai.ccbp.tech/',
  },
  {
    projectId: 13,
    category: 'RESPONSIVE',
    imageURL:
      'https://res.cloudinary.com/dqdlpjyhw/image/upload/v1688639184/tropical-fruits-background-with-card-template-palm-tree-leaf_1_gszm99.jpg',
    title: 'Counter',
    description: 'Responsive webpage , in which user can update the count',
    url: 'https://saikumar8522.ccbp.tech/',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
    url: 'https://typingtest8522.ccbp.tech/',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
    url: 'https://randomjoke8522.ccbp.tech/',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
    url: 'https://sizingimg8522.ccbp.tech/',
  },
  {
    projectId: 11,
    category: 'DYNAMIC',
    imageURL:
      'https://res.cloudinary.com/dqdlpjyhw/image/upload/v1681903574/WhatsApp_Image_2023-04-19_at_16.55.30_glyblx.jpg',
    title: 'Wikipidia',
    description:
      'This is a dynamic web application ,User acn type any keyword to search',
    url: 'https://miniwikisai.ccbp.tech/',
  },
  {
    projectId: 12,
    category: 'DYNAMIC',
    imageURL:
      'https://res.cloudinary.com/dqdlpjyhw/image/upload/v1681905168/WhatsApp_Image_2023-04-19_at_17.22.03_ze9dsq.jpg',
    title: 'Bomb Defuser',
    description:
      'This is a dynamic web application User can Guess key to stop defusing of Bomb',
    url: 'https://bombdefuse8522.ccbp.tech/',
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  filteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      each => each.category === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.filteredProjects()
    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          "Welcome to my portfolio! I'm Saikumar, a Student with a passion for
          frontend engineer. Through this portfolio, I aim to showcase my
          skills, experience, and the projects I have worked on.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={tabDetails.tabId === activeTabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
        {/* <div>
          <p className="description">
            This is my WEB PAGE on my profile which includes my education
            details and projects i have done so far.i have provided the brief
            information on the projects i have mentioned, An aspiring software
            engineer with the ability to grow as an individual and learn in the
            surrounding of talented people. I am always open for discussions
            <a href="https://www.linkedin.com/in/saikumar-maddula-7a9b9a205/">
              @Linkedin
            </a>
          </p>
        </div> */}
        <AboutMe />
        <Footer />
      </div>
    )
  }
}

export default App
