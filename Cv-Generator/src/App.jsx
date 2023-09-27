import { useState } from 'react'
import "./App.css"
import { LeftHeader } from "./components/LeftHeader"
import { InfoContainer } from "./components/InfoContainer"
import { CvArea } from "./components/CvArea"
function App() {
  state = {
    generalInfo: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    educationalExperience: {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
    },
    practicalExperience: {
      companyName: "",
      title: "",
      responsibilities: "",
      date: "",
    }
  };
  return (
    <>
      <LeftHeader />
      <InfoContainer />
      <CvArea />
    </>
  )
}

export default App
