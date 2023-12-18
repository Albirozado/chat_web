import {
  Routes,
  Route,
} from 'react-router-dom';
import DefaultLayout from "./components/layout"
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<DefaultLayout />} />
      </Routes>
    </>

  );
}

export default App;
