import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
// import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png';
// import olximage from '../../Assets/olx-clone image.png';
// import netfliximage from '../../Assets/React-App-netflix-clone.png';
// import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png';
// import charlespizza from '../../Assets/Charlestown-Pizza.png';
// import todolist from '../../Assets/todolist.png';
import YouTubeClone from '../../assets/you_tube_clone.jpg';
import FitnessGuide from '../../assets/fitness_guide.jpg';
import BlogSite from '../../assets/blog_site.jpg';
import EcommerceSite from '../../assets/ecommerce_site.jpg';
import GlowingFace from '../../assets/glowing_face.jpg';
import GlowingBall from '../../assets/glowing_ball.jpg'

import ProjectCard from './ProjectCard';

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={YouTubeClone}
                isBlog={false}
                title="YouTube Clone"
                description="This project is a simplified front-end clone of YouTube. It was created with React js. It uses Youtube v3 API and uses Axios tool. Users can click on YouTube thumbnail images and can watch videos."
                ghLink="https://surya-youtube-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={FitnessGuide}
                isBlog={false}
                title="Fitness Guide"
                description="Fitness Guide builds with react js. User can get enhance the knowledge of wokouts by searching specific bodyparts, equipments used for workouts and name of the workouts."
                // ghLink="https://surya-fitness-guide.netlify.app/"
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BlogSite}
                isBlog={false}
                title="BlogSite"
                description='Blogsite website is a single page website. builds with react js. Using it as personal blog page.'
                ghLink=""
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={EcommerceSite}
                isBlog={false}
                title="E-commerce Site"
                description='E-commerce Site is a static website, builds with HTML, CSS, javascript and jQuery.'
                ghLink="https://surya-ecommerce-site.netlify.app/"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={GlowingFace}
                isBlog={false}
                title="Glowing Face"
                description=''
                ghLink="https://surya-glowing-face.netlify.app/"
              />
            </Col> */}

            {/* <Col md={4} className="project-card">
              <ProjectCard
                // imgPath={GlowingBall}
                isBlog={false}
                title=""
                description=''
                ghLink=""

              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist