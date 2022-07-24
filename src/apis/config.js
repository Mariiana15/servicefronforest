import {
    U_GENERIC,
    U_ZONE
} from "../actions/types";
import axios from "axios";
import config from './configuration.json';




export const GenericData = () => async (dispatch) => {

    const response = await axios.get(config.data.host + config.data.home, {
        headers: {
            "Authorization": "Basic ZW50cnVzdDpaVzUwY25WemREcHdZWE56TWpBeU1RPT0= ",
        }
    }).then(({ data }) => {
        console.log(data);
        return data
    });
    dispatch({ type: U_GENERIC, payload: response });

}


export const GenericZone = (zone) => async (dispatch) => {

    const response = await axios.get(config.data.host + config.data.zone + zone, {
        headers: {
            "Authorization": "Basic ZW50cnVzdDpaVzUwY25WemREcHdZWE56TWpBeU1RPT0= ",
        }
    }).then(({ data }) => {
        console.log(data);
        return data
    });
    //  console.log(response)
    dispatch({ type: U_ZONE, payload: response });

}