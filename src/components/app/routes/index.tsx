// import { useSelector } from 'react-redux'
import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Loading } from '../../../shared/components/Loading';

const Layout = lazy(() => import('../layout'));
const Home = lazy(() => import('../../pages/home'));
const Auth = lazy(() => import('../../pages/auth'));
const PageApp = lazy(() => import('../../pages/app'));
const Profile = lazy(() => import('../../pages/profile'));
const PageNotFound = lazy(() => import('../../pages/404'));

const Jobs = lazy(() => import('../../pages/jobs'));
const CreateJobs = lazy(() => import('../../pages/jobs/components/Create'));

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return <Outlet />;
  // return userInfo ? <Outlet /> : <Navigate to="/auth" />;
};

const App = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* privates routes */}
            <Route element={<PrivateRoute />}>
              <Route path="app" element={<PageApp />} />
              <Route path="profile" element={<Profile />} />
              <Route path="profile/update/:id" element={<Profile />} />
              <Route path="jobs/create" element={<CreateJobs />} />
            </Route>
            {/* public routes */}
            <Route index element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            {/* {!userInfo && <Route path="auth" element={<Auth />} />} */}
            <Route path="auth" element={<Auth />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
