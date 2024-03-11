import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
    const [occasion, setOccasion] = useState("");
    const [guests, setGuest] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        setDate (e);
        props.dispatch (e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                            <option value="">Select a Time</option>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
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