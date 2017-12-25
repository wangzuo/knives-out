import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ITEMS from './app/items';
import './app/styles.scss';

const Progress = ({ d, m }) => (
  <div className="progress">
    <div className="progress-bar" style={{ width: `${d / m * 100}%` }} />
  </div>
);

Progress.defaultProps = {
  m: 100
};

const STATS = ['伤害', '射速', '射程', '弹夹容量', '后坐力'];

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="head">this works</div>
        {ITEMS.weapons.map(x => (
          <div key={x.id} className="weapon">
            <div className="weapon-img">
              <img src={`/images/${x.id}.jpg`} />
              <div>{x.name}</div>
            </div>
            <div className="weapon-stats">
              {x.stats.map((s, i) => (
                <div className="weapon-stat" key={i}>
                  <div className="weapon-stat-d">
                    {STATS[i]}
                    <span className="float-right">{s}</span>
                  </div>
                  <Progress d={s} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
