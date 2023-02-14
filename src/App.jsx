import DropDownMenu from './components/DropDownMenu';
import Visualiser from './components/Visualiser';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Visualiser</header>
      <div className="App-background">
      <DropDownMenu></DropDownMenu>
      <Visualiser></Visualiser>
      </div>
    </div>
  )
}
