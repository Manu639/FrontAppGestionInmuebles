import { USER_TOKEN, NAV_STATE, CHANGE_THEME } from "./actions";

export interface IAppState {
    isNavOpen: boolean,
    userToken: string,
    theme: string
}

export const INITIAL_STATE: IAppState = {
    isNavOpen: false,
    userToken: " ",
    theme: "lightTheme"
}

export function rootReducer(state: IAppState, action: any): IAppState {

    switch (action.type) {
        case USER_TOKEN:
            return { ...state, userToken: action.value };

        case NAV_STATE:
            let newNavState = state.isNavOpen === true ? false : true;
            return { ...state, isNavOpen: newNavState };

        case CHANGE_THEME:
            let newTheme = state.theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
            return { ...state, theme: newTheme };
    }
    return state
}