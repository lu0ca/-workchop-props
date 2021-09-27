import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let Data ={
    FullName :"Malek Hammoudi",
    Bio : "Simplicity is the key to happiness",
    Profession :"Full Stack JS Developer",
    src :"https://i.ibb.co/m8GjT0M/205376179-4223788520994168-7863687227603566320-n.jpg",
    alt :"profile_img"
  }
  return (
    <div className="App" >

       <Profile FullName={Data.FullName} Bio={Data.Bio} Profession={Data.Profession}>
        
        <img src={Data.src} alt={Data.alt} style={{borderRadius:"50%",width:90,height:90}}/>
        
        </Profile>
      
      
    </div>
  );
}

export default App;
