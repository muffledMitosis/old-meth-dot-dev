import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const FrontEnd =()=>{
  return(
    <div className='flex items-center'>
      <div className='w-16 ml-2 py-2'><StaticImage src='../../assets/art/tech_logos/react.svg'/></div>
      <div className='w-24 ml-2 py-2'><StaticImage src='../../assets/art/tech_logos/tailwindcss.svg'/></div>
    </div>
  )
}

const Server =()=>{
  return(
    <div className='flex items-center'>
      <div className='w-16 ml-2 py-2'><StaticImage src='../../assets/art/tech_logos/nodejs.svg'/></div>
      <div className='w-16 ml-2 py-2'><StaticImage src='../../assets/art/tech_logos/firebase.svg'/></div>
    </div>
  )
}
const DB =()=>{
  return(
    <div className='flex items-center'>
      <div className='w-24 ml-2 py-2'><StaticImage src='../../assets/art/tech_logos/mongodb.svg'/></div>
      <div className='w-16 ml-2 py-2'><StaticImage src='../../assets/art/tech_logos/postgresql.svg'/></div>
      <div className='w-16 ml-2 py-2'><StaticImage src='../../assets/art/tech_logos/firebase.svg'/></div>
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

export default TechStack;