import Weather from './components/Weather';

function App() {
  return (
    <div className="container vh-100 text-center d-flex flex-column align-items-center justify-content-center">
      <div className="App col-xs-4 col-md-6 col-lg-6 mx-auto">
        <Weather />
      </div>
    </div>
  );
}

export default App;
