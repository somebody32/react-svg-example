import React from 'react';

export default class GraphBody extends React.Component {
  prepareData() {
    let d = [`M ${this.props.x} ${this.props.y}`];
    let [currentX, currentY] = [0, 0];
    let collector = [];

    this.props.data.forEach((chunk) => {
      let xDiff = chunk[0] - currentX;
      let yDiff = chunk[1] - currentY;
      currentX = chunk[0];
      currentY = chunk[1];
      collector.push(`l ${xDiff * 20} ${-yDiff * 20}`);
    });

    return d.concat(collector).join(' ');
  }

  render() {
    let d = this.prepareData();
    return(
      <path d={d}
        stroke="orange"
        strokeWidth={1}
        fill="none"
      />
    )
  }
}
