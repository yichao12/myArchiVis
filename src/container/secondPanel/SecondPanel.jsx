import React from 'react';
import './secondPanel.css';
import RoseDonut from '../../component/roseDonut/RoseDonut'


class SecondPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="second-panel">
        <div className="second-up single-panel">
            <div className="panel-header">
              secondUp
            </div>
            <div className="panel-container">

            </div>
        </div>
        <div className="second-down single-panel">
            <div className="panel-header">
               secondDown
            </div>
            <div className="panel-container">
                <div className="traj-left-container">
                  <RoseDonut></RoseDonut>
                </div>
                <div className="traj-right-container">
                  <div className="flowers-container">
                      花朵展示
                  </div>
                  <div className="single-traj-container">
                      单人行程展示
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
} 
export default SecondPanel;