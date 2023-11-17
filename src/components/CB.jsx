import { createBrowserRouter } from "react-router-dom";

import { Buy,AddProduct,Catalog,Main,Like } from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "add",
                element: <AddProduct />
            },
            {
                path: "buy",
                element: <Buy />
            },
            {
                path: "catolog",
                element: <Catalog />
            },
            {
                path: "like",
                element: <Like />
            }
        ]
    },
])
export default router