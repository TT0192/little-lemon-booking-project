import React from "react";
import restauranfood from "./restauranfood.jpg"
import { Link } from "react-router-dom"


export default function Header() {
        return (
            <header>
                <section>
                <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterraneran restaurant, focused on a traditional recipes served with a modern twist.</p>
                <Link to="/Reservation"><button aria-label="On Click">Reserve Table</button></Link>
                </div>
                <div>
                    <img src={restauranfood} alt='' />
                </div>
                </section>
            </header>
        )
    }