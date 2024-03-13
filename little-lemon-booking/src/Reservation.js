import React from "react";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from  './Api.js';

export default function Reservation(props) {
    function updateTimes(date){
        return fetchAPI(date);
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    return (
        <div>
            <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
        </div>
    );
}

