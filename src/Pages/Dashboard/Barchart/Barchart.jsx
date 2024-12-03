import React from 'react';
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

import './Barchart.css';

const Barchart = ({ categories }) => {
    
    const labels = categories.map((category) => category.name);
    const dataValues = categories.map((category) => category.count);
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: "จำนวนเอกสาร",
          data: dataValues,
          backgroundColor: [
            "#3CC3DF",
            "#8979FF",
            "#FF928A",
            "#FFAE4C",
          
          ],
          borderColor: [
            "#3CC3DF",
            "#8979FF",
            "#FF928A",
            "#FFAE4C",
          
          ],
          borderWidth: 1,
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.raw} เอกสาร`,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "หมวดหมู่เอกสาร",
          },
        },
        y: {
          title: {
            display: true,
            text: "จำนวนเอกสาร",
          },
          beginAtZero: true,
        },
      },
    };
  
    return (
      <div className="document-stats-container">
        <h2 className="chart-title">สถิติเอกสารตามหมวดหมู่</h2>
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default Barchart
