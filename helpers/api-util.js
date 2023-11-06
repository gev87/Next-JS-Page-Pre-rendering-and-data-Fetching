import {
  get,
  orderByChild,
  ref,
  equalTo,
  query,
  startAt,
  endAt,
} from "firebase/database";
import { database } from "../firebase";

const dataRef = ref(database, "/events"); // Replace '/your_database_path' with the actual path to your data

const dataTransformer = (firebaseObject) => {
  let newData = [];
  for (const key in firebaseObject) {
    newData.push({ id: key, ...firebaseObject[key] });
  }
  return newData;
};

export async function getAllEvents() {
  try {
    const snapshot = await get(dataRef);

    if (snapshot.exists()) {
      // Data is available in snapshot.val()
      const data = snapshot.val();
      const transformedData = dataTransformer(data);
      return transformedData;
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Define an async function to fetch filtered data
export async function getFeaturedEvents() {
  try {
    // Create a query to filter data where 'featuredEvents' is true
    const filterParams = query(
      dataRef,
      orderByChild("isFeatured"),
      equalTo(true)
    );
    const snapshot = await get(filterParams);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const transformedData = dataTransformer(data);
      console.log("Data:", data, transformedData);
      return transformedData;
    } else {
      console.log("No featured events found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getEventById(eventName) {
  try {
    const eventRef = ref(database, `/events/${eventName}`);
    const snapshot = await get(eventRef);
    
    if (snapshot.exists()) {
      const data = snapshot.val();

      return data;
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getFilteredEvents(date) {

  try {
    // Create a query to filter data where 'featuredEvents' is true
    const filterParams = query(
      dataRef,
      orderByChild("date"),
      startAt(date),
      endAt(`${date}\uf8ff`)
    );
    const snapshot = await get(filterParams);

    if (snapshot.exists()) {
      const data = snapshot.val();
      const transformedData = dataTransformer(data);
      console.log("Data:", data, transformedData);
      return transformedData;
    } else {
      console.log("No featured events found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}