import Landing from './pages/Landing';
import { Routes, Route } from 'react-router-dom';
import MoreInfo from './pages/MoreInfo';
import Payment from "./pages/Payment";
import MainLanding from './pages/MainLanding';
import Register from './pages/Register';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<MainLanding />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route
        path="/landing"
        element={
          <ProtectedRoute>
            <Landing />
          </ProtectedRoute>
        }
      ></Route>

      <Route path="/:id" element={<MoreInfo />}></Route>
      <Route path="/Payment/:id" element={<Payment />}></Route>
    </Routes>
  );
}

export default App;
