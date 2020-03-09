/* eslint-disable  func-names */
/* eslint-disable  no-console */
const Alexa = require('ask-sdk-core');

//
//  Imported Alexa Hanlders
//
const AMAZON_LaunchRequestHandler = require('./intent-handlers/alexa-handlers/launch-handler.js');
const AMAZON_HelpIntentHandler = require('./intent-handlers/alexa-handlers/help-handler.js');
const AMAZON_CancelAndStopIntentHandler = require('./intent-handlers/alexa-handlers/cancel-and-stop-handler.js');
const AMAZON_SessionEndedRequestHandler = require('./intent-handlers/alexa-handlers/session-ended-handler.js');
const AMAZON_ErrorHandler = require('./intent-handlers/alexa-handlers/error-handler.js');
const AMAZON_FallbackIntentHandler = require('./intent-handlers/alexa-handlers/fallback-handler.js');
const AMAZON_RepeatIntentHandler = require('./intent-handlers/alexa-handlers/repeat-handler.js');

//
//  Imported Facts Handlers
//
const FACTS_NewFactIntentHandler = require('./intent-handlers/fact-handlers/new-fact-handler.js');
const QUESTION_LostAndFoundHandler = require('./intent-handlers/question-handlers/lost-and-found-handler.js');
const QUESTION_ReportEventHandler = require('./intent-handlers/question-handlers/report-event-handler.js');
const QUESTION_ContactPolice = require('./intent-handlers/question-handlers/contact-police.js');
const QUESTION_ProcedurePIR = require('./intent-handlers/question-handlers/procedure-pir.js');
const QUESTION_ProcedureLostFound = require('./intent-handlers/question-handlers/procedure-lost-found.js');
const QUESTION_AccessCrimeLog = require('./intent-handlers/question-handlers/access-crime-log.js');
const QUESTION_EmergencyMedicalResponse = require('./intent-handlers/question-handlers/emergency-medical-response.js');
const QUESTION_EventPolice = require('./intent-handlers/question-handlers/event-police.js');
const QUESTION_ReportAssault = require('./intent-handlers/question-handlers/report-assault.js');
const QUESTION_FrequencyCruiser = require('./intent-handlers/question-handlers/frequency-cruiser.js');
const QUESTION_ParkingPermit = require('./intent-handlers/question-handlers/parking-permit.js');
const QUESTION_RegisterSilentForm = require('./intent-handlers/question-handlers/register-silent-form.js');
const QUESTION_ChiefOfPolice = require('./intent-handlers/question-handlers/chief-of-police.js');
const QUESTION_PoliceStudentsHome = require('./intent-handlers/question-handlers/police-students-home.js');
const QUESTION_EmploymentPolice = require('./intent-handlers/question-handlers/employment-police.js');
const QUESTION_SelfDefenceTraining = require('./intent-handlers/question-handlers/self-defence-training.js');
const QUESTION_JuristrictionPolice = require('./intent-handlers/question-handlers/juristriction-police.js');
const QUESTION_ScholorshipPolice = require('./intent-handlers/question-handlers/scholorship-police.js');
const QUESTION_AccessPolice = require('./intent-handlers/question-handlers/access-police.js');
const QUESTION_CareerPolice = require('./intent-handlers/question-handlers/career-police.js');
const QUESTION_StudentPatrolPolice = require('./intent-handlers/question-handlers/student-patrol-shift.js');
const QUESTION_BenefitsStudentPatrol = require('./intent-handlers/question-handlers/benefits-student-patrol.js');
const QUESTION_SafeUtdallas = require('./intent-handlers/question-handlers/safe-utdallas.js');
const QUESTION_StudentRepresentativePolice = require('./intent-handlers/question-handlers/student-representative-police.js');
const QUESTION_FactsPolice = require('./intent-handlers/question-handlers/facts-police.js');
const QUESTION_TimePolice = require('./intent-handlers/question-handlers/time-police.js');
const QUESTION_LocationPolice = require('./intent-handlers/question-handlers/location-police.js');


//
//  Export Hanlders
//
const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    AMAZON_LaunchRequestHandler,
    AMAZON_RepeatIntentHandler,
    AMAZON_HelpIntentHandler,
    AMAZON_CancelAndStopIntentHandler,
    AMAZON_SessionEndedRequestHandler,
    AMAZON_FallbackIntentHandler,
    FACTS_NewFactIntentHandler,
    QUESTION_LostAndFoundHandler,
    QUESTION_ReportEventHandler,
    QUESTION_ContactPolice,
    QUESTION_ProcedurePIR,
    QUESTION_ProcedureLostFound,
    QUESTION_AccessCrimeLog,
    QUESTION_EmergencyMedicalResponse,
    QUESTION_EventPolice,
    QUESTION_ReportAssault,
    QUESTION_FrequencyCruiser,
    QUESTION_ParkingPermit,
    QUESTION_RegisterSilentForm,
    QUESTION_ChiefOfPolice,
    QUESTION_PoliceStudentsHome,
    QUESTION_EmploymentPolice,
    QUESTION_SelfDefenceTraining,
    QUESTION_JuristrictionPolice,
    QUESTION_ScholorshipPolice,
    QUESTION_AccessPolice,
    QUESTION_CareerPolice,
    QUESTION_StudentPatrolPolice,
    QUESTION_BenefitsStudentPatrol,
    QUESTION_SafeUtdallas,
    QUESTION_StudentRepresentativePolice,
    QUESTION_FactsPolice,
    QUESTION_TimePolice,
    QUESTION_LocationPolice
  )
  .addErrorHandlers(AMAZON_ErrorHandler)
  .lambda();