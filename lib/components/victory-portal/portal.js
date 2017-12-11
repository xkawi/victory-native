import React from "react";
import { G } from "react-native-svg";
import { Portal } from "victory-core/src";

export default class extends Portal {

  render() {
    return React.cloneElement(
      <G/>,
      {},
      Object.keys(this.map).map((key) => {
        const el = this.map[key];
        return el ? React.cloneElement(el, { key }) : <G/>;
      })
    );
  }
}
