import {
  createAppContainer
} from 'react-navigation';
import RootStack from "./src/router";

const App = createAppContainer(RootStack);

export default App;
