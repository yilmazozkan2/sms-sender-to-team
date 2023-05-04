export default function (state = { name, phone }, action) {
    switch (action.type) {
        case 'ADD_NAME':
            const { name } = action.payload;
            return { ...state, name }

        case 'ADD_PHONE':
            const { phone } = action.payload;
            return { ...state, phone }

        default:
            return state;
    }
}