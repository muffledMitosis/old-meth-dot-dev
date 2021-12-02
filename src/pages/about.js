import * as React from 'react';
import { FiCpu, FiServer, FiTool } from 'react-icons/fi';
import Layout from '../components/layout';
import TechScroll from '../components/widgets/tech_scroll';

const Sever_i = () => <FiServer className="inline" />
const Cpu_i = () => <FiCpu className="inline" />
const Tool_i = () => <FiTool className="inline" />

const PictureFrame = (props) => {
  return(
    <div className={"about-picture-frame bg-green-400 " + props.className}>

    </div>
  );
}
const MainText = () => {
  return(
    <div className="about-main-text">
      <div className="general-text text-2xl intro">
        <div>👋 Hi there, I'm</div>
        <div className="text-4xl">Meth <b>Munindradasa</b></div>
        <div>A Full Stack Web Dev</div>
      </div>
      <div className="general-text description mt-4">
        I specialize in   <Sever_i /> <b>Backend Development with NodeJS</b>,   <Cpu_i /> <b>API architecture </b>
        and   <Tool_i /> <b>Tools/Plugin Development</b>. I have a deep passion for electronics
        and computer graphics, the two in combination is just amazing and fun to
        play around with.
      </div>
    </div>
  );
}

const AboutPage = () => {
  return(
    <Layout>
      <div className="min-h-screen">
        {/* <TechScroll /> */}
        <div className="flex md:flex-row flex-col items-center md:items-start pt-4">
          <PictureFrame className="ml-0 md:ml-24 mr-0 md:mr-8" />
          <MainText />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;