import * as React from 'react';
import Layout from '../components/layout';
import TechScroll from '../components/widgets/tech_scroll';

const AboutPage = () => {
  return(
    <Layout>
      <div className="h-screen">
        <TechScroll />
      </div>
    </Layout>
  );
};

export default AboutPage;