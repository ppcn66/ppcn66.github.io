import "./Linechart.css"
import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);



const Linechart = ({ data, options }) => {
  return (
    <div className="chart-container " style={{ width: "1420px" , height: "350px" }}>
       <Line data={data} options={options} />
    </div>
  );
};

export default Linechart;