import Children from './ChildrenInfo'
import Extra from './ExtraInfo'
import Family from './FamilyInfo'
import ICE from './ICEInfo'
import MedicalCondition from './MedicalCondition'
import Tutor from './TutorInfo'

import StepWrapper from './StepWrapper'

const ChildrenInfo = StepWrapper(Children)
const ExtraInfo = StepWrapper(Extra)
const FamilyInfo = StepWrapper(Family)
const ICEInfo = StepWrapper(ICE)
const TutorInfo = StepWrapper(Tutor)
const MedicalConditionInfo = StepWrapper(MedicalCondition)

export { StepWrapper, ChildrenInfo, ExtraInfo, FamilyInfo, ICEInfo, MedicalConditionInfo, TutorInfo }
