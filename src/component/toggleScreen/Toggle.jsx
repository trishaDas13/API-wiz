import React, { useState } from "react";
import "./toggle.scss";
import Paragraph from "../paragraph/Paragraph";
import Words from "../words/Words";

const Toggle = () => {
  const [componentType, setComponentType] = useState("words");

  const toggleComponent = (type) => {
    setComponentType(type);
  };

  return (
    <div className="toggle">
      <div className="toggle_text">
        <h1>Text Analyzer</h1>
        <p>
          Text Analyzer is a simple free online tool for SEO web content
          analysis that helps you find most frequent phrases and words, number
          of characters, words, sentences and paragraphs, and estimated read and
          speak time of your content.
        </p>
      </div>
      <div className="toggleBtn">
        <button onClick={() => toggleComponent("words")}>
          Word Input
        </button>
        <button onClick={() => toggleComponent("paragraph")}>
          Paragraph
        </button>
      </div>
      {componentType === "words" ? <Words /> : <Paragraph />}
    </div>
  );
};

export default Toggle;
