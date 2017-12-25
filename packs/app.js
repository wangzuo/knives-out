import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ITEMS from './app/items';
import './app/styles.scss';

const STATS = ['伤害', '射速', '射程', '弹夹容量', '后坐力'];
const WEAPON_TYPES = {
  assault: '突击步枪',
  sniper: '狙击枪',
  mg: '冲锋枪',
  shotgun: '霰弹枪'
};

const Progress = ({ d, m }) => (
  <div className="progress">
    <div className="progress-bar" style={{ width: `${d / m * 100}%` }} />
  </div>
);

Progress.defaultProps = {
  m: 100
};

const Header = () => (
  <div className="header">
    <img src="/images/logo.jpeg" />
    <h1>Knives out</h1>
  </div>
);

const WeaponType = ({ type }) => {
  const weapons = ITEMS.weapons.filter(x => x.type === type);

  return (
    <table>
      <tr>
        <th>武器</th>
        {STATS.map((s, i) => <th key={i}>{s}</th>)}
      </tr>
      {weapons.map(w => (
        <tr>
          <td>{w.name}</td>
          {w.stats.map((s, i) => <td key={i}>{s}</td>)}
        </tr>
      ))}
    </table>
  );
};

const WeaponTypeFilter = ({ type, onChange }) => (
  <button onClick={() => onChange(type)}>{WEAPON_TYPES[type]}</button>
);

class App extends Component {
  state = {
    type: null
  };

  handleTypeChange = type => {
    this.setState({ type });
  };

  render() {
    if (this.state.type) {
      return (
        <div className="container">
          <Header />
          <WeaponType type={this.state.type} />
        </div>
      );
    }

    return (
      <div className="container">
        <Header />

        <div>
          {['assault', 'sniper', 'shotgun', 'mg'].map(x => (
            <WeaponTypeFilter onChange={this.handleTypeChange} type={x} />
          ))}
        </div>

        <div>
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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
