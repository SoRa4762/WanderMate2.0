import { useState, useEffect } from "react";
import HCard from "../../components/HCard";
import { getHotels } from "../../api";
// import { hotelPage } from "../helper/data";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getHotels();
      setHotels(data);
    };

    fetchHotels();
  }, []);
  return <HCard data={hotels} />;
};

export default Hotels;
