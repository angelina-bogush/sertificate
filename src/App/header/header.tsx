import { defineComponent } from 'vue';
import logo from '../../assets/images/logo.png'
import './header.css'

const Header = defineComponent({
  setup() {
    return () => (
      <div class='header'>
        <img src={logo} class='logo'/>
        <div class='menu'>
        <p>Категории</p>
        <p>О проекте</p>
        <p>Контакты</p>
        </div>
      </div>
    );
  },
});

export default Header;