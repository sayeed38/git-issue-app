import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import "./styles.css";
import {
  watchActionCreator,
  starActionCreator,
  forkActionCreator,
  addDataActionCreator,
} from "./../reducer/actionCreator";

function Issues(props) {
  const [isFetching, setIsFetching] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    props.addDataActionCreator();
    setIsFetching(false);
  }, [isFetching, props]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }

  return (
    <div className="root">
      <div className="button-counters">
        <div key="watch" className="wrapper">
          <button onClick={() => props.watchActionCreator()}>Watch</button>
          <span className="counters">{props.watchCounter}</span>
        </div>
        <div key="star" className="wrapper">
          <button onClick={() => props.starActionCreator()}>Star</button>
          <span className="counters">{props.starCounter}</span>
        </div>
        <div key="fork" className="wrapper">
          <button onClick={() => props.forkActionCreator()}>Fork</button>
          <span className="counters">{props.forkCounter}</span>
        </div>
      </div>
      {props.dataObj.map((data, index) => (
        <Card key={data.id + index} data={data} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    forkCounter: state.fork,
    starCounter: state.star,
    watchCounter: state.watch,
    dataObj: state.data,
  };
};

export default connect(mapStateToProps, {
  watchActionCreator,
  starActionCreator,
  forkActionCreator,
  addDataActionCreator,
})(Issues);
