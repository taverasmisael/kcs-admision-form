import Child from './ChildInfo'
import Extra from './ExtraInfo'
import Family from './FamilyInfo'
import ICE from './ICEInfo'
import MedicalCondition from './MedicalCondition'
import Tutor from './TutorInfo'

import StepWrapper from './StepWrapper'

const ChildInfo = StepWrapper(Child)
const ExtraInfo = StepWrapper(Extra)
const FamilyInfo = StepWrapper(Family)
const ICEInfo = StepWrapper(ICE)
const TutorInfo = StepWrapper(Tutor)
const MedicalConditionInfo = StepWrapper(MedicalCondition)

export { StepWrapper, ChildInfo, ExtraInfo, FamilyInfo, ICEInfo, MedicalConditionInfo, TutorInfo }
