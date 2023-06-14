import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SelectHoge(props) {
  const [hogelist, setHogelist] = useState([])

  useEffect(() => {
    fetch('https://api.try-api.anabanted.com/items', {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setHogelist(data)
    })
  },[])


  return(
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Hoge</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="hoge"
        onChange= {props.handleChange}
    >
      {hogelist.map((item)=> (<MenuItem value={item.key}>{item.value}</MenuItem>))}
    </Select>
    </FormControl>
  );

}

export default SelectHoge;
