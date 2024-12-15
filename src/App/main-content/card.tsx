import { defineComponent, ref, computed } from 'vue';

import './main-content.css'


const Card = defineComponent({
    props: {
        nominal: {
            type: Number,
            required: true,
        },
        background: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return () => (
            <div class={['card', `${props.background}`]}>
                {props.nominal && <p class='card-nominal'>{props.nominal} Р</p>}
            </div>
        )
    }
})
export default Card