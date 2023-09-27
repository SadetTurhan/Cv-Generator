import { GeneralInfo } from "./GeneralInfo"
import { EducationalInfo } from "./EducationalInfo"
import { PracticalInfo } from "./PracticalInfo"
import { SubmttingButton } from "./SubmittingButton"

function InfoContainer() {

    return (
      <div className="rounded-lg bg-pistachio w-2/5 p-8">
        <GeneralInfo />
        <EducationalInfo />
        <PracticalInfo />
        <SubmttingButton />
      </div>
    )
  }
  
  export { InfoContainer }
  