
import PersonalAccount from "../../entities/accout/ui/PersonalAccount";
// import PersonalAccountInformation from "../../entities/accout/ui/PersonalAccountInformation";

import './style/personalPageCss.css';

const PersonalPage = (): JSX.Element => {
    return (
       

        
         <div className="personal-page"> 
          <title>Личный кабинет</title>
            <PersonalAccount/>
           {/* <PersonalAccountInformation/> */}
            </div>



        
    );
}

export default PersonalPage;
