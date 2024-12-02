import React from "react";
import AverageTimeCallTable from "../../components/hrForms/AskWIUT/AverageTimeCallTable";
import FrequentInquiriesByCategoryTable from "../../components/hrForms/AskWIUT/FrequentInquiriesByCategoryTable";
import BotInquiriesTable from "../../components/hrForms/AskWIUT/BotInquiriesTable";
import FrequentInquiriesCenterTable from "../../components/hrForms/AskWIUT/FrequentInquiriesCenterTable";
import CallCenterInquiriesByCategoryTable from "../../components/hrForms/AskWIUT/CallCenterInquiriesByCategoryTable";
import WeeklyCallsCenterTable from "../../components/hrForms/AskWIUT/WeeklyCallsCenterTable";
import HourlyCallsCenterTable from "../../components/hrForms/AskWIUT/HourlyCallsCenterTable";
import YearlyTotalMinCallsTable from "../../components/hrForms/AskWIUT/YearlyTotalMinCallsTable";
import YearlyCallsCenterTable from "../../components/hrForms/AskWIUT/YearlyCallsCenterTable";
import WeeklyCustomersCenterTable from "../../components/hrForms/AskWIUT/WeeklyCustomersCenterTable";
import BotInquiriesTrendTable from "../../components/hrForms/AskWIUT/BotInquiriesTrendTable";
import FrequentInquiriesByCategoryTrendTable from "../../components/hrForms/AskWIUT/FrequentInquiriesByCategoryTrendTable";
import FrequentInquiriesCenterTrendTable from "../../components/hrForms/AskWIUT/FrequentInquiriesCenterTrendTable";
import CallCenterInquiriesByCategoryTrendTable from "../../components/hrForms/AskWIUT/CallCenterInquiriesByCategoryTrendTable";
import WeeklyCallsCenterTrendTable from "../../components/hrForms/AskWIUT/WeeklyCallsCenterTrendTable";
import HourlyCallsCenterTrendTable from "../../components/hrForms/AskWIUT/HourlyCallsCenterTrendTable";
import WeeklyCustomersCenterTrendTable from "../../components/hrForms/AskWIUT/WeeklyCustomersCenterTrendTable";
import TrendYearsNamesTable from "../../components/hrForms/AskWIUT/TrendYearsNamesTable";
import NumberOfInquiriesByTypeCategoryTable from "../../components/hrForms/AskWIUT/NumberOfInquiriesByTypeCategoryTable";
import NumberOfInquiriesByTypeTable from "../../components/hrForms/AskWIUT/NumberOfInquiriesByTypeTable";
import NumberOfInquiriesByTypeTrendTable from "../../components/hrForms/AskWIUT/NumberOfInquiriesByTypeTrendTable";

const AskWIUTForms = () => {
  return (
    <>
      <div className="row g-4">
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Trend years names table</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <TrendYearsNamesTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">
              Most Frequent Inquiries by inquiry category - Statistics from
              BITRIX (%){" "}
            </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <FrequentInquiriesByCategoryTable />
              <h5 className="mt-5 mb-0">Trend</h5>
              <FrequentInquiriesByCategoryTrendTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">
              Percentage of ask.wiut bot inquiries by month
            </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <BotInquiriesTable />
              <h5 className="mt-5 mb-0">Trend</h5>
              <BotInquiriesTrendTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">
              Most Frequent Inquiries by Category for the Inquiry Centre (%)
            </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <FrequentInquiriesCenterTable />
              <h5 className="mt-5 mb-0">Trend</h5>
              <FrequentInquiriesCenterTrendTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">
              Call Centre Inquiries by Category: Percentage Breakdown
            </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <CallCenterInquiriesByCategoryTable />
              <h5 className="mt-5 mb-0">
                Trend
                <CallCenterInquiriesByCategoryTrendTable />
              </h5>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Weekly number of calls for the Call Centre</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <WeeklyCallsCenterTable />
              <h5 className="mt-5 mb-0">Trend</h5>
              <WeeklyCallsCenterTrendTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Hourly Number of Calls for the Call Centre</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <HourlyCallsCenterTable />
              <h5 className="mt-5 mb-0">Trend</h5>
              <HourlyCallsCenterTrendTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Average Time Spent per Call (minutes)</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <AverageTimeCallTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Yearly Total Minutes Spent on Calls </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <YearlyTotalMinCallsTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Yearly Number of Calls for the Call Centre</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <YearlyCallsCenterTable />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">
              Weekly Number of Customers for the Inquiry Centre
            </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <WeeklyCustomersCenterTable />
              <h5 className="mt-5 mb-0">Trend</h5>
              <WeeklyCustomersCenterTrendTable />
            </div>
          </div>
        </div>
        <h4 className="mb-0">
          Inquiries for ASK WIUT Centre by Type of Inquiries (%)
        </h4>
        <div className="col-md-4">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0">Categories</h4>
          </div>
          <div className="card">
            <div className="card-body">
              <NumberOfInquiriesByTypeCategoryTable />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="d-flex mb-3 align-items-center justify-content-between">
            <h4 className="mb-0" style={{ color: "transparent" }}>
              a
            </h4>
          </div>
          <div className="card">
            <div className="card-body">
              <NumberOfInquiriesByTypeTable />
            </div>
          </div>
        </div>
        <h5 className="mt-5 mb-0">Trend</h5>
        <div className="card">
          <div className="card-body">
            <NumberOfInquiriesByTypeTrendTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default AskWIUTForms;
