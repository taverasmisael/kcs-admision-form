import { titleCase, pascalCase, sentenceCase } from 'change-case'

const filterActives = val => val.checked
const transformDate = date => new Date(date).toLocaleDateString()
const isTrue = val => val === true
const isDateKey = key => key.toLowerCase().endsWith('date')

const prepareMedicalDetails = detail =>
  detail
    .filter(filterActives)
    .map(d => d.label)
    .join(', ') || 'N/A'

const prepareVaccinesDetails = vaccines => {
  const keys = Object.keys(vaccines).sort()
  return keys
    .filter(k => vaccines[k].value)
    .map(k => {
      const title = titleCase(k)
      const prop = vaccines[k].value
      const value = isTrue(prop) ? 'Única' : prop
      return `${title}: ${value}`
    })
    .join(', ')
}
const infoReducer = slice => (p, k) => {
  const title = sentenceCase(pascalCase(k))
  const prop = slice[k]
  const value = isTrue(prop) ? 'Yes' : isDateKey(k) ? transformDate(prop) : prop
  return {
    ...p,
    [title]: value
  }
}
const prepareGeneralInfo = slice =>
  Object.keys(slice)
    .sort()
    .filter(k => !!slice[k])
    .reduce(infoReducer(slice), {})

export default data => {
  console.log('d', data)
  const keys = Object.keys(data).sort()
  const infos = keys.filter(k => k.endsWith('Info')).reduce((p, c) => ({ ...p, [c]: data[c] }), {})
  let {
    fatherInfo: FatherInfo,
    motherInfo: MotherInfo,
    tutorInfo: TutorInfo,
    ICEInfo: InCaseOfEmergencyInfo,
    extraInfo: ExtraInfo,
    medicalInfo: MedicalInfo,
    childInfo: ChildInfo
  } = infos

  let { alergies: Alergies, diseases: Diseases, sikness: Sikness, vaccines: Vaccines } = data
  Alergies = prepareMedicalDetails(Alergies)
  Diseases = prepareMedicalDetails(Diseases)
  Sikness = prepareMedicalDetails(Sikness)
  Vaccines = prepareVaccinesDetails(Vaccines)
  ChildInfo = prepareGeneralInfo(ChildInfo)
  FatherInfo = prepareGeneralInfo(FatherInfo)
  MotherInfo = prepareGeneralInfo(MotherInfo)
  ExtraInfo = prepareGeneralInfo(ExtraInfo)
  InCaseOfEmergencyInfo = prepareGeneralInfo(InCaseOfEmergencyInfo)
  TutorInfo = prepareGeneralInfo(TutorInfo)
  MedicalInfo = { ...prepareGeneralInfo(MedicalInfo), Alergies, Diseases, Sikness, Vaccines }

  return {
    ChildInfo,
    FatherInfo,
    MotherInfo,
    TutorInfo,
    ExtraInfo,
    InCaseOfEmergencyInfo,
    MedicalInfo
  }
}
