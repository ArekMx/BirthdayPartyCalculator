// import logo from './logo.svg';
import '../scss/App.scss';
import {SelectedPrice} from '../js/SelectedPrice/SelectedPrice'

function App() {

  // Ustaw cenę od poniedziałku do czwartku:
  const weekPrice = 38;

  // Ustaw cenę w piątek:
  const fridayPrice = 42;

  // Ustaw cenę w wekend:
  const weekedPrice = 44;


  return (
    <div className="App">
      <header className="App-header">
        <table>
        <tbody>
          <tr>
            <th>Dni w tygodniu</th>
            <th>Własny barek</th>
          </tr>
          <tr>
            <th className={'week'}>Poniedziałek - czwartek</th>
            <th><SelectedPrice price={weekPrice} /></th>
          </tr>
          <tr>
            <th>piątek</th>
            <th><SelectedPrice price={fridayPrice} /></th>
          </tr>
          <tr>
            <th>sobota, niedziela i święta</th>
            <th><SelectedPrice price={weekedPrice} /></th>
          </tr>
        </tbody>
      </table>
      </header>
    </div>
  );
}

export default App;
