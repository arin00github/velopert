

import PaginateApp from './AppGroup/pagination'
import UserApp from './AppGroup/userApp'
import './assets/css/common.css'

function App() {
  return (
    <div id="wrap">
      <UserApp />
      <PaginateApp />
    </div>
  );
}

export default App;
