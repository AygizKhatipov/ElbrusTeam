import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from 'react-redux';
import  store  from './app/providers/store/store.ts';
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';


createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter>
    <Provider store={store}>
      <MantineProvider>
      <Notifications />
        <App />
      </MantineProvider>
      </Provider>
    </BrowserRouter>
)
