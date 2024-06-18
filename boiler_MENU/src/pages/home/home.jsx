import { useTranslation } from "react-i18next";
import CitiesList from "../../components/cities";

const Home = () => {
  const { t } = useTranslation();
  
    return(
        <>
        <h1> PAGE D'ACCUEIL </h1>
        <CitiesList/>
        </>
    )
}

export default Home;