const express = require('express');
const router = express.Router();


//      AVALIACAO CERTICACAO ROUTES
const assessmentFeedbacksRoutes = require('./avaliacao_certicacao/assessment_feedbacks_routes');
const assessmentResourcesRoutes = require('./avaliacao_certicacao/assessment_resources_routes');
const assessmentResultsRoutes = require('./avaliacao_certicacao/assessment_results_routes');
const assessmentRoutes = require('./avaliacao_certicacao/assessment_routes');
const certificateHistoryRoutes = require('./avaliacao_certicacao/certificate_history_routes');
const certificatesRoutes = require('./avaliacao_certicacao//certificates_routes');
const evaluantionCriteriasRoutes = require('./avaliacao_certicacao/evaluation_criteria_routes');
const examiningBoardsRoutes = require('./avaliacao_certicacao/examining_boards_routes');
const feedbackRoutes = require('./avaliacao_certicacao/feedbacks_routes');

//      BLOGS ROUTES
const blogPostsRoutes = require('./blog/blog_routes');
// const commentsRoutes = require('./blog/comments_routes');
const categoriesRoutes = require('./blog/blog_category_routes');

//      COMMERCIAL ROUTES
const clientsRoutes = require('./commercial/clients_routes');
const commercialGoalsRoutes = require('./commercial/commercial_goals_routes');
const commercialProposalsRoutes = require('./commercial/commercial_proposals_routes');
const commercialReportsRoutes = require('./commercial/commercial_reports_routes');
const commissionsRoutes = require('./commercial/commissions_routes');
const contractsRoutes = require('./commercial/contracts_routes');
const leadsRoutes = require('./commercial/leads_routes');
const opportunitiesRoutes = require('./commercial/opportunities_routes');
const productsServicesRoutes = require('./commercial/products_services_routes');
const salesRoutes = require('./commercial/sales_routes');

//      COMMUNICATION AND MARKETING AND MARKETING ROUTES
const campaignChannelRoutes = require('./communication_and_marketing/campaign_channel_routes');
const campaignsRoutes = require('./communication_and_marketing/campaigns_routes');
const channelsDisclosure = require('./communication_and_marketing/channels_disclosure_routes');
const contentsRoutes = require('./communication_and_marketing/contents_routes');
const eventRoutes = require('./communication_and_marketing/events_routes')
const marketingResearchRoutes = require('./communication_and_marketing/market_research_routes');
const marketingMetricsRoutes = require('./communication_and_marketing/marketing_metrics_routes')
const partnershipsRoutes = require('./communication_and_marketing/partnerships_routes');
const publicRelationsRoutes = require('./communication_and_marketing/public_relations_routes')

//      FINANCEIRO ROUTES
const accountsPaybleRoutes = require('./financeiro/accounts_payable_routes')
const accountsReciavableRoutes = require('./financeiro/accounts_receivable_routes')
const cashMovementsRoutes = require('./financeiro/cash_movements_routes')
const defaultReportRoutes = require('./financeiro/default_report_routes')
const employeeSalariesRoutes = require('./financeiro/employee_salaries_routes')
const financialReportsRoutes = require('./financeiro/financial_reports_routes')
const monthyFeesRoutes = require('./financeiro/monthly_fees_routes')
const scholarshipsAndDiscountsRoutes = require('./financeiro/scholarships_and_discounts_routes')
const suppliersRoutes = require('./financeiro/suppliers_routes')

//      HUMAN RESOURCES ROUTES
const benefitsRoutes = require('./human_resources/benefits_routes');
const candidatesRoutes = require('./human_resources/candidates_routes');
const disciplinaryWarningsRoutes = require('./human_resources/disciplinary_warnings_routes');
const employeeBenefitsRoutes = require('./human_resources/employee_benefits_routes');
const employeesRoutes = require('./human_resources/employees_routes');
const employmentContractsRoutes = require('./human_resources/employment_contracts_routes');
const internalDepartmantsRoutes = require('./human_resources/internal_departments_routes');
const jobRecruitmentRoutes = require('./human_resources/job_recruitment_routes');
const participationInTrainingRoutes = require('./human_resources/participation_in_training_routes');
const payrollRoutes = require('./human_resources/payroll_routes');
const performanceEvaluationsRoutes = require('./human_resources/performance_evaluations_routes');
const positionsRoutes = require('./human_resources/positions_routes');
const selectionProcessRoutes = require('./human_resources/selection_process_routes');
const trainingsRoutes = require('./human_resources/trainings_routes');
const vacationRoutes = require('./human_resources/vacation_routes');

