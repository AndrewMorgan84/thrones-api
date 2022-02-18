import { houseActions } from "../houses-slice";
import { uiActions } from "../ui-slice";
import { API_DOMAIN } from "../../utilities/constants";

export const loadHousesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(API_DOMAIN + "/houses");
      if (!response.ok) {
        throw new Error("Could not fetch houses data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const housesData = await fetchData();
      dispatch(
        houseActions.loadHouses({
          houses: housesData || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Could not fetch houses data",
        })
      );
    }
  };
};
