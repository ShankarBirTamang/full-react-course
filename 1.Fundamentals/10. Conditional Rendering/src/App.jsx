import Weather from "../components/Weather";
import UserStatus from "../components/UserStatus";

function App() {
  return (
    <>
      <Weather temp={9}/>
      <UserStatus loggedIn={true} isAdmin={true}/>
    </>
  );
}

export default App;
