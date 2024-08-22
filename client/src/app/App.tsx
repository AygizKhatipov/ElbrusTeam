import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import AppRoutes from "./appRouter/AppRouter";
function App() {
  return <MantineProvider>{<>
  
  <AppRoutes /> 
  
  
  </>}</MantineProvider>;
}

export default App;
