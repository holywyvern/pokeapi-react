import Immutable from "seamless-immutable";

import i18n, { initI18n } from "@/config/i18n";

import wait from "@/utils/wait";

const INITIAL_STATE = Immutable({
  loading: true,
  language: "en",
  error: null,
  t: (...args) => i18n.t(...args),
});

export const LOAD_START = "@locales/LOAD_START";
export const LOAD_SUCCESS = "@locales/LOAD_SUCCESS";
export const LOAD_FAILED = "@locales/LOAD_FAILED";

const ACTIONS = {
  [LOAD_START](state) {
    return state.merge({ loading: true, error: null });
  },
  [LOAD_SUCCESS](state, { i18n }) {
    return state.merge({
      loading: false,
      language: i18n.language,
    });
  },
  [LOAD_FAILED](state, { error }) {
    return state.merge({ loading: false, error });
  },
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action.payload);
  }
  return state;
}

const privateActions = {
  loadStart() {
    return {
      type: LOAD_START,
    };
  },
  loadSuccess(i18n) {
    return {
      type: LOAD_SUCCESS,
      payload: { i18n },
    };
  },
  loadFailed(error) {
    return {
      type: LOAD_FAILED,
      payload: { error },
    };
  },
};

export const actions = {
  init() {
    return async (dispatch) => {
      try {
        dispatch(privateActions.loadStart());
        await wait(300);
        await initI18n();
        dispatch(privateActions.loadSuccess(i18n));
      } catch (error) {
        console.error(error);
        dispatch(privateActions.loadFailed(error));
      }
    };
  },
  changeLanguage(language) {
    return async (dispatch) => {
      try {
        dispatch(privateActions.loadStart());
        await wait(300);
        await i18n.changeLanguage(language);
        await i18n.loadNamespaces("common");
        await wait(300);
        dispatch(privateActions.loadSuccess(i18n));
      } catch (error) {
        console.error(error);
        dispatch(privateActions.loadFailed(error));
      }
    };
  },
};
