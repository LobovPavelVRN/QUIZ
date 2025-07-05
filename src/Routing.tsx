import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import { GameLoop } from "./pages/GameLoop";

const Wrapper = () => {
  return <Outlet />;
}

export const ROUTES = {
  gameLoop: '/gameLoop'
}

export const Routes = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader: () => { },
    children: [
      {
        index: true,
        loader: async (ctx) => {
          return redirect(ROUTES.gameLoop)
        },
      },
      {
        path: ROUTES.gameLoop,
        element: <GameLoop />
      },
    ]
  }
])
