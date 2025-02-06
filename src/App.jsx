import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Weather from "./components/Weather";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div id="main-outer-box">
        <Weather />
      </div>
    </QueryClientProvider>
  );
}

export default App;
