import Greeting from "../components/Greeting";
import UserStatus from "../components/UserStatus";
import Weather from "../components/Weather";

function App() {
  return (
    <>
      <Weather  temperature={10} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Greeting timeOfDay="afternoon" />
    </>
  );
}

export default App;
