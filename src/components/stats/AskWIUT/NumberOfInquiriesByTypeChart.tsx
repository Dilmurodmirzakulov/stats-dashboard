import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  getNumberOfInquiriesByType,
  getNumberOfInquiriesByTypeCategory,
} from "../../../api";
import { setNumberOfInquiriesByTypeCategory } from "../../../store/slices/AskWIUT/NumberOfInquiriesByTypeCategorySlice";
import { setNumberOfInquiriesByType } from "../../../store/slices/AskWIUT/NumberOfInquiriesByTypeSlice";

const NumberOfInquiriesByTypeChart = () => {
  const dispatch = useDispatch();
  const [filteredMonth, setFilteredMonth] = useState("");
  const { numberOfInquiriesByType } = useSelector(
    (state: RootState) => state.numberOfInquiriesByTypeReducer
  );
  const { numberOfInquiriesByTypeCategory } = useSelector(
    (state: RootState) => state.numberOfInquiriesByTypeCategoryReducer
  );

  const handleGetNumberOfInquiriesByType = async (
    filteredMonth: string = ""
  ) => {
    try {
      let res = await getNumberOfInquiriesByType(filteredMonth);
      dispatch(setNumberOfInquiriesByType(res.data));
    } catch (error) {
      console.log("getNumberOfInquiriesByType error:", error);
    }
  };
  const handleGetNumberOfInquiriesByTypeCategory = async () => {
    try {
      const res = await getNumberOfInquiriesByTypeCategory();
      dispatch(setNumberOfInquiriesByTypeCategory(res.data));
    } catch (error) {
      console.log("getNumberOfInquiriesByTypeCategory error:", error);
    }
  };
  useEffect(() => {
    handleGetNumberOfInquiriesByType(filteredMonth);
    handleGetNumberOfInquiriesByTypeCategory();
  }, [filteredMonth]);

  return (
    <div>
      <div className="col-md-6 mb-3">
        <label className="form-label" htmlFor="calculated-month">
          Calculated month
        </label>
        <input
          onChange={(e) => setFilteredMonth(e.target.value)}
          value={filteredMonth}
          className="form-control"
          type="month"
        />
      </div>
      <Table striped hover responsive className="mb-5">
        <thead className="wu-table-head">
          <tr>
            <th>Category</th>
            <th>September</th>
            <th>October</th>
            <th>November</th>
            <th>December</th>
            <th>January</th>
            <th>February</th>
            <th>March</th>
            <th>April</th>
            <th>May</th>
            <th>June</th>
          </tr>
        </thead>
        <tbody>
          {numberOfInquiriesByTypeCategory.map((x) => {
            const items = numberOfInquiriesByType.filter(
              (y) => y.category_id == x.id
            );
            return (
              <tr key={"numberOfInquiriesByTypechart-category-" + x.id}>
                <td className="wu-table-first-col">{x.name}</td>
                <td>{items.find((y) => y.name === "September")?.value}</td>
                <td>{items.find((y) => y.name === "October")?.value}</td>
                <td>{items.find((y) => y.name === "November")?.value}</td>
                <td>{items.find((y) => y.name === "December")?.value}</td>
                <td>{items.find((y) => y.name === "January")?.value}</td>
                <td>{items.find((y) => y.name === "February")?.value}</td>
                <td>{items.find((y) => y.name === "March")?.value}</td>
                <td>{items.find((y) => y.name === "April")?.value}</td>
                <td>{items.find((y) => y.name === "May")?.value}</td>
                <td>{items.find((y) => y.name === "June")?.value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default NumberOfInquiriesByTypeChart;
