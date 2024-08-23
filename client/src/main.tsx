import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Provider } from 'react-redux';
import  store  from './app/providers/store/store.ts';


createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </Provider>
)
