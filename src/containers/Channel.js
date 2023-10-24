import React from "react";
import { connect } from "react-redux";
import { selectChannel } from "../actions";

let Channel = ({
  channelString,
  channelName,
  setDisabled,
  onClick,
  active,
}) => (
  <div className="col-lg-2 col-md-4 col-sm-6">
    <div
      className="channel-button"
      onClick={() => {
        onClick();
        setDisabled(false);
      }}
      style={{ backgroundColor: active === channelName ? "orange" : "" }}
    >
      <p>{channelString}</p>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  active: state.myReducer.channelName,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(selectChannel(ownProps.channelName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Channel);