//      INFRASTRUCTURE AND LOGISTICS
const appointmentsAndLogisticsRoutes = require('./infrastructure_and_logistics/appointments_transportation_routes');
const assetSecurityRoutes = require('./infrastructure_and_logistics/asset_security_routes')
const heritageRoutes = require('./infrastructure_and_logistics/heritage_routes')
const infrastrutureWorksRoutes = require('./infrastructure_and_logistics/infrastructure_works_routes')
const locationsRoutes = require('./infrastructure_and_logistics/locations_routes')
const maintenanceRoutes = require('./infrastructure_and_logistics/maintenance_routes')
const stockLogisticsRoutes = require('./infrastructure_and_logistics/stock_logistics_routes')
const stockMovementsRoutes = require('./infrastructure_and_logistics/stock_movements_routes')
const suppliersInfraRoutes = require('./infrastructure_and_logistics/suppliers_routes')
const transportationRoutes = require('./infrastructure_and_logistics/transportation_routes')

//      INTERNSHIP AND PROFESSIONAL OFFICE
const applicationsInternshipsRoutes = require('./internship_and_professional_integration_office/applications_internships_routes')
const businessRelationshipsRoutes = require('./internship_and_professional_integration_office/business_relationships_routes')
const companySuoervisorsRoutes = require('./internship_and_professional_integration_office/company_supervisors_routes')
const employabilityProgramsRoutes = require('./internship_and_professional_integration_office/employability_programs_routes')
const evaluationsIntershipRoutes = require('./internship_and_professional_integration_office/evaluations_internship_routes')
const formerStudentsRoutes = require('./internship_and_professional_integration_office/former_students_routes')
const internshipsReportsRoutes = require('./internship_and_professional_integration_office/internship_reports_routes')
const internshipsRoutes = require('./internship_and_professional_integration_office/internships_routes')
const partnerCompaniesRoutes = require('./internship_and_professional_integration_office/partner_companies_routes')
const vacanciesInternshipRoutes = require('./internship_and_professional_integration_office/vacancies_internship_routes')

//      IT DEPARTMENT
const accountsSystemsRoutes = require('./it_department/accounts_systems_routes')
const infrastructureNetworkRoutes = require('./it_department/infrastructure_network_routes')
const itAssetsRoutes = require('./it_department/it_assets_routes')
const itMaintrnanceRoutes = require('./it_department/it_maintenance_routes')
const itProjectsRoutes = require('./it_department/it_projects_routes')
const itSecurityRoutes = require('./it_department/it_security_routes')
const itSupportRoutes = require('./it_department/it_support_routes')
const itTechniciansRoutes = require('./it_department/it_technicians_routes')
const itUsersRoutes = require('./it_department/it_users_routes')
const logsAccessRoutes = require('./it_department/logs_access_routes')
const softwareLicensesRoutes = require('./it_department/software_licenses_routes')

//      LIBRARY RESOURCE CENTER
const acquisitionSuggestionsRoutes = require('./library_resource_center/acquisition_suggestions_routes')
const collectionRoutes = require('./library_resource_center/collection_routes')
const copiesRoutes = require('./library_resource_center/copies_routes')
const digitalCatalogRoutes = require('./library_resource_center/digital_catalog_routes')
const finesRoutes = require('./library_resource_center/fines_routes')
const libraryEventsRoutes = require('./library_resource_center/library_events_routes')
const loansRoutes = require('./library_resource_center/loans_routes')
const reservationsRoutes = require('./library_resource_center/reservations_routes')
const studySessionRoutes = require('./library_resource_center/study_session_routes')
const userLibraryRoutes = require('./library_resource_center/users_library_routes')

//      PEDAGOGICO
const academicCalendarRoutes = require('./pedagogico/academic_calendar_routes')
const classroomRoutes = require('./pedagogico/classroom_routes')
const disciplinesRoutes = require('./pedagogico/disciplines_routes')
const lessonPlanRoutes = require('./pedagogico/lesson_plan_routes')
const teachersRoutes = require('./pedagogico/teachers_routes')

