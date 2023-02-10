import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      thanks: false,
      quiz: false,
			navigation: false
    },
    getters: {
      getThanks: state => state.thanks,
      getQuiz: state => state.quiz,
			getNavigation: state => state.navigation
    },
    mutations: {
      setThanks(state, thanks) {
        state.thanks = thanks
      },
      setQuiz(state, quiz) {
        state.quiz = quiz
      },
			setNavigation(state, navigation) {
        state.navigation = navigation
      }
    },
    actions: {}
  })
}

export default createStore