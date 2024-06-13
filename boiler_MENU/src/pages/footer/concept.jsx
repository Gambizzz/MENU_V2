import React from "react";
import { useTranslation } from "react-i18next";



const Concept = () => {
  const { t } = useTranslation();

    return(
        <>
        <h1> {t('conceptTitle')} </h1>
        </>
    )
}

export default Concept;