//      SECRETARIA ACADEMICA ROUTES
const academicDocumentsRoutes = require('./secretaria_academica/academic_documents_routes')
const academicRecordsRoutes = require('./secretaria_academica/academic_records_routes')
const appointmentSchedulingRouter = require('./secretaria_academica/appointment_scheduling_routes')
const courseRegistrationRoutes = require('./secretaria_academica/course_registration_curso')
const enrollmentRoutes = require('./secretaria_academica/enrollment_routes')
const inChargeRoutes = require('./secretaria_academica/in_charge_routes')
const protocolRoutes = require('./secretaria_academica/protocol_routes')
const secretariatStaffRoutes = require('./secretaria_academica/secretariat_staff_routes')
const studentInChargeRoutes = require('./secretaria_academica/student_in _charge_routes')
const studentsRoutes = require('./secretaria_academica/students_routes')
const transfersRoutes = require('./secretaria_academica/transfers_routes')

//      STUDENT SUPPORT OFFICE ROUTES
const academicMonitoringRoutes = require('./student_support_office/academic_monitoring_routes')
const advisorsRoutes = require('./student_support_office/advisors_routes')
const appointmentsRoutes = require('./student_support_office/appointments_routes')
const careerProgramsRoutes = require('./student_support_office/career_programs_routes')
const complaintsSuggestionsRoutes = require('./student_support_office/complaints_suggestions_routes')
const eventsSuppotRoutes = require('./student_support_office/events_support_routes')
const partnerInstitutionsRoutes = require('./student_support_office/partner_institutions_routes')
const studentBenefitsRoutes = require('./student_support_office/student_benefits_routes')
const studentScholarshipsRoutes = require('./student_support_office/student_scholarships_routes')
const studentServicesRoutes = require('./student_support_office/student_services_routes')

//      TRAINING COORDINATORS
const classTeacherRoutes = require('./training_coordinators/class_teacher_routes')
const coordinatorRoutes = require('./training_coordinators/coordinator_routes')
const coursesRoutes = require('./training_coordinators/courses_routes')
const instructorsRoutes = require('./training_coordinators/instructors_routes')
const perticipantsRoutes = require('./training_coordinators/perticipants_routes')
const registrationRoutes = require('./training_coordinators/registration_routes')
const trainingCoordinatorsRoutes = require('./training_coordinators/training_coordinators_routes')
const trainingPlanRoutes = require('./training_coordinators/training_plan_routes')



//      USER AUTH
const userAuth = require('./user/user_routes')
const addressRoutes = require('./user/address_routes')
const unitsRoutes = require('./user/units_routes')

