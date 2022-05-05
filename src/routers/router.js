import CartPage from "../pages/cart";
import HomePage from "../pages/home";
import ProductDetailPage from "../pages/product-detail";

const routes = [
    {
      element: <HomePage />,
      path: "/",
    },
    {
        element: <ProductDetailPage />,
        path: "/product/:id",
      },
    {
      element: <CartPage />,
      path: "/cart",
    },
  ];

export default routes;