import { createStore } from 'vuex'

export const store = createStore({
    state: {
        isLoading: false,
        snackbar: {
            show: false,
            text: ''
        },
    },
    getters: {
        isLoading: state => state.isLoading,
        snackbar: state => state.snackbar.show,
        snackbarText: state => state.snackbar.text
    },
    mutations: {
        setIsLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        snackbar(state, text) {
            state.snackbar.show = true;
            state.snackbar.text = text;
        },
        hideSnackbar(state) {
            state.snackbar.show = false;
        }
    }
});