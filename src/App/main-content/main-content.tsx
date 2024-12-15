import { defineComponent, ref } from 'vue';
import Card from './card';
import OptionInput from './option-input';

import './main-content.css'

const cardNominalArray = [1000, 2000, 3000]
const backgroundOptions = [{value: 'bg1', label: 'Фон 1'},{value: 'bg2', label: 'Фон 2'}, {value: 'bg3', label: 'Фон 3'}];


const MainContent = defineComponent({
  setup() {
    const nominalCard = ref<number | null>(null)
    const selectedBackground = ref<string>('');

    const whenChooseNominal = (value: number) => {
      nominalCard.value = value;
    }
    const whenChooseBackground = (url: string) => {
      selectedBackground.value = url;
    };

    return () => (
      <div class='main-content'>
        <h2 class='page'>Сертификат BonusPay</h2>
        <div class='content'>
          <Card nominal={nominalCard.value} background={selectedBackground.value}/>
          <div class='form'>
            <p>Фон</p>
            <div class="nominal-section">
              {backgroundOptions.map((bg) => (
                <OptionInput
                  value={bg.label}
                  isSelected={bg.value === selectedBackground.value}
                  whenClick={() => whenChooseBackground(bg.value)}  />
              ))}
            </div>
            <p>Номинал</p>
            <div class="nominal-section">
              {cardNominalArray.map((nominal) => (
                <OptionInput
                  value={nominal}
                  isSelected={nominal === nominalCard.value}
                  whenClick={whenChooseNominal} />
              ))}
            </div>
            <p>Кому</p>
            <input></input>
          </div>

        </div>
      </div>


    );
  },
});

export default MainContent;