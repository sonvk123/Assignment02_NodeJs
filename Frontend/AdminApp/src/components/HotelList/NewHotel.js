import { useState, useEffect } from "react";

import FormInput from "./formInputNewHotel";

const NewHotel = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const showAlert = (message) => {
    window.alert(message);
  };
  const call_api = async (data_send) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/admin/postAddHotel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data_send), // Gửi dữ liệu data_search dưới dạng JSON
      });

      if (!res.ok) {
        const errorData = await res.json();
        const message = errorData.message;
        setError(message);
      } else {
        const data = await res.json();
        showAlert("Đã thêm khách sạn thành công");
        window.location.reload();
        setError(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formData = (data) => {
    call_api(data);
  };
  return <FormInput onChange={formData} />;
};
export default NewHotel;
