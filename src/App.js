import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import HelloMessage from './HelloMessage';
import House from "./House";
// import PropTypes from 'prop-types';


function App() {
  let a = "Hafeez khan";
  return (

    // <>
    //   <Header />
    //   <Sidebar />
    //   <Footer />
    //   <HelloMessage name={a} age="25">
    //     <h1> Children Element 1 </h1>
    //   </HelloMessage> 
    //   <HelloMessage name="Khan" age="30">
    //     <button type='button' value="Click">Click</button>
    //   </HelloMessage> 
    //   <HelloMessage name="Ahmad" age="15">
    //     <h2> Children Element 3 </h2>
    //   </HelloMessage> 
    // </>


    <>
      <Header />
      <Sidebar />
      <Footer />
      <House />

      <HelloMessage name={a} age="2">
        <h1> Children Element 1 </h1>
      </HelloMessage>
      <HelloMessage name="Khan" age="30">
        <button type='button' value="Click">Click</button>
      </HelloMessage>
      <HelloMessage name="Ahmad" age="15">
        <h2> Children Element 3 </h2>
      </HelloMessage>

    </>



  );
}

export default App;




