import React from "react";
import { useState } from "react";
import { submitAPI } from "./Api";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
    const [occasion, setOccasion] = useState("");
    const [guests, setGuest] = useState("");
    const [date, setDate] = useState("");
    const [finalTime, setFinalTime] = useState(props.availableTimes.map((times) => <option>{times}</option>));
    const navigate = useNavigate();
    

    const handleDateChange = (e) => {
        setDate (e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);
        props.updateTimes(date);
        setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formDate = {date, occasion, guests};
        if (submitAPI(formDate) === true){
            navigate('/confirmed')
        }
    };
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input type="date" id="book-date" label="date" required min={new Date().toISOString().slice(0,10)} value={date} onChange={handleDateChange} />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time</label>
                            <select id="book-time" required>
                                {finalTime}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests</label>
                            <input id="book-guests" min="1" value={guests} onChange={(e) => {setGuest(e.target.value)}} type={"number"} placeholder={0} max={10} required/>
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => {setOccasion(e.target.value)}} type={"number"}required>
                                <option value="">Select an option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                            </select>
                        </div>
                        <div>
                            <button aria-label="On Click" type={"submit"} value={"Make Your Reservation"}>Make Your Reservation</button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;