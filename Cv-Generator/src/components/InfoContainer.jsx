import { GeneralInfo } from "./GeneralInfo"
import { EducationalInfo } from "./EducationalInfo"
import { PracticalInfo } from "./PracticalInfo"
import { SubmttingButton } from "./SubmittingButton"

function InfoContainer() {

    return (
      <div className="bg-palletteGreen w-2/5 p-8">
        <GeneralInfo />
        <EducationalInfo />
        <PracticalInfo />
        <SubmttingButton />
      </div>
    )
  }
  
  export { InfoContainer }
  