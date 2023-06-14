import React, { useState } from "react";
import { Container } from "@mui/material";
import Title from "./compontents/Title.js";
import SelectHoge from "./compontents/SelectHoge.js"
import ShowResult from "./compontents/ShowResult.js"

const App = () => {
  const [result, setResult] = useState()
  const handleChange = (e) => {
    fetch(`https://api.try-api.anabanted.com/item/${e.target.value}`)
    .then(res => res.json())
    .then(data => {
      setResult(data.value)
    })
  }
  return (
    <Container maxWidth="xs">
      <Title />
      <SelectHoge handleChange={handleChange}/>
      {result && <ShowResult result={result} />}
    </Container>
  );
};

export default App;
