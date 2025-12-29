import { useState } from "react";

function LoginForm({ handlelogin }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (user === "bhavik" && password === "1234") {
      handlelogin(user);
    } else {
      alert("Check your details");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user}
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

function Dashboard({ data }) {
  return (
    <>
      <h1>Hello Worlld</h1>
      <h1>UserName: {data}</h1>;
    </>
  );
}

function AppLogin() {
  const [user, setUser] = useState(null);

  const handlelogin = (data) => {
    setUser(data);
  };

  return (
    <>
      {user ? (
        <Dashboard data={user} />
      ) : (
        <LoginForm handlelogin={handlelogin} />
      )}
    </>
  );
}

export default AppLogin;
