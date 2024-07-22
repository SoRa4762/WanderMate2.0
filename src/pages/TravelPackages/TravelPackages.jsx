import { useState, useEffect } from "react";
import HCard from "../../components/HCard";
// import { travelPackagesPage } from "../helper/data";
import { getTravelPackages } from "../../api";

const TravelPackages = () => {
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    const fetchTravelPackages = async () => {
      const data = await getTravelPackages();
      setTravelPackages(data);
    };

    fetchTravelPackages();
  }, []);
  return <HCard data={travelPackages} />;
};

export default TravelPackages;
