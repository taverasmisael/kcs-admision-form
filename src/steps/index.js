import Child from './ChildInfo'
import Medical from './MedicalInfo'
import Extra from './ExtraInfo'
import Father from './FatherInfo'
import Mother from './MotherInfo'
import ICE from './ICEInfo'
import Tutor from './TutorInfo'
import Payment from './PaymentInfo'

import StepWrapper from './StepWrapper'

const ChildInfo = StepWrapper(Child)
const MedicalInfo = StepWrapper(Medical)
const ExtraInfo = StepWrapper(Extra)
const FatherInfo = StepWrapper(Father)
const MotherInfo = StepWrapper(Mother)
const ICEInfo = StepWrapper(ICE)
const TutorInfo = StepWrapper(Tutor)
const PaymentInfo = StepWrapper(Payment)

export { StepWrapper, ChildInfo, MedicalInfo, ExtraInfo, FatherInfo, MotherInfo, ICEInfo, TutorInfo, PaymentInfo }
