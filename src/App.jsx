import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <h2>Example of an environment variable - {process.env.NODE_ENV}</h2>
      <MainContent />
    </>
  );
}

export default App;
