import * as React from 'react';

import Layout from '../components/layout';
import TechGlobe from '../components/widgets/tech_globe';

const AboutPage = () => {
  return(
    <Layout>
      <div className="h-screen">
        <TechGlobe />
      </div>
    </Layout>
  );
};

export default AboutPage;