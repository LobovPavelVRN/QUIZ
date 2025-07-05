import _mixins from './mixins.module.scss';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './Routing';

function App() {
  return (
    <RouterProvider router={Routes} />
  )
}


export default App
