import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { store } from "./store/Store";

const App = () => 
<Provider store={store}>
<AppRouter />;

</Provider>

export default App;
