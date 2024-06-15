import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

    return(
        <>
        <div className="page-header">
          <h1 className="title-pages"> {t('contactTitle')} </h1>
          <h2> {t('contact-slogan')} </h2>
        </div>
        </>
    )
}

export default Contact;