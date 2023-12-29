import { useEffect, useState } from 'react'
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    // Set a timeout and store the timeout ID
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup function to clear the timeout when the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <>
      <div className="container about-page">
        <div className="text-zone-about">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className='paragraph'>
          I am a recent graduate of BrainStation’s Software Engineering program with an HBSc in Cell 
          and Molecular Biology and a background in the Sales Industry.
          </p>
          <br/>
          <p className='paragraph' align="LEFT">
            My interest in the tech industry blossomed when I began generating ideas for app development.
            I noticed the excitement I felt at the thought of building software that others could not only
            use but also benefit from. This ignited my passion for building and creating, ultimately leading 
            me to change my career path to software development.
          </p>
          <br/>

          <p className='paragraph'>
          During my intensive undergraduate studies, I cultivated robust time management, attention to detail
           as well as effective problem-solving skills. Additionally, I honed my ability to collaborate 
           efficiently within a team and acquired valuable communication and relationship-building skills through 
           my experience in the Sales Industry.
          </p>
          <br/>

          <p className='paragraph'>
          I am proud and excited to have embarked on this pivot in my career journey, incorporating my lifelong 
          passion for creativity into my daily work. As a new member of this industry, I am looking forward to 
          participating in the development and creation of the next generation of software, bringing further ease 
          to people's lives.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-beat" />
    </>
  )
}

export default About