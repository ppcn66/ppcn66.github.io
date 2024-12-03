import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import "./Donut.css";

const Donut = ({ usedSpace, totalSpace }) => {
  const remainingSpace = totalSpace - usedSpace;
  const usedPercentage = ((usedSpace / totalSpace) * 100).toFixed(1);

  const data = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        data: [usedSpace, remainingSpace],
        backgroundColor: ["#8979FF", "#E0E0E0"],
        hoverBackgroundColor: ["#6753ff", "#D6D6D6"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "40%", // ทำให้วงกลมเป็นแบบกลวง
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw} GB`,
        },
      },
    },
  };

  return (
    <div className="storage-chart-container">
      <div className="chart-wrapper">
        <Doughnut data={data} options={options} />
        <div className="chart-center-text">
          <p className="percentage">{usedPercentage}%</p>
          <p className="space-info">
            {usedSpace} GB / {totalSpace} GB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donut;
