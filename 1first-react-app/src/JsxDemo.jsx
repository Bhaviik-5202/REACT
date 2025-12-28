const JsxDemo = () => {
  const userName = "BHAVIIK";
  const userAge = 18;
  const isLoggedIn = true;
  const fruits = ["Apple", "Banana", "Orange"];
  
  const headerStyle = {
    color: 'blue',
    fontSize: '24px',
    textAlign: 'center'
  };

  return (
    <div>
      <h1 style={headerStyle}>JSX Demonstration</h1>
      
      <p>User: {userName}</p>
      <p>Age: {userAge}</p>
      <p>Next year: {userAge + 1}</p>
      
      {isLoggedIn ? (
        <p>Welcome back, {userName}!</p>
      ) : (
        <p>Please log in</p>
      )}
      
      <h3>Favorite Fruits:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>      
      <br />
      <hr />
    </div>
  );
};

export default JsxDemo;