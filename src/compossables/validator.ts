import { computed, ref } from "vue";


interface ValidateRequest {
    required: boolean,
    min_length: number | null,
    max_length: number | null,
}

export default function useValidator(validate_req: ValidateRequest = { min_length: null, max_length: null, required: false }) {

    const input_data = ref('');

    const touched = ref(false)

    const blurInput = () => {
        touched.value = true
    }

    const valid_reqired = computed(() => {
        if (validate_req.required && !input_data.value) {
            return true
        }
        return false
    })

    const valid_min_length = computed(() => {
        if (validate_req.min_length && input_data.value.length < validate_req.min_length) {
            return true
        }
        return false
    })

    const valid_max_length = computed(() => {
        if (validate_req.max_length && input_data.value.length < validate_req.max_length) {
            return true
        }
        return false
    })

    const errors_list = ref({
        min_length: valid_min_length,
        max_length: valid_max_length,
        required: valid_reqired,
    });

    return { input_data, touched, blurInput, errors_list }
}