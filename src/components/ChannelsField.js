import React from "react";
import Channel from "../containers/Channel";

const ChannelsField = ({ setDisabled }) => {
  const channelData = [
    {
      channelString: "BBC",
      channelName: "bbc-news",
    },
    {
      channelString: "CNN",
      channelName: "cnn",
    },
    {
      channelString: "FT",
      channelName: "financial-times",
    },
    {
      channelString: "ESPN",
      channelName: "espn",
    },
    {
      channelString: "TIME",
      channelName: "time",
    },
  ];

  return (
    <div className="row">
      {channelData.map((data, id) => {
        return (
          <Channel
            key={id}
            channelString={data.channelString}
            channelName={data.channelName}
            setDisabled={setDisabled}
          />
        );
      })}
    </div>
  );
};

export default ChannelsField;
