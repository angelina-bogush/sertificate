
import { defineComponent } from 'vue';
import Header from './header/header';
import MainContent from './main-content/main-content';
import './app.css'


const  App = defineComponent({
  setup() {
    return () => (
      <div class='page'>
        <Header/>
        <MainContent/>
      </div>
    );
  },
});

export default App;