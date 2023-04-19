import './index.css'

const ProjectItem = props => {
  const {projectDetails} = props
  const {projectId, imageURL, description, title, url} = projectDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${projectId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
          <a href={url} target="_blank" rel="noreferrer">
            <button type="button" className="btnn">
              Click Here
            </button>
          </a>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
