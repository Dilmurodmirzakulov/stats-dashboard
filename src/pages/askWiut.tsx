import React, { useState } from "react";
import AverageTimeCallChart from "../components/stats/AskWIUT/AverageTimeCallChart";
import FrequentInquiriesByCategoryChart from "../components/stats/AskWIUT/FrequentInquiriesByCategoryChart";
import BotInquiriesChart from "../components/stats/AskWIUT/BotInquiriesChart";
import FrequentInquiriesCenterChart from "../components/stats/AskWIUT/FrequentInquiriesCenterChart";
import CallCenterInquiriesByCategoryChart from "../components/stats/AskWIUT/CallCenterInquiriesByCategoryChart";
import WeeklyCallsCenterChart from "../components/stats/AskWIUT/WeeklyCallsCenterChart";
import HourlyCallsCenterChart from "../components/stats/AskWIUT/HourlyCallsCenterChart";
import YearlyTotalMinCallsChart from "../components/stats/AskWIUT/YearlyTotalMinCallsChart";
import YearlyCallsCenterChart from "../components/stats/AskWIUT/YearlyCallsCenterChart";
import WeeklyCustomersCenterChart from "../components/stats/AskWIUT/WeeklyCustomersCenterChart";
import BotInquiriesTrendChart from "../components/stats/AskWIUT/BotInquiriesTrendChart";
import CallCenterInquiriesByCategoryTrendChart from "../components/stats/AskWIUT/CallCenterInquiriesByCategoryTrendChart";
import FrequentInquiriesByCategoryTrendChart from "../components/stats/AskWIUT/FrequentInquiriesByCategoryTrendChart";
import FrequentInquiriesCenterTrendChart from "../components/stats/AskWIUT/FrequentInquiriesCenterTrendChart";
import HourlyCallsCenterTrendChart from "../components/stats/AskWIUT/HourlyCallsCenterTrendChart";
import WeeklyCallsCenterTrendChart from "../components/stats/AskWIUT/WeeklyCallsCenterTrendChart";
import WeeklyCustomersCenterTrendChart from "../components/stats/AskWIUT/WeeklyCustomersCenterTrendChart";
import NumberOfInquiriesByTypeChart from "../components/stats/AskWIUT/NumberOfInquiriesByTypeChart";
import NumberOfInquiriesByTypeTrendChart from "../components/stats/AskWIUT/NumberOfInquiriesByTypeTrendChart";

const AskWiut = () => {
  const [isShow1, setIsShow1] = useState<boolean>(false);
  const [isShow3, setIsShow3] = useState<boolean>(false);
  const [isShow4, setIsShow4] = useState<boolean>(false);
  const [isShow5, setIsShow5] = useState<boolean>(false);
  const [isShow6, setIsShow6] = useState<boolean>(false);
  const [isShow7, setIsShow7] = useState<boolean>(false);
  const [isShow8, setIsShow8] = useState<boolean>(false);
  const [isShow9, setIsShow9] = useState<boolean>(false);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Information and Customer Services</h4>
      </div>
      <div className="row g-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">
                  Inquiries for ASK WIUT Centre by Type of Inquiries (%){" "}
                  {isShow1 ? "trend" : ""}
                </h4>
                {isShow1 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsShow1(false)}
                  >
                    Hide trend
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsShow1(true)}
                  >
                    Show trend
                  </button>
                )}
              </div>
              {!isShow1 ? (
                <NumberOfInquiriesByTypeChart />
              ) : (
                <NumberOfInquiriesByTypeTrendChart />
              )}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">
                  Most Frequent Inquiries by inquiry category - Statistics from
                  BITRIX (%) {isShow3 ? "trend" : ""}
                </h4>
                {isShow3 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsShow3(false)}
                  >
                    Hide trend
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsShow3(true)}
                  >
                    Show trend
                  </button>
                )}
              </div>
              {!isShow3 ? (
                <FrequentInquiriesByCategoryChart />
              ) : (
                <FrequentInquiriesByCategoryTrendChart />
              )}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">
                  Percentage of ask.wiut bot inquiries by month{" "}
                  {isShow4 ? "trend" : ""}
                </h4>
                {isShow4 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsShow4(false)}
                  >
                    Hide trend
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsShow4(true)}
                  >
                    Show trend
                  </button>
                )}
              </div>
              {!isShow4 ? <BotInquiriesChart /> : <BotInquiriesTrendChart />}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">
                  Most Frequent Inquiries by Category for the Inquiry Centre (%){" "}
                  {isShow5 ? "trend" : ""}
                </h4>
                {isShow5 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsShow5(false)}
                  >
                    Hide trend
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsShow5(true)}
                  >
                    Show trend
                  </button>
                )}
              </div>
              {!isShow5 ? (
                <FrequentInquiriesCenterChart />
              ) : (
                <FrequentInquiriesCenterTrendChart />
              )}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">
                  Call Centre Inquiries by Category: Percentage Breakdown{" "}
                  {isShow6 ? "trend" : ""}
                </h4>
                {isShow6 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsShow6(false)}
                  >
                    Hide trend
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsShow6(true)}
                  >
                    Show trend
                  </button>
                )}
              </div>
              {!isShow6 ? (
                <CallCenterInquiriesByCategoryChart />
              ) : (
                <CallCenterInquiriesByCategoryTrendChart />
              )}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">
                  Weekly number of calls for the Call Centre{" "}
                  {isShow7 ? "trend" : ""}
                </h4>
                {isShow7 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsShow7(false)}
                  >
                    Hide trend
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsShow7(true)}
                  >
                    Show trend
                  </button>
                )}
              </div>
              {!isShow7 ? (
                <WeeklyCallsCenterChart />
              ) : (
                <WeeklyCallsCenterTrendChart />
              )}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">
                  Hourly Number of Calls for the Call Centre{" "}
                  {isShow8 ? "trend" : ""}
                </h4>
                {isShow8 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsShow8(false)}
                  >
                    Hide trend
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsShow8(true)}
                  >
                    Show trend
                  </button>
                )}
              </div>
              {!isShow8 ? (
                <HourlyCallsCenterChart />
              ) : (
                <HourlyCallsCenterTrendChart />
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <AverageTimeCallChart />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <YearlyTotalMinCallsChart />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <YearlyCallsCenterChart />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h4 className="mb-0">
                  Weekly Number of Customers for the Inquiry Centre{" "}
                  {isShow9 ? "trend" : ""}
                </h4>
                {isShow9 ? (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsShow9(false)}
                  >
                    Hide trend
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsShow9(true)}
                  >
                    Show trend
                  </button>
                )}
              </div>
              {!isShow9 ? (
                <WeeklyCustomersCenterChart />
              ) : (
                <WeeklyCustomersCenterTrendChart />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskWiut;
