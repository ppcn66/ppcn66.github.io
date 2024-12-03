import React from "react";
import "./Dashboard.css";
import Donut from "./Donut/Donut";
import Barchart from "./Barchart/Barchart";
import Card from "./Card/Card";
import Linechart from "./Linechart/Linechart";


const Dashboard = () => {
  //Line chart
  const data = {
    labels: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
    datasets: [
      {
        label: "กลุ่ม A",
        data: [12, 15, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
      {
        label: "กลุ่ม B",
        data: [20, 25, 23, 27, 22, 35, 38, 42, 40, 48, 50, 53],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "กลุ่ม C",
        data: [8, 10, 15, 12, 18, 25, 22, 28, 35, 30, 40, 45],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "สถิติการใช้งานข้อมูลรายเดือน",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "จำนวนการใช้งาน (ครั้ง)",
        },
      },
      x: {
        title: {
          display: true,
          text: "เดือน",
        },
      },
    },
  };


  //bar chart
  const categories = [
    { name: "ประเภทที่1", count: 12 },
    { name: "ประเภทที่2", count: 8 },
    { name: "ประเภทที่3", count: 15 },
    { name: "ประเภทที่3", count: 10 },
    { name: "ประเภทที่4", count: 6 },
    { name: "ประเภทที่5", count: 9 },
    { name: "ประเภทที่6", count: 11 },
    
  ];

  return (
    <div className="main-dashboard">
      <h1 className="title-dashboard">สถิติทั้งหมด</h1>

      <div className="dashboard-container">
        <div className="pie-chart">
          <Donut usedSpace={30} totalSpace={100} />
        </div>

        <div className="card-container">
          <Card />
        </div>

        <div className="bar-chart">
          <Barchart categories={categories} />
        </div>

        <div className="line-chart">
          <Linechart data={data} options={options}  />
        </div>


        
      </div>
    </div>
  );
};

export default Dashboard;

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Dashboard = () => {
//   const data = {
//     labels: ["Category A", "Category B", "Category C"],
//     datasets: [
//       {
//         label: "Categories",
//         data: [300, 200, 100], // ข้อมูลสำหรับแต่ละหมวดหมู่
//         backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // สีสำหรับแต่ละหมวดหมู่
//         hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // สีเมื่อ hover
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//   };

//   return (
//     <div className="pie">
//       <span className="title-dashboard">สถิติทั้งหมด</span>
//       <Pie data={data} options={options} />
//     </div>
//   );
// };

// export default Dashboard;
