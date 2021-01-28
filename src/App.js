import Header from './components/Header';
import Footer from './components/Footer';
import background from './assets/bg2.jpg';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Header title="This is title" descr="This is description"/>
      <Layout id="1" title="Layout 1" urlBg={background} descr="This is description for Layout 1"/>
      <Layout id="2" title="Layout 2" colorBg="red" descr="This is description for Layout 2"/>
      <Layout id="3" title="Layout 3" urlBg={background} descr="This is description for Layout 3"/>
      <Footer />
    </div>
  );
}

export default App;
