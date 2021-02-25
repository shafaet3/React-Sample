import User from "./User";
function App() {
  const apiData = [
    { firstName: "Shafaet", attendance: "A" },
    { firstName: "Nisa", attendance: "P" },
  ];
  return (
    <div className="App">
      <User apiData={apiData} />
    </div>
  );
}

export default App;
