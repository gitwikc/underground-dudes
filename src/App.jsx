import * as React from "react";

const App = () => {
  const [username, setUsername] = React.useState(null);

  return (
    <div className="App">
      <div className="interaction">
        <div className="username">
          USERNAME = {username || "<type username>"}
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(`Welcome to underground dudes, ${username}!`);
          }}
        >
          Lezzgo!!
        </button>
      </div>
    </div>
  );
};

export default App;
