import { useState } from "react";
function ExperienceInfo(){
    const [ experienceInfoData, setExperienceInfoData ] = useState({
        companyname: "",
        positiontitle: "",
        workdate: ""
    })
    const [ getExperienceInfoData, setGetExperienceInfoData ] = useState({
        companyname: "quis exercitationem",
        positiontitle: "culpa nesciunt",
        workdate: "nihil aut nostrum explicabo"
    })
    function addExperienceInfo(){
        setGetExperienceInfoData(experienceInfoData)
    }
    return(
        <>
        <p>Experience</p>
        <label htmlFor="companyName">Company Name<input value={experienceInfoData.companyname}
        onChange={e=>setExperienceInfoData({...experienceInfoData,companyname:e.target.value})} /></label>
        <label htmlFor="positionTitle">Title of Position<input value={experienceInfoData.positiontitle}
        onChange={e=>setExperienceInfoData({...experienceInfoData,positiontitle:e.target.value})} /></label>
        <label htmlFor="workDate">Date of Work<input value={experienceInfoData.workdate}
        onChange={e=>setExperienceInfoData({...experienceInfoData,workdate:e.target.value})}/></label>
         <button type="submit" onClick={addExperienceInfo}>add ExperienceInfo</button>
         <div>
                <p>{getExperienceInfoData.companyname}</p>
                <p>{getExperienceInfoData.positiontitle}</p>
                <p>{getExperienceInfoData.workdate}</p>
        </div>
        </>
    )
    }
    
    export default ExperienceInfo;