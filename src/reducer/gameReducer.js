const initialData = {
    game: "Football",
    player: "Hero"
}

function gameReducer(state = initialData, action) {
    switch (action.type) {
        case "CHANGE_GAME_NAME":
            return {
                ...state,
                game: action.payload
            }
            case "CHANGE_PLAYER_NAME":
            return {
                ...state,
                player: action.payload
            }
        default:
            return state
            break;
    }
}

export default gameReducer;