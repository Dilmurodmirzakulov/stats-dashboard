import { combineReducers } from "@reduxjs/toolkit";
import departmentsSlice from "./slices/EmployeeOverview/departmentsSlice";
import departmentProportionsSlice from "./slices/EmployeeOverview/departmentProportionsSlice";
import positionsSlice from "./slices/EmployeeOverview/positionsSlice";
import positionProportionsSlice from "./slices/EmployeeOverview/positionProportionsSlice";
import contractDistributionSlice from "./slices/EmployeeOverview/contractDistributionSlice";
import shiftDistributionSlice from "./slices/EmployeeOverview/shiftDistributionSlice";
import agesSlice from "./slices/EmployeeOverview/agesSlice";
import averageAgesSlice from "./slices/EmployeeOverview/averageAgesSlice";
import genderSlice from "./slices/EmployeeOverview/genderSlice";
import employeeStatsSlice from "./slices/EmployeeOverview/employeeStatsSlice";
import yearsWithUniversitySlice from "./slices/EmployeeExperience/yearsWithUniversitySlice";
import averageExperienceCategorySlice from "./slices/EmployeeExperience/averageExperienceCategorySlice";
import averageExperienceDepartmentSlice from "./slices/EmployeeExperience/averageExperienceDepartmentSlice";
import StaffCategoryGenderSlice from "./slices/EmployeeDemographics/staffCategoryGenderSlice";
import StaffNationalitySlice from "./slices/EmployeeDemographics/staffNationalitySlice";
import StaffPositionSlice from "./slices/EmployeeDemographics/staffPositionSlice";
import ageGroupsSlice from "./slices/EmployeeDemographics/ageGroupsSlice";
import staffByCategorySlice from "./slices/EmployeeDemographics/staffByCategorySlice";
import terminationYearsSlice from "./slices/Turnover/terminationYearsSlice";
import terminationMonthsSlice from "./slices/Turnover/terminationMonthsSlice";
import terminationRateCategorySlice from "./slices/Turnover/terminationRateCategorySlice";
import terminationReasonSlice from "./slices/Turnover/terminationReasonSlice";
import activeUsersSlice from "./slices/DMS/activeUsersSlice";
import averageTimeApproveSlice from "./slices/DMS/averageTimeApproveSlice";
import docsByTypeSlice from "./slices/DMS/docsByTypeSlice";
import docsPendingApprovalSlice from "./slices/DMS/docsPendingApprovalSlice";
import docsStatusDistSlice from "./slices/DMS/docsStatusDistSlice";
import topTenSignedPersonelSlice from "./slices/DMS/topTenSignedPersonelSlice";
import totalDocsPerMonthSlice from "./slices/DMS/totalDocsPerMonthSlice";
import totalDocsPerYearSlice from "./slices/DMS/totalDocsPerYearSlice";
import openPositionsSlice from "./slices/Recruitment/openPositionsSlice";
import offersSlice from "./slices/Recruitment/offersSlice";
import timeHireByCategorySlice from "./slices/Recruitment/timeHireByCategorySlice";
import interviewsByCategorySlice from "./slices/Recruitment/interviewsByCategorySlice";
import hiredCandidatesSlice from "./slices/Recruitment/hiredCandidatesSlice";
import offersAcceptanceSlice from "./slices/Recruitment/offersAcceptanceSlice";
import positionFilledByCategorySlice from "./slices/Recruitment/positionFilledByCategorySlice";
import readvertisedPositionsSlice from "./slices/Recruitment/readvertisedPositionsSlice";
import AverageTimeCallSlice from "./slices/AskWIUT/AverageTimeCallSlice";
import BotInquiriesSlice from "./slices/AskWIUT/BotInquiriesSlice";
import CallCenterInquiriesByCategorySlice from "./slices/AskWIUT/CallCenterInquiriesByCategorySlice";
import FrequentInquiriesByCategorySlice from "./slices/AskWIUT/FrequentInquiriesByCategorySlice";
import FrequentInquiriesCenterSlice from "./slices/AskWIUT/FrequentInquiriesCenterSlice";
import HourlyCallsCenterSlice from "./slices/AskWIUT/HourlyCallsCenterSlice";
import NumberOfInquiriesByTypeSlice from "./slices/AskWIUT/NumberOfInquiriesByTypeSlice";
import WeeklyCallsCenterSlice from "./slices/AskWIUT/WeeklyCallsCenterSlice";
import WeeklyCustomersCenterSlice from "./slices/AskWIUT/WeeklyCustomersCenterSlice";
import YearlyCallsCenterSlice from "./slices/AskWIUT/YearlyCallsCenterSlice";
import YearlyTotalMinCallsSlice from "./slices/AskWIUT/YearlyTotalMinCallsSlice";
import BotInquiriesTrendSlice from "./slices/AskWIUT/BotInquiriesTrendSlice";
import CallCenterInquiriesByCategoryTrendSlice from "./slices/AskWIUT/CallCenterInquiriesByCategoryTrendSlice";
import FrequentInquiriesByCategoryTrendSlice from "./slices/AskWIUT/FrequentInquiriesByCategoryTrendSlice";
import FrequentInquiriesCenterTrendSlice from "./slices/AskWIUT/FrequentInquiriesCenterTrendSlice";
import HourlyCallsCenterTrendSlice from "./slices/AskWIUT/HourlyCallsCenterTrendSlice";
import NumberOfInquiriesByTypeTrendSlice from "./slices/AskWIUT/NumberOfInquiriesByTypeTrendSlice";
import WeeklyCallsCenterTrendSlice from "./slices/AskWIUT/WeeklyCallsCenterTrendSlice";
import WeeklyCustomersCenterTrendSlice from "./slices/AskWIUT/WeeklyCustomersCenterTrendSlice";
import TrendYearsNamesSlice from "./slices/AskWIUT/TrendYearsNamesSlice";
import NumberOfInquiriesByTypeCategorySlice from "./slices/AskWIUT/NumberOfInquiriesByTypeCategorySlice";

