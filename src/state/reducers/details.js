import Immutable from "seamless-immutable";
import { replace } from "connected-react-router";

import { SELECT, actions as speciesActions } from "./species";

import PokeApi from "@/services/PokeApi";

const INITIAL_STATE = Immutable({
  loading: true,
  selectedSpecies: null,
});

const ACTIONS = {
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

export const actions = {
  select(id) {
    return async (dispatch) => {
      try {
        const species = await PokeApi.getDetails(id);
        dispatch(speciesActions.select(species));
      } catch (e) {
        dispatch(replace(`${process.env.PUBLIC_URL}/error`));
      }
    };
  },
};
