
import './App.css';
import Tabar from './comps/tabar';
import Homes from './comps/pages/Home';
import About from './comps/pages/About';
import Pro from './comps/pages/Pro';
import Exp from './comps/pages/Exp';
import Cont from './comps/pages/cont';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#111929'}}>
     <Tabar className="Tabar_app" />
     <div className='Main_content'>
      <div className='Home_cls'>
      <div><Homes /></div>
      </div>
      <div ><hr/><About /> </div>
      <div><hr/><Pro/></div><hr/>
      <div><hr/> <Exp/></div>
      <div><hr/> <Cont /></div>
     </div>
    
     
     
  
    </div>
  );
}

export default App;
