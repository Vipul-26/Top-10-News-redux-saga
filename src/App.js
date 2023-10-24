import React, { useState } from "react";
import ChannelsField from "./components/ChannelsField";
import Button from "./containers/Button";
import TopNews from "./containers/TopNews";
import "./App.css";

const App = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <ChannelsField setDisabled={setDisabled} />
      <Button disabled={disabled} />
      <TopNews />
    </div>
  );
};

export default App;
