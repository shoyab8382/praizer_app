import api from "./api";

const token = sessionStorage.getItem("jwtToken");
if (token) {
  // Include the JWT token in the request headers
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const fetchUsersData = async () => {
  try {
    // Make the API call
    const response = await api.get("/Users/getUserDetails");
    const userData = response.data;

    // console.log("User data:", userData);
    return userData;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};

export const GetUserDetailsByUid = async (uid) => {
  try {
    const response = await api.get(`/Users/getUserDetailsByUid?uid=${uid}`);
    const userData = response.data;

    return userData;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};

export const UpdateUserDetailsByUid = async (data) => {
  try {
    // const config = {
    //   ContentType: "application/x-www-form-urlencoded",
    // };
    const response = await api.post("/Users/updateUserDetailsByUid", data);
    return response;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
};
