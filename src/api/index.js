import axios from "axios";
const jsonUrl = "http://localhost:3000";

//hotels
export const getHotels = async () => {
  try {
    const response = await axios.get(`${jsonUrl}/hotels`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getHotel = async (id) => {
  try {
    const response = await axios.get(`${jsonUrl}/hotels/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

//travel packages
export const getTravelPackages = async () => {
  try {
    const response = await axios.get(`${jsonUrl}/travelPackages`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTravelPackage = async (id) => {
  try {
    const response = await axios.get(`${jsonUrl}/travelPackages/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getThingsToDo = async () => {
  try {
    const response = await axios.get(`${jsonUrl}/thingsToDo`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getThingToDo = async (id) => {
  try {
    const response = await axios.get(`${jsonUrl}/thingsToDo/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTopDestinations = async () => {
  try {
    const response = await axios.get(`${jsonUrl}/topDestinations`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTopDestination = async (id) => {
  try {
    const response = await axios.get(`${jsonUrl}/topDestinations/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getReviews = async () => {
  try {
    const response = await axios.get(`${jsonUrl}/reviews`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getReview = async (hotelId) => {
  try {
    const response = await axios.get(`${jsonUrl}/reviews/${hotelId}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${jsonUrl}/users/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
