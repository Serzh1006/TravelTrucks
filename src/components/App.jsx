import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));
const CatalogDetails = lazy(() =>
  import("../pages/CatalogDetails/CatalogDetails")
);
const Layout = lazy(() => import("../components/Layout/Layout"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));
const Features = lazy(() => import("../components/Features/Features"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogDetails />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
