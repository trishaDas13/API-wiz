import React, { useState } from "react";
import axios from "axios";

const Words = () => {
  const [words, setWords] = useState("");
  const [data, fetchData] = useState({});

  //todo: fetching API here
  const fetchAPI = async () => {
    try {
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`
      );
      if (res.data && res.data.length > 0) {
        const firstValidMeaning = res.data.find(
          (entry) => entry.meanings.length > 0
        );
        if (firstValidMeaning) {
          fetchData(firstValidMeaning);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("This word is not present in dictionary");
      setWords("");
      return;
    }
  };

  //todo: handelling data submit
  const handleSubmit = () => {
    if (words === "") {
      alert("Please type a word first");
      return;
    }
    fetchAPI();
  };

  return (
    <div className="words">
      <div className="process">
        <textarea
          value={words}
          cols="30"
          rows="4"
          placeholder="Type a word..."
          onChange={(e) => setWords(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit}>Process Word</button>
      </div>
      <div className="table">
        <div className="thead">
          <p>Characters</p>
          <p>Words</p>
        </div>
        <div className="tbody">
          <p>{words.length}</p>
          <p>
            {
              words
                .trim()
                .split(" ")
                .filter((word) => word !== "").length
            }
          </p>
        </div>
        {data && data.meanings && data.meanings.length > 0 && (
          <div className="word_meaning">
            <div className="info">
              <p>Definition : </p>
              <p>{data.meanings[0]?.definitions[0]?.definition}</p>
            </div>
            <div className="info">
              <p>Part of Speech : </p>
              <p>{data.meanings[0]?.partOfSpeech}</p>
            </div>
            <div className="info">
              <p>Synonyms : </p>
              <p>
                {data.meanings[0]?.synonyms &&
                data.meanings[0].synonyms.length > 0
                  ? data.meanings[0].synonyms[0]
                  : "N/A"}
              </p>
            </div>
            <div className="info">
              <p>Antonyms : </p>
              <p>
                {data.meanings[0]?.antonyms &&
                data.meanings[0].antonyms.length > 0
                  ? data.meanings[0].antonyms[0]
                  : "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Words;
