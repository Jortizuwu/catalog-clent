import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './components/app/routes';
import ReduxProvider from './redux/provider/ReduxProvider';

import 'reactjs-popup/dist/index.css';
import 'rc-collapse/assets/index.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
