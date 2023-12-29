import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import LogoTitle from '../../assets/images/logo-new.png'
import './Home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['o', 'n', 'i', 'a', ' ', 'F', 'a', 'r', 'b', 'e', 'h', 'i']
  const jobArray = [
    'A',
    ' ',
    'C',
    'e',
    'l',
    'l',
    ' ',
    'B',
    'i',
    'o',
    'l',
    'o',
    'g',
    'i',
    's',
    't',
    ' ',
    't',
    'u',
    'r',
    'n',
    'e',
    'd',
    ' ',
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once after the initial render
  

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h2 className='top-text'>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            &nbsp;
            <span className={`${letterClass} _13`}>m</span>
            <span className={`${letterClass} _14`}>y</span>
            &nbsp;
            <span className={`${letterClass} _15`}>n</span>
            <span className={`${letterClass} _16`}>a</span>
            <span className={`${letterClass} _17`}>m</span>
            <span className={`${letterClass} _18`}>e</span>
            &nbsp;
            <span className={`${letterClass} _19`}>i</span>
            <span className={`${letterClass} _20`}>s</span>
            <br/>
          </h2>
          <h1>
            <span className='name-text'>
              <img
                src={LogoTitle}
                alt="JavaScript Developer Name, Web Developer Name"
              />
              <span className='name'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={21}
                />
              </span>
            </span>
            <br />
            <div className="bottom-text">
              <AnimatedLetters
                
                letterClass={letterClass}
                strArray={jobArray}
                idx={33}
              />
            </div>
            
          </h1>
          <h2>Based in Toronto, with a focus on crafting innovative Web Applications.</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="ball-grid-beat" />
    </>
  )
};

export default Home