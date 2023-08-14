import { useState } from "react";
function EducationInfo(){
    const [educationInfoData, setEducationInfoData] = useState({
        school: "",
        studytitle : "",
        studydate : ""
    })
    const [getEducationInfoData, setGetEducationInfoData] = useState({
        school: "consectetur adipisicing",
        studytitle: "elit. Eligendi non",
        studydate: "17-08-2020"
    }
    )
    function addEducationInfo(){
        setGetEducationInfoData(educationInfoData)
    }
    return(
        <>
        <p>Education</p>
        <label htmlFor="school">School<input value={educationInfoData.school}
        onChange={e=>setEducationInfoData({...educationInfoData,school:e.target.value})}/></label>
        <label htmlFor="studyTitle">Title of Study<input value={educationInfoData.studytitle}
        onChange={e=>setEducationInfoData({...educationInfoData,studytitle:e.target.value})}/></label>
        <label htmlFor="studyDate">Date of Study<input value={educationInfoData.studydate}
        onChange={e=>setEducationInfoData({...educationInfoData,studydate:e.target.value})}/></label>
         <button type="submit" onClick={addEducationInfo}>add EducationInfo</button>
        <div>
                <p>{getEducationInfoData.school}</p>
                <p>{getEducationInfoData.studytitle}</p>
                <p>{getEducationInfoData.studydate}</p>
        </div>
        </>
    )
    }
    
    export default EducationInfo;