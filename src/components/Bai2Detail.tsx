import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

interface StudentDetailType {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const StudentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [student, setStudent] = useState<StudentDetailType | null>(null);

  useEffect(() => {
    axios
      .get<StudentDetailType>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setStudent(res.data))
      .catch(() => alert("Lỗi khi tải thông tin chi tiết"));
  }, [id]);

  return (
    <div className="page-container">
      <Link to="/students">⬅ Quay lại danh sách</Link>
      {student ? (
        <div>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Phone: {student.phone}</p>
          <p>Website: {student.website}</p>
        </div>
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
};

export default StudentDetail;
