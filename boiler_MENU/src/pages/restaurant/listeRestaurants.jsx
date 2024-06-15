import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";

const Restaurants = () => {
  const { t } = useTranslation();
  
    return(
        <>
        <h1 className="title-pages"> {t('titleRestau')} </h1>
        <Link to="/details" > <p> VOIR le resto!!! </p> </Link>
        </>
    )
}

export default Restaurants;