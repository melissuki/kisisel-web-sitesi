import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../api/axios";
import { content, skills, projects } from "../data/data";

export default function useWorkintechData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const promise = api.post("/posts", { content, skills, projects });
    toast
      .promise(promise, {
        pending: "Veriler gönderiliyor...",
        success: "Veriler başarıyla alındı!",
        error: "Bir hata oluştu, lütfen tekrar deneyin",
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error("API hatası:", err));
  }, []);

  return data;
}