import PersonalAccount from "../../entities/accout/ui/PersonalAccount";
import PersonalAccountInformation from "../../entities/accout/ui/PersonalAccountInformation";

import './style/personalPageCss.css';

const PersonalPage = () => {
    return (<>
        <title>Личный кабинет</title>
        
        <div className="personal-page">
            <PersonalAccount/>
            <PersonalAccountInformation/>
        </div></>
    );
}

export default PersonalPage;
