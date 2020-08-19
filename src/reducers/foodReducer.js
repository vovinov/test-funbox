let initialState = {
    cards: [
        {
            title: 'с фуагрой',
            weight: '0,5',
            quantity: 10,
            bonus: 'мышь в подарок',
            selected: false,
            disabled: false
        },
        {
            title: 'с рыбой',
            weight: '2',
            quantity: 40,
            bonus: '2 мыши в подарок',
            selected: false,
            disabled: false
        },
        {
            title: 'с курой',
            weight: '5',
            quantity: 100,
            bonus: '5 мышей в подарок',
            selected: false,
            disabled: false
        }
    ]
}

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state


    }
}