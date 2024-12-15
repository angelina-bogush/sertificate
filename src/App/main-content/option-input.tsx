import { defineComponent, ref, computed, PropType } from 'vue';

import './main-content.css'

interface NominalInputProps {
    value: number; 
    isSelected: Boolean;
    whenClick: (value: number) => void; 
}


const OptionInput = defineComponent({
 props: {
        value: {
            type: [Number, String],
            required: true,
        },
        isSelected: {
            type: Boolean,
            required: true,
        },
        whenClick : {
            type: Function as PropType<(value: number) => void>,
            required: true,
        }
    },
    setup(props: NominalInputProps) {
        const value = computed(() => props.value)
        const classes = computed(() => {
            return {
                'nominal-input': true,
                'nominal-input-chosen': props.isSelected
            }
        })
        return () => (
            <div class={classes.value} onClick={() => props.whenClick(value.value)}>
                {value.value}
            </div>

        );
    },
});

export default OptionInput;