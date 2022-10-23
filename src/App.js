import "./styles.css";
import React, { useState } from "react";
import { movieIndex } from "./movies";

// var bookIndexList = .value

export default function App() {
  var [userBook, setUserBook] = useState("anime");

  function genreClickHandler(genre, event) {
    // userBook = event.target.value;
    // meaning = bookIndex(genre);
    setUserBook(genre);
  }
  return (
    <div className="App">
      <h1
        style={{ backgroundColor: "skyblue", padding: "1rem", margin: "0rem" }}
      >
        movieManiaa <span>🍿</span>
      </h1>
      <h2>movies !! You must watch</h2>
      <div>
        {Object.keys(movieIndex).map((genre) => (
          <button
            style={{ fontSize: "1em", margin: "0.5rem" }}
            onClick={() => genreClickHandler(genre)}
          >
            {genre}{" "}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieIndex[userBook].map((movie) => (
            <li key={movie.name}>
              <div style={{ fontSize: "2rem" }}>♦️ {movie.name} ♦️</div>
              <div style={{ fontSize: "1.1rem", padding: "0.3rem" }}>
                IMDB ➢ {movie.ratings}
              </div>
              <div style={{ fontSize: "0.8rem" }}>
                <strong>Movie Description ➢</strong>
                {movie.Description}
              </div>
              <div>Genre ➢{movie.Genre} </div>
              <div>Official Language ➢{movie.language}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
