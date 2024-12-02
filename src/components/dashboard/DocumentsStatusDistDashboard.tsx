import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getDocsStatusDist, getDocsStatusDistLatest } from "../../api";
import { setDocsStatusDist } from "../../store/slices/DMS/docsStatusDistSlice";

const DocumentsStatusDistDashboard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<null | any>(null);
  const [filteredMonth, setFilteredMonth] = useState("");

  const { docsStatusDist } = useSelector(
    (state: RootState) => state.docsStatusDistReducer
  );
  const handleGetDocsStatusDist = async (filteredMonth: string = "") => {
    try {
      let res = await getDocsStatusDist(filteredMonth);
      dispatch(setDocsStatusDist(res.data));
    } catch (error) {
      console.log("error getDocsStatusDist: ", error);
    }
  };

  const handleGetLastReports = async () => {
    try {
      const res = await getDocsStatusDistLatest();
      if (res.data && res.data.length > 0)
        return setFilteredMonth(res.data[0].calculated_date);
      setFilteredMonth("");
    } catch (error) {
      console.log("error getDocsStatusDistLatest: ", error);
    }
  };

  useEffect(() => {
    handleGetDocsStatusDist(filteredMonth);
  }, [filteredMonth]);

  useEffect(() => {
    handleGetLastReports();
  }, []);

  return (
    <div>
      <div className="text-center fw-medium pt-3 mb-2">
        Document Status Distribution <br />(
        {docsStatusDist &&
          docsStatusDist.length > 0 &&
          docsStatusDist[0].calculated_date}
        )
      </div>
      <div className="row g-3">
        {docsStatusDist &&
          docsStatusDist.length > 0 &&
          docsStatusDist.map((x, idx) => (
            <div
              className="col-6"
              key={"dms-dashbord-doc-type-dist-item-" + idx}
            >
              <div className="d-flex">
                <div className="avatar flex-shrink-0 me-2">
                  <span
                    className={`avatar-initial rounded bg-label-${
                      (x.name == "In review" && "info") ||
                      (x.name == "Approved" && "primary") ||
                      (x.name == "Rejected" && "danger") ||
                      (x.name == "Dissmissed" && "warning") ||
                      (idx == 1 && "info") ||
                      (idx == 1 && "primary") ||
                      (idx == 2 && "danger") ||
                      (idx == 3 && "warning") ||
                      (idx == 4 && "primary") ||
                      (idx == 5 && "warning") ||
                      (idx == 6 && "danger") ||
                      (idx == 7 && "primary") ||
                      (idx == 8 && "warning") ||
                      (idx == 9 && "danger") ||
                      (idx == 10 && "info") ||
                      (idx == 11 && "primary") ||
                      (idx == 12 && "warning") ||
                      (idx > 13 && "danger")
                    }`}
                  >
                    {x.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="d-flex flex-column">
                  <small>{x.name}</small>
                  <h6 className="mb-0">{x.value}</h6>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DocumentsStatusDistDashboard;
