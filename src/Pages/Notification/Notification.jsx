import React from "react";
import { useState } from "react";
import "./Notification.css";
import Header from "../../layouts/Header/Header";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "คุณมีเอกสารใหม่รอการตรวจสอบ", isRead: false },
    { id: 2, text: "การอนุมัติคำขอเสร็จสมบูรณ์", isRead: true },
    { id: 3, text: "โปรดอัปเดตข้อมูลของคุณ", isRead: false },
    { id: 4, text: "ขอลาออกครับ", isRead: false },
    { id: 5, text: "คุณมีคำขอการสร้างโฟลเดอร์ใหม่", isRead: false },
    { id: 6, text: "โปรดอัปเดตข้อมูลของคุณ", isRead: false },
    { id: 7, text: "ขอลาออกครับ", isRead: false },
  
  ]);

  // ฟังก์ชันสำหรับการเปลี่ยนสถานะการแจ้งเตือน
  const handleMarkAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  return (
    <div>
      <Header />

      <div className="main-notification">
        <div className="notification-container">
          <ul className="notification-list">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`notification-item ${
                  notification.isRead ? "read" : "unread"
                }`}
                onClick={() => handleMarkAsRead(notification.id)}
              >
                {notification.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
