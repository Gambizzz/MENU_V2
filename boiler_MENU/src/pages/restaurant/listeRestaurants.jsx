import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAtom } from "jotai";
import { userAtom } from "../../atoms";
import ky from "ky";

const Restaurants = () => {
  const { t } = useTranslation();
  const [restaurant, setRestaurant] = useState([]);
  const [user] = useAtom(userAtom);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const token = user.token;
      const response = await ky.get('http://localhost:3000/restaurants', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).json();
      setRestaurant(response);
    } catch (error) {
      console.error('Erreur lors de la récupération des restaurants : ', error);
    }
  };
  
    return(
        <>
        <h1 className="title-pages"> {t('titleRestau')} </h1>
        {restaurant.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
            <h1> {restaurant.name} </h1>
            <p> {restaurant.description} </p>
          </Link>
        ))}

        <Link to="/details" > <p> VOIR le resto!!! </p> </Link>
        </>
    )
}

export default Restaurants;