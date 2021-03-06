import logo from './logo.svg';
import './App.css';
import { MyComponents } from "./components/MyComponents";
import {Link} from "react-router-dom";
import {HwButtonContainer} from './components/HwButton'
import {PostContainer} from "./components/PostContainer";
import {PhotoContainer} from "./components/PhotoContainer";

function App() {
    const getData = () => {
        return "Some data";
    };

  return (
    <div className="App">
        {/*<Link to='/photo'>Go to photo</Link>*/}
        {/*<Link to='/count'>Go to count</Link>*/}
        {/*<Link to='/users/:5'>Go to users</Link>*/}
      <MyComponents.Header logo={logo}/>
      <MyComponents.Body />
      <MyComponents.Section
         text="Some text"
         isDefault={false}
         count={10}
         user={{ name: "John", age: 34 }}
         data={getData()}
      />
      <PostContainer/>
      <PhotoContainer/>
      <MyComponents.HwUsers />
      <HwButtonContainer />

    </div>
  );
}

export default App;
