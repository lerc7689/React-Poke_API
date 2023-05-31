import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Pokedex from "../pages/Pokedex/Pokedex";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Layout from "../pages/Layout/Layout";
import PokedexId from "../pages/PokedexId/Pokedex";
import { pokedexLoader } from "./Loaders/pokedexLoader/pokedexLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Login/>
    },
    {
        path: "/pokedex",
        element:(
                <ProtectedRoute>
                     <Layout/>
                 </ProtectedRoute>
                ),
        children:[
            {
                path: "",
                element:<Pokedex/>,
                loader: pokedexLoader
                
            },
            {
                path: "/pokedex/:pokemonId",
                element:<PokedexId/>
            }
        ]
    }
   
])

export default router;