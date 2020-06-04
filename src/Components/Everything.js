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
  const graph = [
    { appliedJobs: allData.appliedJobs },
    { rejected: allData.rejected },
    { interviews: allData.interviews },
    { offers: allData.offers },
    { turnedDown: allData.turnedDown },
    { Days: allData.Days },
  ];
  return (
    <div className="everything">
      <form className="form" onSubmit={updateData}>
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
          className="input"
          required
        />
      </form>
      <AreaChart
        className="AreaChart"
        width={800}
        height={700}
        data={graph}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis dataKey="appliedJobs" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="offers"
          stackId="1"
          stroke="#8884d8"
          fill="red"
        />
        <Area
          type="monotone"
          dataKey="interviews"
          stackId="1"
          stroke="#82ca9d"
          fill="orange"
        />
        <Area
          type="monotone"
          dataKey="rejected"
          stackId="1"
          stroke="#ffc66"
          fill="yellow"
        />
        <Area
          type="monotone"
          dataKey="turnedDown"
          stackId="1"
          stroke="#ffc658"
          fill="green"
        />
        <Area
          type="monotone"
          dataKey="Days"
          stackId="1"
          stroke="#ffc658"
          fill="blue"
        />
      </AreaChart>
    </div>
  );
}
