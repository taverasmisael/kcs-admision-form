# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.7.0"></a>
# [0.7.0](https://github.com/taverasmisael/kcs-admision-form/compare/v0.6.1...v0.7.0) (2018-02-01)


### Bug Fixes

* **MedicalInfo:** reset MedicalInfo and its components when adding a new Child ([7f3ced4](https://github.com/taverasmisael/kcs-admision-form/commit/7f3ced4))
* **style:** loading wrapper. Change button text when sending ([3b5f36c](https://github.com/taverasmisael/kcs-admision-form/commit/3b5f36c))
* **TabForms:** remove componentWillRecieveProps to avoid deleting text in inputs ([440b30d](https://github.com/taverasmisael/kcs-admision-form/commit/440b30d))


### Features

* **componentWillUnmount:** fix unsync state with this hook ([f680730](https://github.com/taverasmisael/kcs-admision-form/commit/f680730))



<a name="0.6.1"></a>
## [0.6.1](https://github.com/taverasmisael/kcs-admision-form/compare/v0.6.0...v0.6.1) (2018-01-30)


### Bug Fixes

* **steps/path:** path to downloadable files and currentStep in initialState ([4bc44c8](https://github.com/taverasmisael/kcs-admision-form/commit/4bc44c8))



<a name="0.6.0"></a>
# [0.6.0](https://github.com/taverasmisael/kcs-admision-form/compare/v0.5.0...v0.6.0) (2018-01-30)


### Features

* **AdmisionFinished:** work on UX for finished. Allow new Inscription ([5601978](https://github.com/taverasmisael/kcs-admision-form/commit/5601978))
* **Intro/Footer:** remove lorem text and add a downloadable document ([8fd270a](https://github.com/taverasmisael/kcs-admision-form/commit/8fd270a))
* **PaymentInfo:** create and complete payment step ([027d188](https://github.com/taverasmisael/kcs-admision-form/commit/027d188))



<a name="0.5.0"></a>
# [0.5.0](https://github.com/taverasmisael/kcs-admision-form/compare/v0.4.1...v0.5.0) (2018-01-30)


### Features

* **grades:** use real KCS grades ([0b5051c](https://github.com/taverasmisael/kcs-admision-form/commit/0b5051c))



<a name="0.4.1"></a>
## [0.4.1](https://github.com/taverasmisael/kcs-admision-form/compare/v0.4.0...v0.4.1) (2018-01-30)



<a name="0.4.0"></a>
# [0.4.0](https://github.com/taverasmisael/kcs-admision-form/compare/v0.3.0...v0.4.0) (2018-01-30)


### Bug Fixes

* **ChildInfo:** activate birthdate/age onValidateChildError ([0d4e4dc](https://github.com/taverasmisael/kcs-admision-form/commit/0d4e4dc))
* **ExtraForm:** use a descriptive name for aditionalInfo ([702676b](https://github.com/taverasmisael/kcs-admision-form/commit/702676b))
* **uncontrolled:** fix all uncontrolled components ([25d3c33](https://github.com/taverasmisael/kcs-admision-form/commit/25d3c33))
* **VaccineCard:** update the right value for unique vaccines ([78382f3](https://github.com/taverasmisael/kcs-admision-form/commit/78382f3))


### Features

* **lib:** install unfetch and send email via api ([36bf429](https://github.com/taverasmisael/kcs-admision-form/commit/36bf429))
* **mail:** send email when finish ([b106819](https://github.com/taverasmisael/kcs-admision-form/commit/b106819))
* **mapInfo:** create mapper for state and send it as a mail ([fced5ce](https://github.com/taverasmisael/kcs-admision-form/commit/fced5ce))
* **ui:** add visual clue the email is being send ([7de4a34](https://github.com/taverasmisael/kcs-admision-form/commit/7de4a34))
* **utilities:** create utiitie to transform objects to formData ([81eaf09](https://github.com/taverasmisael/kcs-admision-form/commit/81eaf09))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/taverasmisael/kcs-admision-form/compare/v0.2.0...v0.3.0) (2018-01-29)


### Bug Fixes

* **birthdate:** update changes in birdthdate and age ([96a2c17](https://github.com/taverasmisael/kcs-admision-form/commit/96a2c17))


### Features

* **EmailValidation:** create email Validation rule, use that rule ([44e878b](https://github.com/taverasmisael/kcs-admision-form/commit/44e878b))
* **MedicalForm:** complete medical form ([fc3b3ad](https://github.com/taverasmisael/kcs-admision-form/commit/fc3b3ad))
* **MedicalForm:** integrate medicalform to childInfo ([379ec77](https://github.com/taverasmisael/kcs-admision-form/commit/379ec77))
* **sikness:** create the sikness list ([e6c2bc4](https://github.com/taverasmisael/kcs-admision-form/commit/e6c2bc4))
* **Vaccines:** create VaccineCard and implement it ([96c5e77](https://github.com/taverasmisael/kcs-admision-form/commit/96c5e77))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/taverasmisael/kcs-admision-form/compare/v0.1.2...v0.2.0) (2018-01-27)


### Bug Fixes

* **styles:** use DefaultTheme 'error' palette ([d874711](https://github.com/taverasmisael/kcs-admision-form/commit/d874711))
* **TextField:** check if onValidationError exist on the input context before call it ([cf8e678](https://github.com/taverasmisael/kcs-admision-form/commit/cf8e678))


### Features

* validate ChildForm and create the standard handler for TextField validation ([34de4a4](https://github.com/taverasmisael/kcs-admision-form/commit/34de4a4))
* **FormValidation:** apply to all forms and sections ([831cdaf](https://github.com/taverasmisael/kcs-admision-form/commit/831cdaf))
* **FormValidation:** support for input validations and onValidationError event ([eff74cd](https://github.com/taverasmisael/kcs-admision-form/commit/eff74cd))
* **NumberField:** update to use native number and add new validators for length ([8449f00](https://github.com/taverasmisael/kcs-admision-form/commit/8449f00))
* **validation:** push validation state up to root component ([fed2808](https://github.com/taverasmisael/kcs-admision-form/commit/fed2808))
* **Validator:** create function to validate values dynamically ([7a57fcf](https://github.com/taverasmisael/kcs-admision-form/commit/7a57fcf))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/taverasmisael/kcs-admision-form/compare/v0.1.1...v0.1.2) (2018-01-24)



<a name="0.1.1"></a>
## [0.1.1](https://github.com/taverasmisael/kcs-admision-form/compare/v0.1.0...v0.1.1) (2018-01-24)



<a name="0.1.0"></a>
# 0.1.0 (2018-01-24)


### Bug Fixes

* **style:** adjust margin in desktop ([c968b04](https://github.com/taverasmisael/kcs-admision-form/commit/c968b04))
* **styles:** remove spacing that made the body overflowX ([137759c](https://github.com/taverasmisael/kcs-admision-form/commit/137759c))
* **theme:** add the whole palette to the theme. Needed for material-ui-pickers ([a99611f](https://github.com/taverasmisael/kcs-admision-form/commit/a99611f))
* **typo:** change headline in forms ([35d3605](https://github.com/taverasmisael/kcs-admision-form/commit/35d3605))


### Features

* **AdmisionForm:** complete base structure and stepper logic ([3d75905](https://github.com/taverasmisael/kcs-admision-form/commit/3d75905))
* **AdmisionForm:** create basic structure and connect components ([0f6d950](https://github.com/taverasmisael/kcs-admision-form/commit/0f6d950))
* **ChildForm:** complete ChildForm ([b8d8745](https://github.com/taverasmisael/kcs-admision-form/commit/b8d8745))
* **datepicker:** introduce DatePicker to childform component ([02097b0](https://github.com/taverasmisael/kcs-admision-form/commit/02097b0))
* **DatePicker:** abstract DatePicker with locale and standard configs ([1c91679](https://github.com/taverasmisael/kcs-admision-form/commit/1c91679))
* **ExtraInfo:** complete Extra[Info/Form] ([b562c6a](https://github.com/taverasmisael/kcs-admision-form/commit/b562c6a))
* **FamilyInfo:** complet parent structur (Father only) ([624c8ac](https://github.com/taverasmisael/kcs-admision-form/commit/624c8ac))
* **footer:** start footer, restructure header and divider ([e0a4d23](https://github.com/taverasmisael/kcs-admision-form/commit/e0a4d23))
* **form:** create first form slide ChildForm to hold each child info ([96db12e](https://github.com/taverasmisael/kcs-admision-form/commit/96db12e))
* **ICE:** complete ICE[Info/Form] component ([388282a](https://github.com/taverasmisael/kcs-admision-form/commit/388282a))
* **intro:** complete styles for intro component ([5161562](https://github.com/taverasmisael/kcs-admision-form/commit/5161562))
* **lib:** add 'just-compare' ([33ece32](https://github.com/taverasmisael/kcs-admision-form/commit/33ece32))
* **lib:** install 'color' ([cb66b53](https://github.com/taverasmisael/kcs-admision-form/commit/cb66b53))
* **lib:** install 'react-text-mask' ([bbbce89](https://github.com/taverasmisael/kcs-admision-form/commit/bbbce89))
* **MedicalForm:** add Diseases and Vaccine support ([7686d10](https://github.com/taverasmisael/kcs-admision-form/commit/7686d10))
* **reafact:** FamilyInfo spliting into a new component 'ParentForm' for simplicity ([15a94e5](https://github.com/taverasmisael/kcs-admision-form/commit/15a94e5))
* **Steper:** make steper and steps more easy to use ([306fb6b](https://github.com/taverasmisael/kcs-admision-form/commit/306fb6b))
* **steps:** add named export support, add text to each step ([8a50494](https://github.com/taverasmisael/kcs-admision-form/commit/8a50494))
* **steps:** Enhance Steps with real StepWrapper ([b8929bc](https://github.com/taverasmisael/kcs-admision-form/commit/b8929bc))
* **style:** add theme color to home page ([ec11b71](https://github.com/taverasmisael/kcs-admision-form/commit/ec11b71))
* **SwipeableViews:** add support for swipe animations in tabs ([8a85412](https://github.com/taverasmisael/kcs-admision-form/commit/8a85412))
* **Tabs:** use tabs for FamilyInfo parentsView ([b8637e4](https://github.com/taverasmisael/kcs-admision-form/commit/b8637e4))
* **TelField:** create a masked input for phone numbers ([a71012c](https://github.com/taverasmisael/kcs-admision-form/commit/a71012c))
* **TutorInfo:** complete Tutor[info/form] components ([4e33f6e](https://github.com/taverasmisael/kcs-admision-form/commit/4e33f6e))
* **utilities:** create debounce and throttle helpers ([d2265a5](https://github.com/taverasmisael/kcs-admision-form/commit/d2265a5))
