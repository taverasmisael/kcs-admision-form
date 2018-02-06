import Child from './ChildInfo'
import Medical from './MedicalInfo'
import Extra from './ExtraInfo'
import Family from './FamilyInfo'
import ICE from './ICEInfo'
import Tutor from './TutorInfo'
import Payment from './PaymentInfo'

import StepWrapper from './StepWrapper'

const ChildInfo = StepWrapper(Child)
const MedicalInfo = StepWrapper(Medical)
const ExtraInfo = StepWrapper(Extra)
const FamilyInfo = StepWrapper(Family)
const ICEInfo = StepWrapper(ICE)
const TutorInfo = StepWrapper(Tutor)
const PaymentInfo = StepWrapper(Payment)

export { StepWrapper, ChildInfo, MedicalInfo, ExtraInfo, FamilyInfo, ICEInfo, TutorInfo, PaymentInfo }
