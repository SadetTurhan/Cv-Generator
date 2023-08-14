import { useState } from "react";

function GeneralInfo(){
    const [ generalInfoData, setGeneralInfoData ] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })
    const [ getGeneralInfoData, setGetGeneralInfoData ] = useState({
        name: "leroy Jenkins",
        email: "leroyJenkins@blabla.com",
        phone: "+90-111-111-11-11",
        address: "Lorem ipsum dolor sit amet"
    })
    function addGeneralInfo(){
        setGetGeneralInfoData(generalInfoData)
    }
    return(
        <>
        <p>Personal Details</p>
        <label htmlFor="name">Full Name<input value={generalInfoData.name}
        onChange={e=>setGeneralInfoData({...generalInfoData,name:e.target.value})}/></label>
        <label htmlFor="email">Email<input value={generalInfoData.email}
        onChange={e=>setGeneralInfoData({...generalInfoData,email:e.target.value})}/></label>
        <label htmlFor="phone">Phone Number<input value={generalInfoData.phone}
        onChange={e=>setGeneralInfoData({...generalInfoData,phone:e.target.value})}/></label>
        <label htmlFor="address">Address<input value={generalInfoData.address}
        onChange={e=>setGeneralInfoData({...generalInfoData,address:e.target.value})}/></label>
        <button type="submit" onClick={addGeneralInfo}>add GeneralInfo</button>
        <div>
                <p>{getGeneralInfoData.name}</p>
                <p>{getGeneralInfoData.email}</p>
                <p>{getGeneralInfoData.phone}</p>
                <p>{getGeneralInfoData.address}</p>
        </div>
        </>
    )
    }
    
    export { GeneralInfo };