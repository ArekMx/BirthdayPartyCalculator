// import logo from './logo.svg';
import './App.scss';

function App() {
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
            <th>38 zł</th>
          </tr>
          <tr>
            <th>piątek</th>
            <th>42 zł</th>
          </tr>
          <tr>
            <th>sobota, niedziela i święta</th>
            <th>44 zł</th>
          </tr>
        </tbody>
      </table>
      </header>
    </div>
  );
}

export default App;
