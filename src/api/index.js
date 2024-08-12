import axios from "axios";
const backendUrl = "http://localhost:5039";

//hotels
export const getHotels = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/Hotel`);
    const data = await response.data;
    // return data;
    console.log(response.data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getHotel = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/hotels/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getHotelReview = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/reviews?hotelId=${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

// travel packages
export const getTravelPackages = async () => {
  try {
    const response = await axios.get(`${backendUrl}/travelPackages`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTravelPackage = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/travelPackages/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getThingsToDo = async () => {
  try {
    const response = await axios.get(`${backendUrl}/thingsToDo`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getThingToDo = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/thingsToDo/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTopDestinations = async () => {
  try {
    const response = await axios.get(`${backendUrl}/topDestinations`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTopDestination = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/topDestinations/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getReviews = async () => {
  try {
    const response = await axios.get(`${backendUrl}/reviews`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getReview = async (hotelId) => {
  try {
    const response = await axios.get(`${backendUrl}/reviews/${hotelId}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/users/${id}`);
    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
