export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQCMk8RZKhcTqGlatSCsm9iKTKikiRTivyrtG2mxxwVHCMH4GZEuUB2nEJNlijfbJtWxZUjzOBVorqeHFKdg8398MUwzAIVHanTUVL7PMcoeF0MIgn3RVSdv4z1MYI3KF8-rTI5srVJ9CHBGWWoPKF1SwumTBdayM2j1lBCLiPb_AD7NTLEP"
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;