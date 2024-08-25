import PersonalAccount from "../../entities/accout/ui/PersonalAccount";
import PersonalAccoutInfo from "../../entities/accout/ui/PersonalAccoutModal";
import './style/personalPageCss.css';

const PersonalPage = () => {
    return (
        <div className="personal-page">
            <PersonalAccount/>
            {/* <PersonalAccoutInfo/> */}
        </div>
    );
}

export default PersonalPage;
