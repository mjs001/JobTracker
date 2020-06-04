import React, { useState, useEffect, setState, PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
export default function Everything() {
  const initialState = useState({
    appliedJobs: 0,
    rejected: 0,
    interviews: 0,
    offers: 0,
    turnedDown: 0,
    Days: 0,
  });
  const [allData, setAllData] = useState(initialState);
  const handleChanges = (e) => {
    e.preventDefault();
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };
  const updateData = (e) => {
    e.preventDefault();
    setAllData({
      appliedJobs: allData.appliedJobs,
      rejected: allData.rejected,
      interviews: allData.interviews,
      offers: allData.offers,
      turnedDown: allData.turnedDown,
      Days: allData.Days,
    });
  };
  return (
    <div>
      <form onSubmit={updateData}>
        <p># of Applied Jobs:</p>
        <input
          type="text"
          onChange={handleChanges}
          value={allData.appliedJobs}
          name="appliedJobs"
          required
        />
        <p># of Rejected Jobs:</p>
        <input
          type="text"
          onChange={handleChanges}
          value={allData.rejected}
          name="rejected"
          required
        />
        <p># of interviews:</p>
        <input
          type="text"
          onChange={handleChanges}
          value={allData.interviews}
          name="interviews"
          required
        />
        <p># of total offers:</p>
        <input
          type="text"
          onChange={handleChanges}
          value={allData.offers}
          name="offers"
          required
        />
        <p># of turned down jobs:</p>
        <input
          type="text"
          onChange={handleChanges}
          value={allData.turnedDown}
          name="turnedDown"
          required
        />
        <p># of days I have been searching for a job:</p>
        <input
          type="text"
          onChange={handleChanges}
          value={allData.Days}
          name="Days"
          required
        />
        <button type="submit">submit</button>
      </form>
      <chart></chart>
      <div className="allButtons">
        <button
          onClick={() =>
            setAllData({
              appliedJobs: parseInt(allData.appliedJobs, 10) + 1 || 0,
            })
          }
        >
          +1 applied
        </button>
        <button
          onClick={() =>
            setAllData({
              appliedJobs: parseInt(allData.appliedJobs, 10) - 1 || 0,
            })
          }
        >
          -1 applied
        </button>
        <button
          onClick={() =>
            setAllData({
              rejected: parseInt(allData.rejected, 10) + 1 || 0,
            })
          }
        >
          +1 rejected
        </button>
        <button
          onClick={() =>
            setAllData({
              rejected: parseInt(allData.rejected, 10) - 1 || 0,
            })
          }
        >
          -1 rejected
        </button>
        <button
          onClick={() =>
            setAllData({
              interviews: parseInt(allData.interviews, 10) + 1 || 0,
            })
          }
        >
          +1 interviews
        </button>
        <button
          onClick={() =>
            setAllData({
              interviews: parseInt(allData.interviews, 10) - 1 || 0,
            })
          }
        >
          -1 interviews
        </button>
        <button
          onClick={() =>
            setAllData({
              offers: parseInt(allData.offers, 10) + 1 || 0,
            })
          }
        >
          +1 offers
        </button>
        <button
          onClick={() =>
            setAllData({
              offers: parseInt(allData.offers, 10) - 1 || 0,
            })
          }
        >
          -1 offers
        </button>
        <button
          onClick={() =>
            setAllData({
              Days: parseInt(allData.Days, 10) - 1 || 0,
            })
          }
        >
          -1 # of days
        </button>
        <button
          onClick={() =>
            setAllData({
              Days: parseInt(allData.Days, 10) - 1 || 0,
            })
          }
        >
          -1 # of days
        </button>
      </div>
      <AreaChart
        width={800}
        height={500}
        data={allData}
        margin={{
          top: 10,
          right: 35,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={allData.Days} />
        <YAxis dataKey={allData.appliedJobs} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={allData.rejected}
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey={allData.offers}
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey={allData.interviews}
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </div>
  );
}
