import React from "react";
import {Geom,
  G2,
  Chart,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
  
} from "bizcharts";

import './stackChart.css'

const areaColor = ['l (90) 0:rgba(0, 146, 255, 1) 1:rgba(0, 146, 255, 0.1)',
  'l (90) 0:rgba(0, 146, 255, 1) 1:rgba(0, 146, 255, 0.1)',
  'l (90) 0:rgba(0, 146, 255, 1) 1:rgba(0, 146, 255, 0.1)', 
  'l (90) 0:rgba(0, 268, 0, 1) 1:rgba(0, 268, 0, 0.1)']

const lineColor =  ['rgba(0, 146, 255, 1)','rgba(0, 146, 255, 1)','rgba(0, 146, 255, 1)', '#00ff00']
let containerHeight = 220

class StackChart extends React.Component {

  constructor(props){
    super(props)
    this.$container = React.createRef()
  }

  componentDidMount(){
    const container = this.$container.current
    console.log("container",container.clientHeight)
    containerHeight = container.clientHeight
  }
  render() {
    const data = [
      {
        country: "Asia",
        year: "1750",
        value: 502
      },
      {
        country: "Asia",
        year: "1800",
        value: 635
      },
      {
        country: "Asia",
        year: "1850",
        value: 809
      },
      {
        country: "Asia",
        year: "1900",
        value: 5268
      },
      {
        country: "Asia",
        year: "1950",
        value: 4400
      },
      {
        country: "Asia",
        year: "1999",
        value: 3634
      },
      {
        country: "Asia",
        year: "2050",
        value: 947
      },
      {
        country: "Africa",
        year: "1750",
        value: 106
      },
      {
        country: "Africa",
        year: "1800",
        value: 107
      },
      {
        country: "Africa",
        year: "1850",
        value: 111
      },
      {
        country: "Africa",
        year: "1900",
        value: 1766
      },
      {
        country: "Africa",
        year: "1950",
        value: 221
      },
      {
        country: "Africa",
        year: "1999",
        value: 767
      },
      {
        country: "Africa",
        year: "2050",
        value: 133
      },
      {
        country: "Europe",
        year: "1750",
        value: 163
      },
      {
        country: "Europe",
        year: "1800",
        value: 203
      },
      {
        country: "Europe",
        year: "1850",
        value: 276
      },
      {
        country: "Europe",
        year: "1900",
        value: 628
      },
      {
        country: "Europe",
        year: "1950",
        value: 547
      },
      {
        country: "Europe",
        year: "1999",
        value: 729
      },
      {
        country: "Europe",
        year: "2050",
        value: 408
      },
      {
        country: "Oceania",
        year: "1750",
        value: 200
      },
      {
        country: "Oceania",
        year: "1800",
        value: 200
      },
      {
        country: "Oceania",
        year: "1850",
        value: 200
      },
      {
        country: "Oceania",
        year: "1900",
        value: 460
      },
      {
        country: "Oceania",
        year: "1950",
        value: 230
      },
      {
        country: "Oceania",
        year: "1999",
        value: 300
      },
      {
        country: "Oceania",
        year: "2050",
        value: 300
      }
    ];
    const cols = {
      year: {
        type: "linear",
        tickInterval: 50
      }
    };
    return (
      <div className="stackChart-wrapper" ref = {this.$container}>
        <Chart padding={[20, 20, 70, 55]} height={containerHeight} data={data} scale={cols} forceFit>
          <Axis name="year" />
          <Axis name="value" />
          <Legend offsetY={-15} />
          <Tooltip
            crosshairs={{
              type: "line"
            }}
          />
          <Geom 
            type="areaStack" 
            position="year*value" 
            opacity={0.2} 
            color={['country',areaColor ]}
            // color="country" 
          />
          <Geom 
            type="lineStack" 
            position="year*value" 
            opacity={0.3} 
            size={1} 
            color="country" 
          />
        </Chart>
      </div>
    );
  }
}

export default StackChart;
