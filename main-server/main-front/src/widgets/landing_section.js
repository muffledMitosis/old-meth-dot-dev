import { FiActivity, FiBriefcase } from 'react-icons/fi';
import { BiBookOpen } from 'react-icons/bi';

function getIcon(name) {
    if(name == "Projects"){
        return (<FiActivity className="text-lg text-mdd-red-strong" />);
    }else if(name == "Blog") {
        return (<BiBookOpen className="text-lg text-mdd-blue-strong" />);
    }else if(name == "About") {
        return (<FiBriefcase className="text-lg text-mdd-green-strong" />);
    }else {
        return <div className="text-mdd-red-strong">:(</div>
    }
}

function LandingSection(props) {
    let elem = (
        <div className="flex items-center content-center space-x-2 cursor-pointer">
            {getIcon(props.name)}
            <div className="text-white font-fira-code">{props.name}</div>
        </div>
    );

    return elem;
}

export default LandingSection;