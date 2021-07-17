import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return(
    <Layout>
      <div className="h-screen">
        <StaticImage className="absolute right-0 bottom-0 w-1/2 md:w-1/4 pointer-events-none" src="../assets/art/tl-art.svg" />

            <div className="text-white font-fira-code absolute left-8 md:left-32 top-1/2 transform -translate-y-full md:-translate-y-3/4">
                <div className="flex flex-row items-center space-x-2"><StaticImage className="w-10 h-10 md:w-24 md:h-24 object-cover rounded-full" src="../assets/images/profilepic.png" /><div className="text-lg md:text-6xl">Hello There 👋</div></div>
                <div className="text-xl md:text-4xl mt-4">I’m Meth, a full stack web dev<br />Works remotely, currently in SL</div>
            </div>
      </div>
    </Layout>
  );
};

export default IndexPage;