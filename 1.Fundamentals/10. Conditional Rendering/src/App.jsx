import Weather from "../components/Weather";
import UserStatus from "../components/UserStatus";
import Greeting from  "../components/Greeting";

function App() {
  return (
    <>
      <Weather temp={9}/>
      <UserStatus loggedIn={true} isAdmin={false}/>
      <Greeting timeOfDay='afternoon'/>
    </>
  );
}

export default App;
