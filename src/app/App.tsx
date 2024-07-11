import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../views/home/Home';
import ErrorBoundary from '../components/errorboundary/ErrorBoundary';
import ErrorPage from '../views/ErrorPage';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
