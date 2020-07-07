const categoryReducer = (state = '', action) => {
    switch (action.type) {
        case "skin-care":
            return state = 'skin-care';
        case "man-care":
            return state = 'man-care';
        case "makeup":
            return state = 'makeup';
        case "brands":
            return state = 'brands';
        case "defaultAction":
            return state = '';
        default:
            return state;
    }
}

export default categoryReducer;