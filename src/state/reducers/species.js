import Immutable from "seamless-immutable";

import PokeApi from "@/services/PokeApi";

import wait from "@/utils/wait";

const START_LOAD = "@species/START_LOAD";
const LOAD_PAGE = "@species/LOAD_PAGE";
const ERROR = "@species/ERROR";
const RETRY = "@species/RETRY";
const SELECT = "@species/SELECT";

const INITIAL_STATE = Immutable({
  items: [],
  loading: true,
  hasMore: true,
  totalPages: 0,
  page: 0,
  error: null,
  nextPage: PokeApi.firstPage,
  selectedSpecies: null,
});

const ACTIONS = {
  [START_LOAD](state) {
    return state.merge({
      loading: true,
      selectedSpecies: null,
    });
  },
  [LOAD_PAGE](state, { results, nextPage, prevPage, totalPages, page }) {
    return state.merge({
      loading: false,
      items: results,
      page,
      totalPages,
      nextPage,
      prevPage,
      error: null,
    });
  },
  [ERROR](state, { error }) {
    return state.merge({
      error,
      loading: false,
      hasMore: false,
    });
  },
  [RETRY](state) {
    return state.merge({
      error: false,
      hasMore: true,
    });
  },
  [SELECT](state, { selectedSpecies }) {
    return state.merge({ selectedSpecies });
  },
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action.payload);
  }
  return state;
}

const privateActions = {
  startLoad() {
    return {
      type: START_LOAD,
    };
  },
  loadPage(payload) {
    return {
      type: LOAD_PAGE,
      payload,
    };
  },
  onError(error, nextPage) {
    return {
      type: ERROR,
      payload: { error, nextPage },
    };
  },
  retry() {
    return {
      type: RETRY,
    };
  },
  select(selectedSpecies) {
    return {
      type: SELECT,
      payload: { selectedSpecies },
    };
  },
};

export const actions = {
  loadPage(page) {
    return async (dispatch) => {
      try {
        dispatch(privateActions.startLoad());
        await wait(300);
        const payload = await PokeApi.getSpecies(page);
        dispatch(privateActions.loadPage(payload));
      } catch (error) {
        console.error(error);
        dispatch(privateActions.onError(error, page));
      }
    };
  },
  retry() {
    return privateActions.retry();
  },
  select(species) {
    return privateActions.select(species);
  },
};
