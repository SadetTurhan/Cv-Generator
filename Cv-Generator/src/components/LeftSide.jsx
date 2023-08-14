import { GeneralInfo } from "./GeneralInfo";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo"
function LeftSide(){
return(
    <>
    <h1>Cv Generator</h1>
    <GeneralInfo />
    <EducationInfo />
    <ExperienceInfo />
    </>
)
}

export default LeftSide;