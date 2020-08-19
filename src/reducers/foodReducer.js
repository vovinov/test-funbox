import { TOGGLE_SELECT_CARD } from '../actions';

let initialState = {
    cards: [
        {
            id: 1,
            title: 'с фуагрой',
            weight: '0,5',
            quantity: 10,
            bonus: 'мышь в подарок',
            selected: false,
            disabled: false
        },
        {
            id: 2,
            title: 'с рыбой',
            weight: '2',
            quantity: 40,
            bonus: '2 мыши в подарок',
            selected: false,
            disabled: false
        },
        {
            id: 3,
            title: 'с курой',
            weight: '5',
            quantity: 100,
            bonus: '5 мышей в подарок',
            selected: false,
            disabled: true
        }
    ]
}

export const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SELECT_CARD:
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card.id === action.cardId) {
                        if (card.selected === true) {
                            return { ...card, selected: false }
                        }
                        return { ...card, selected: true }
                    }
                    return card;
                })
            }
        default:
            return state


    }
}

export const toggleSelectCardAC = (cardId) => ({ type: TOGGLE_SELECT_CARD, cardId })