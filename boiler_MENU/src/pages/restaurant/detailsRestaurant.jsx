// src/components/Details.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import '../../index.scss';

const Details = () => {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchText();
  }, []);

  const fetchText = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/latest-text");
      if (!response.ok) {
        throw new Error("Failed to fetch text");
      }
      const data = await response.json();
      setText(data.text);
    } catch (error) {
      console.error("Error fetching text:", error);
      setError("Failed to fetch text");
    }
  };

  return (
    <div className="card-fromeditor">
      <h1><strong>{t("MON RESTAURANT")}</strong></h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      )}
    </div>
  );
};

export default Details;

