import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { FiCpu, FiServer, FiTool } from 'react-icons/fi';
import Layout from '../components/layout';
import TechScroll from '../components/widgets/tech_scroll';

const Sever_i = () => <FiServer className="inline" />
const Cpu_i = () => <FiCpu className="inline" />
const Tool_i = () => <FiTool className="inline" />

const PictureFrame = (props) => {
  return(
    <div className={props.className}>
      <StaticImage className='w-64' src="../assets/images/about_pic.JPG"/>
    </div>
  );
}
const MainText = () => {
  return(
    <div className="about-main-text ml-4 mt-2 md:mt-0">
      <div className="general-text text-xl md:text-2xl intro">
        {/* <div>👋 Hi there, I'm</div> */}
        <div className="text-3xl md:text-4xl">Meth <b>Munindradasa</b></div>
        <div>A Full Stack Web Dev</div>
      </div>
      <div className="general-text text-sm md:text-base description mt-4">
        I specialize in   <Sever_i /> <b>Backend Development with NodeJS</b>,   <Cpu_i /> <b>API architecture </b>
        and   <Tool_i /> <b>Tools/Plugin Development</b>. I have a deep passion for electronics
        and computer graphics, the two in combination is just amazing and fun to
        play around with.
      </div>
    </div>
  );
}

const FrontEnd =()=>{
  return(
    <div className='flex items-center'>
      <div className='w-16 ml-2 py-2'><StaticImage src='../assets/art/tech_logos/react.svg'/></div>
      <div className='w-24 ml-2 py-2'><StaticImage src='../assets/art/tech_logos/tailwindcss.svg'/></div>
    </div>
  )
}

const Server =()=>{
  return(
    <div className='flex items-center'>
      <div className='w-16 ml-2 py-2'><StaticImage src='../assets/art/tech_logos/nodejs.svg'/></div>
      <div className='w-16 ml-2 py-2'><StaticImage src='../assets/art/tech_logos/firebase.svg'/></div>
    </div>
  )
}
const DB =()=>{
  return(
    <div className='flex items-center'>
      <div className='w-24 ml-2 py-2'><StaticImage src='../assets/art/tech_logos/mongodb.svg'/></div>
      <div className='w-16 ml-2 py-2'><StaticImage src='../assets/art/tech_logos/postgresql.svg'/></div>
      <div className='w-16 ml-2 py-2'><StaticImage src='../assets/art/tech_logos/firebase.svg'/></div>
    </div>
  )
}
const TechStack = () => {
  return(
    <div className='ml-4 md:ml-24'>
      <table className='table-auto general-text'>
        <thead>
          <tr><th></th><th><div className='m-2'>Technologies</div></th></tr>
        </thead>
        <tbody>
          <tr>
            <td><div className='m-2'>Frontend</div></td>
            <td><FrontEnd/></td>
          </tr>
          <tr>
            <td><div className='m-2'>DB</div></td>
            <td><DB/></td>
          </tr>
          <tr>
            <td><div className='m-2'>Server</div></td>
            <td><Server/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const AboutPage = () => {
  return(
    <Layout>
      <div className="min-h-screen">
        <div className="flex md:flex-row flex-col items-center md:items-start pt-4">
          <PictureFrame className="ml-0 mb-2 md:ml-24 mr-0 md:mr-8 mt-8 md:mt-0" />
          <MainText />
        </div>
        <div className="text-3xl md:text-4xl general-text mb-8 ml-4 md:ml-24 mt-16 mr-4">My Goto Tech-Stack</div>
        <TechStack />
      </div>
    </Layout>
  );
};

export default AboutPage;