import { GlobalStyles } from './assets/styles/GlobalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as path from './utils/routes';

import { Home } from './pages/Home';
import { TrendingTopics } from './pages/TrendingTopics';
import { PostDescription } from './pages/PostDescription';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.TRENDING_TOPICS} element={<TrendingTopics />} />
          <Route path={path.POSTDESCRIPTION} element={<PostDescription />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
