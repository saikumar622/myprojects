import React from 'react'
import './index.css'

const AboutMe = () => {
  const handleOpenPDF = () => {
    const pdfUrl =
      'file:///C:/Users/user/OneDrive/Documents/TestIng/Articles/Machine%20Learning%20Workflow%20with%20MLflow%20document.pdf'
    window.open(pdfUrl, '_blank')
  }
  return (
    <div className="card">
      <h2 className="card-title">About Me</h2>
      <img
        src="https://res.cloudinary.com/dqdlpjyhw/image/upload/v1688637645/WhatsApp_Image_2023-03-25_at_22.02.48_xibaiz.jpg"
        alt="Profile"
        className="card-image"
      />
      <div className="card-content">
        <h2 className="card-title">Saikumar</h2>
        <p className="card-description">
          Hi, I'm a passionate developer with expertise in web development. I
          love building interactive and user-friendly interfaces. I have
          experience in HTML, CSS, JavaScript, and React. My goal is to create
          meaningful and impactful applications that solve real-world problems.
          Feel free to explore my portfolio to see some of my projects.
        </p>
        <button onClick={handleOpenPDF} className="open-pdf-btn">
          Open Resume
        </button>
      </div>
    </div>
  )
}

export default AboutMe
