import React, { useState } from "react";
import './para.scss';

const Paragraph = () => {
  const [para, setPara] = useState("");

  return (
    <div className="para">
      <textarea
        cols="30"
        rows="10"
        placeholder="Type, or copy/paste your content here."
        onChange={(e) => setPara(e.target.value)}
      ></textarea>
      <div className="tableWrapper">
      <table>
        <thead>
          <tr>
            <th>Characters</th>
            <th>Words</th>
            <th>Sentences</th>
            <th>Paragraphs</th>
            <th>Spaces</th>
            <th>Punctuations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{para.length}</td>
            <td>{para.trim().split(/\s+/).filter((word) => word !== "").length}</td>
            <td>{para.split(/[.!?]+/).filter((sentence) => sentence !== "").length}</td>
            <td>{para.split("\n").filter((paragraph) => paragraph.trim() !== "").length}</td>
            <td>{para.split(" ").length - 1}</td>
            <td>{(para.match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g) || []).length}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Paragraph;
