import { Routes, Route } from 'react-router-dom';
import Home from "./routes/home/Home.component";
import Nav from './navigation/Nav.component';

const Shop = () => {
  return <h1>I am the shop component</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};


export default App;
