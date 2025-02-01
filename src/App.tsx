import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Providers } from './providers';
import Market from './Pages/Market';  // Import the new Market page
import '@coinbase/onchainkit/styles.css';


function App() {
  return (
    <Providers>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Market />} />  {/* Market page as the default route */}
          </Routes>
        </div>
      </Router>
    </Providers>
  );
}

export default App;