const rootReducer = combineReducers({
  departmentsReducer: departmentsSlice,
  departmentProportionsReducer: departmentProportionsSlice,
  positionsReducer: positionsSlice,
  positionProportionsReducer: positionProportionsSlice,
  contractDistributionReducer: contractDistributionSlice,
  shiftDistributionReducer: shiftDistributionSlice,
  agesReducer: agesSlice,
  averageAgesReducer: averageAgesSlice,
  gendersReducer: genderSlice,
  employeeStatsReducer: employeeStatsSlice,
  yearsWithUniversityReducer: yearsWithUniversitySlice,
  averageExperienceCategoryReducer: averageExperienceCategorySlice,
  averageExperienceDepartmentReducer: averageExperienceDepartmentSlice,
  staffCategoryGenderReducer: StaffCategoryGenderSlice,
  staffNationalityReducer: StaffNationalitySlice,
  staffPositionReducer: StaffPositionSlice,
  ageGroupsReducer: ageGroupsSlice,
  staffByCategoryReducer: staffByCategorySlice,
  terminationYearsReducer: terminationYearsSlice,
  terminationMonthsReducer: terminationMonthsSlice,
  terminationRateCategoryReducer: terminationRateCategorySlice,
  terminationReasonReducer: terminationReasonSlice,
  activeUsersReducer: activeUsersSlice,
  averageTimeApproveReducer: averageTimeApproveSlice,
  docsByTypeReducer: docsByTypeSlice,
  docsPendingApprovalReducer: docsPendingApprovalSlice,
  docsStatusDistReducer: docsStatusDistSlice,
  topTenSignedPersonelReducer: topTenSignedPersonelSlice,
  totalDocsPerMonthReducer: totalDocsPerMonthSlice,
  totalDocsPerYearReducer: totalDocsPerYearSlice,
  openPositionsReducer: openPositionsSlice,
  offersReducer: offersSlice,
  timeHireByCategoryReducer: timeHireByCategorySlice,
  interviewsByCategoryReducer: interviewsByCategorySlice,
  hiredCandidatesReducer: hiredCandidatesSlice,
  offersAcceptanceReducer: offersAcceptanceSlice,
  positionFilledByCategoryReducer: positionFilledByCategorySlice,
  readvertisedPositionsReducer: readvertisedPositionsSlice,
  averageTimeCallReducer: AverageTimeCallSlice,
  botInquiriesReducer: BotInquiriesSlice,
  callCenterInquiriesByCategoryReducer: CallCenterInquiriesByCategorySlice,
  frequentInquiriesByCategoryReducer: FrequentInquiriesByCategorySlice,
  frequentInquiriesCenterReducer: FrequentInquiriesCenterSlice,
  hourlyCallsCenterReducer: HourlyCallsCenterSlice,
  numberOfInquiriesByTypeReducer: NumberOfInquiriesByTypeSlice,
  weeklyCallsCenterReducer: WeeklyCallsCenterSlice,
  weeklyCustomersCenterReducer: WeeklyCustomersCenterSlice,
  yearlyCallsCenterReducer: YearlyCallsCenterSlice,
  yearlyTotalMinCallsReducer: YearlyTotalMinCallsSlice,
  botInquiriesTrendReducer: BotInquiriesTrendSlice,
  callCenterInquiriesByCategoryTrendReducer:
    CallCenterInquiriesByCategoryTrendSlice,
  frequentInquiriesByCategoryTrendReducer:
    FrequentInquiriesByCategoryTrendSlice,
  frequentInquiriesCenterTrendReducer: FrequentInquiriesCenterTrendSlice,
  hourlyCallsCenterTrendReducer: HourlyCallsCenterTrendSlice,
  numberOfInquiriesByTypeTrendReducer: NumberOfInquiriesByTypeTrendSlice,
  weeklyCallsCenterTrendReducer: WeeklyCallsCenterTrendSlice,
  weeklyCustomersCenterTrendReducer: WeeklyCustomersCenterTrendSlice,
  trendYearsNamesReducer: TrendYearsNamesSlice,
  numberOfInquiriesByTypeCategoryReducer: NumberOfInquiriesByTypeCategorySlice,
});

export default rootReducer;
