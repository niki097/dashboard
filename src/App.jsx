import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './components/Home';
import DashScreen from './components/dashboard/DashScreen';

function App() {
  return (
    <ChakraProvider> {/* Apply Chakra UI styles */}
      <Router> {/* Set up the routing context */}
        <Routes> {/* Main routing structure */}
          <Route path="*" element={<Layout> {/* Use trailing * for nested routes */}
            <Routes> {/* Nested routes within Layout */}
              <Route index element={<Home />} /> {/* Home route */}
              <Route path="/dashscreen" element={<DashScreen />} /> {/* Dashboard route */}
            </Routes>
          </Layout>} /> {/* End of Layout */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
