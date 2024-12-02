import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getTerminationReason } from "../../api";
import { setTerminationReason } from "../../store/slices/Turnover/terminationReasonSlice";

const Chart6 = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");
  const { terminationReason } = useSelector(
    (state: RootState) => state.terminationReasonReducer
  );
  const handleGetTerminationReason = async (filteredMonth: string = "") => {
    try {
      let res = await getTerminationReason(filteredMonth);
      dispatch(setTerminationReason(res.data));
    } catch (error) {
      console.log("error getPositionProportions: ", error);
    }
  };

  useEffect(() => {
    handleGetTerminationReason(filteredMonth);
  }, [filteredMonth]);

  const options: ApexOptions = {
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    grid: {
      strokeDashArray: 3,
      padding: { top: -20, bottom: -8, left: -10, right: 8 },
    },
    xaxis: { labels: { show: !1 } },
    yaxis: { labels: { show: !1 } },
  };
  return (
    <div>
      <h6>Termination by reason ({terminationReason[0]?.calculated_date})</h6>
      <Chart
        options={options}
        series={[
          {
            name: "Terminations",
            data: terminationReason.map((x) => {
              return {
                x: x.name,
                y: x.value,
              };
            }),
          },
        ]}
        type="bar"
        height={215}
      />
    </div>
  );
};

export default Chart6;
