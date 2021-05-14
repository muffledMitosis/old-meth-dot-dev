// import Canvas2d from '../widgets/Canvas';

import Header from '../widgets/Header';

import ProfilePic from '../assets/profilepic.png';
import TLArt from '../assets/tl-art.svg';

// TODO: Add cool star effect using canvas
// TODO: Finish-up about page so ppl can contact you properly

// const canvasDraw = (context) => {
//     context.fillStyle = '#0000FF';
//     context.beginPath();
//     context.arc(50, 100, 20, 0, 2*Math.PI);
//     context.fill();
// };

function LandingPage(){
    let elem = (
        <div className="main-bg-div">
            
            {/* <div className="w-full h-full absolute"><Canvas2d draw={canvasDraw}/></div> */}
            <img className="absolute right-0 bottom-0 w-1/2 md:w-1/4 pointer-events-none" src={TLArt} />

            <Header />

            <div className="text-white font-fira-code absolute left-8 md:left-32 top-1/2 transform -translate-y-full md:-translate-y-3/4">
                <div className="flex flex-row items-center space-x-2"><img className="w-10 h-10 md:w-24 md:h-24 object-cover rounded-full" src={ProfilePic} /><div className="text-lg md:text-6xl">Hello There 👋</div></div>
                <div className="text-xl md:text-4xl mt-4">I’m Meth, a full stack web dev<br />Works remotely, currently in SL</div>
            </div>

        </div>
    );
    return elem;
}

export default LandingPage;