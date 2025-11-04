import React from "react";

const Home: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bài thực hành 02</h1>
      <p>Áp dụng các kiến thức React: Props, State, Lifecycle, Axios, TypeScript, React Router.</p>
      <ul style={{ listStyle: "none", padding: 0, marginTop: 20 }}>
        <li> web thời tiết</li>
        <li> web danh sách sinh viên</li>
        <li> web xem tin tức</li>
      </ul>
      <p style={{ marginTop: 30, color: "#666" }}>— Sinh viên: B24DCCC073 —</p>
    </div>
  );
};

export default Home;