/**
 * 
 *      Routes And Service Routes
 *      
 *      
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


//      AVALIACAO CERTICACAO ROUTES
router.use('/avaliacao-certicacao/assessment-feedbacks', assessmentFeedbacksRoutes);
router.use('/avaliacao-certicacao/assessment-resources', assessmentResourcesRoutes);
router.use('/avaliacao-certicacao/assessment-results', assessmentResultsRoutes);
router.use('/avaliacao-certicacao/assessments', assessmentRoutes);
router.use('/avaliacao-certicacao/certificate-histories', certificateHistoryRoutes);
router.use('/avaliacao-certicacao/certificates', certificatesRoutes);
router.use('/avaliacao-certicacao/evaluation-criterias', evaluantionCriteriasRoutes);
router.use('/avaliacao-certicacao/examining-boards', examiningBoardsRoutes);
router.use('/avaliacao-certicacao/feedbacks', feedbackRoutes);

//      BLOGS ROUTES
router.use('/blog/blog-posts', blogPostsRoutes);
// router.use('/comments', commentsRoutes);
router.use('/blog/categories', categoriesRoutes);

//      COMMERCIAL ROUTES
router.use('/comercial/clients', clientsRoutes);
router.use('/comercial/commercial-goals', commercialGoalsRoutes);
router.use('/comercial/commercial-proposals', commercialProposalsRoutes);
router.use('/comercial/commercial-reports', commercialReportsRoutes);
router.use('/comercial/commissions', commissionsRoutes);
router.use('/comercial/contracts', contractsRoutes);
router.use('/comercial/leads', leadsRoutes);
router.use('/comercial/opportunities', opportunitiesRoutes);
router.use('/comercial/products-services', productsServicesRoutes);
router.use('/comercial/sales', salesRoutes);

//      COMMUNICATION AND MARKETING ROUTES
router.use('/communication-and-marketing/campaign-channel', campaignChannelRoutes);
router.use('/communication-and-marketing/campaign', campaignsRoutes);
router.use('/communication-and-marketing/campaign-disclosure', channelsDisclosure);
router.use('/communication-and-marketing/contents', contentsRoutes);
router.use('/communication-and-marketing/events', eventRoutes);
router.use('/communication-and-marketing/market-research', marketingResearchRoutes);
router.use('/communication-and-marketing/marketing-metrics', marketingMetricsRoutes);
router.use('/communication-and-marketing/partnerships', partnershipsRoutes);
router.use('/communication-and-marketing/public-relations', publicRelationsRoutes);

//      FINANCEIRO ROUTES
router.use('/financeiro/accounts-payable', accountsPaybleRoutes)
router.use('/financeiro/accounts-receivable', accountsReciavableRoutes)
router.use('/financeiro/cash-movements', cashMovementsRoutes)
router.use('/financeiro/default-report', defaultReportRoutes)
router.use('/financeiro/employee-salaries', employeeSalariesRoutes)
router.use('/financeiro/financial-reports', financialReportsRoutes)
router.use('/financeiro/monthly-fees', monthyFeesRoutes)
router.use('/financeiro/scholarships-and-discounts', scholarshipsAndDiscountsRoutes)
router.use('/financeiro/suppliers', suppliersRoutes)

//      HUMAN RESOURCES ROUTES
router.use('/human-resources/benefits', benefitsRoutes);
router.use('/human-resources/candidates', candidatesRoutes);
router.use('/human-resources/disciplinary-warnings', disciplinaryWarningsRoutes);
router.use('/human-resources/employee-benefits', employeeBenefitsRoutes);
router.use('/human-resources/employees', employeesRoutes);
router.use('/human-resources/employment-contracts', employmentContractsRoutes);
router.use('/human-resources/internal-departments', internalDepartmantsRoutes);
router.use('/human-resources/job-recruitment-routes', jobRecruitmentRoutes);
router.use('/human-resources/participation-in-training', participationInTrainingRoutes);
router.use('/human-resources/payroll', payrollRoutes);
router.use('/human-resources/performance-evaluations', performanceEvaluationsRoutes);
router.use('/human-resources/positions', positionsRoutes);
router.use('/human-resources/selection-process', selectionProcessRoutes);
router.use('/human-resources/trainings', trainingsRoutes);
router.use('/human-resources/vacation', vacationRoutes);


//      INFRASTRUCTURE AND LOGISTICS
router.use('/infrastructure-and-logistics/appointments-transportation-routes', appointmentsAndLogisticsRoutes);
router.use('/infrastructure-and-logistics/asset-security-routes', assetSecurityRoutes);
router.use('/infrastructure-and-logistics/heritage-routes', heritageRoutes);
router.use('/infrastructure-and-logistics/infrastructure-works-routes', infrastrutureWorksRoutes);
router.use('/infrastructure-and-logistics/locations-routes', locationsRoutes);
router.use('/infrastructure-and-logistics/maintenance-routes', maintenanceRoutes);
router.use('/infrastructure-and-logistics/stock-logistics-routes', stockLogisticsRoutes);
router.use('/infrastructure-and-logistics/stock-movements-routes', stockMovementsRoutes);
router.use('/infrastructure-and-logistics/suppliers-routes', suppliersInfraRoutes);
router.use('/infrastructure-and-logistics/transportation-routes', transportationRoutes);

//      INTERNSHIP AND PROFESSIONAL OFFICE
router.use('/internship-and-professional-integration-office/applications-internships', applicationsInternshipsRoutes);
router.use('/internship-and-professional-integration-office/business-relationships', businessRelationshipsRoutes);
router.use('/internship-and-professional-integration-office/company-supervisors', companySuoervisorsRoutes);
router.use('/internship-and-professional-integration-office/employability-programs', employabilityProgramsRoutes);
router.use('/internship-and-professional-integration-office/evaluations-internship', evaluationsIntershipRoutes);
router.use('/internship-and-professional-integration-office/former-students', formerStudentsRoutes);
router.use('/internship-and-professional-integration-office/internship-reports', internshipsReportsRoutes);
router.use('/internship-and-professional-integration-office/internships', internshipsRoutes);
router.use('/internship-and-professional-integration-office/partner-companies', partnerCompaniesRoutes);
router.use('/internship-and-professional-integration-office/vacancies-internship', vacanciesInternshipRoutes);

//      IT DEPARTMENT
router.use('/it-department/accounts-systems', accountsSystemsRoutes);
router.use('/it-department/infrastructure-network', infrastructureNetworkRoutes);
router.use('/it-department/it-asset', itAssetsRoutes);
router.use('/it-department/it-maintenance', itMaintrnanceRoutes);
router.use('/it-department/it-projects', itProjectsRoutes);
router.use('/it-department/it-security', itSecurityRoutes);
router.use('/it-department/it-support', itSupportRoutes);
router.use('/it-department/it-technicians', itTechniciansRoutes);
router.use('/it-department/it-users', itUsersRoutes);
router.use('/it-department/logs-access', logsAccessRoutes);
router.use('/it-department/software-licenses', softwareLicensesRoutes);

//      LIBRARY RESOURCE CENTER
router.use('/library-resource-center/acquisition-suggestions', acquisitionSuggestionsRoutes);
router.use('/library-resource-center/collection', collectionRoutes);
router.use('/library-resource-center/copies-routes', copiesRoutes);
router.use('/library-resource-center/digital-catalog', digitalCatalogRoutes);
router.use('/library-resource-center/fines', finesRoutes);
router.use('/library-resource-center/library-events', libraryEventsRoutes);
router.use('/library-resource-center/loans', loansRoutes);
router.use('/library-resource-center/reservations', reservationsRoutes);
router.use('/library-resource-center/study-session', studySessionRoutes);
router.use('/library-resource-center/users-library', userLibraryRoutes);

//      PEDAGOGICO
router.use('/pedagogico/academic-calendar', academicCalendarRoutes);
router.use('/pedagogico/classroom', classroomRoutes);
router.use('/pedagogico/disciplines', disciplinesRoutes);
router.use('/pedagogico/lesson-plan', lessonPlanRoutes);
router.use('/pedagogico/teachers', teachersRoutes);

//      SECRETARIA ACADEMICA ROUTES
router.use('/secretaria-academica/academic-documents', academicDocumentsRoutes);
router.use('/secretaria-academica/academic-records', academicRecordsRoutes);
router.use('/secretaria-academica/course-registration', courseRegistrationRoutes);
router.use('/secretaria-academica/enrollment', enrollmentRoutes);
router.use('/secretaria-academica/in-charge', inChargeRoutes);
router.use('/secretaria-academica/protocol', protocolRoutes);
router.use('/secretaria-academica/secretariat-staff', secretariatStaffRoutes);
router.use('/secretaria-academica/student-in-charge', studentInChargeRoutes);
router.use('/secretaria-academica/students', studentsRoutes);
router.use('/secretaria-academica/transfers', transfersRoutes);

//      STUDENT SUPPORT OFFICE ROUTES
router.use('/student-support-office/academic-monitoring', academicMonitoringRoutes);
router.use('/student-support-office/advisors', advisorsRoutes);
router.use('/student-support-office/appointments', appointmentsRoutes);
router.use('/student-support-office/career-programs', careerProgramsRoutes);
router.use('/student-support-office/complaints-suggestions', complaintsSuggestionsRoutes);
router.use('/student-support-office/events-support', eventsSuppotRoutes);
router.use('/student-support-office/partner-institutions', partnerInstitutionsRoutes);
router.use('/student-support-office/student-benefits', studentBenefitsRoutes);
router.use('/student-support-office/student-scholarships', studentScholarshipsRoutes);
router.use('/student-support-office/student-services', studentServicesRoutes);

//      TRAINING COORDINATORS
router.use('/training-coordinators/class-teacher', classTeacherRoutes);
router.use('/training-coordinators/coordinator', coordinatorRoutes);
router.use('/training-coordinators/courses', coursesRoutes);
router.use('/training-coordinators/instructors', instructorsRoutes);
router.use('/training-coordinators/perticipants', perticipantsRoutes);
router.use('/training-coordinators/registration', registrationRoutes);
router.use('/training-coordinators/training-coordinators', trainingCoordinatorsRoutes);
router.use('/training-coordinators/training-plan', trainingPlanRoutes);

//      USER AUTH
router.use('/auth', userAuth);
router.use('/user/address', addressRoutes);
router.use('/units/address', unitsRoutes);


module.exports = router;
