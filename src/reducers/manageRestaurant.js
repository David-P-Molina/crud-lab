import cuid from 'cuid';
export const cuidFn = cuid

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
    } , action) {
        switch (action.type) {
            case 'ADD_RESTAURANT':
                const restaurant = { text: action.text, id: cuidFn() }
                return {
                    ...state, 
                    restaurants:
                        [ ...state.restaurants, restaurant ] 
                    }
            case 'DELETE_RESTAURANT': 
                const restaurants = state.restaurants.filter((rest) => rest.id !== action.id )
                return {
                    ...state,
                    restaurants
                }
            // case 'ADD_REVIEW':
            //     return {
            //     }
            // case 'DELETE_REVIEW':
            //     return {
            //     }
            default: 
            return state
        }
}
