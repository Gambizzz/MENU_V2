import React from "react";
import { useTranslation } from "react-i18next";



const Concept = () => {
  const { t } = useTranslation();

    return(
        <>
        <div className="page-header">
          <h1 className="title-pages"> {t('conceptTitle')} </h1>
          <h2> {t('sloganConcept')} </h2>
        </div>
        </>
    )
}

export default Concept;