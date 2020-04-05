import Immutable from "seamless-immutable";
import { replace } from "connected-react-router";

import { SELECT, actions as speciesActions } from "./species";

import PokeApi from "@/services/PokeApi";

const START_LOAD = "@details/START_LOAD";
const LOAD_ABILITIES = "@details/LOAD_ABILITIES";

const INITIAL_STATE = Immutable({
  loading: {
    abilities: true,
  },
  selectedSpecies: null,
  abilities: { hidden: null, regular: [] },
});

const ACTIONS = {
  [START_LOAD](state) {
    return state.merge({
      loading: {
        info: true,
        abilities: true,
      },
      abilities: { hidden: null, regular: [] },
    });
  },
  [SELECT](state, { selectedSpecies }) {
    return state.merge({
      selectedSpecies,
      loading: state.loading.merge({ info: false }),
    });
  },
  [LOAD_ABILITIES](state, { abilities }) {
    return state.merge({
      abilities,
      loading: state.loading.merge({ abilities: false }),
    });
  },
};

export default function reducer(state = INITIAL_STATE, action = {}) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action.payload);
  }
  return state;
}

export const privateActions = {
  startLoad() {
    return { type: START_LOAD };
  },
  loadAbilities({ abilities }) {
    return async (dispatch) => {
      try {
        const hidden =
          abilities.hidden && (await PokeApi.loadAbility(abilities.hidden));
        const regular = await Promise.all(
          abilities.regular.map((i) => PokeApi.loadAbility(i))
        );
        dispatch(privateActions.loadAbilitiesSuccess({ hidden, regular }));
      } catch (e) {
        console.error(e);
      }
    };
  },
  loadAbilitiesSuccess(abilities) {
    return {
      type: LOAD_ABILITIES,
      payload: { abilities },
    };
  },
};

export const actions = {
  select(id) {
    return async (dispatch) => {
      try {
        dispatch(privateActions.startLoad());
        const species = await PokeApi.getDetails(id);
        dispatch(speciesActions.select(species));
        dispatch(privateActions.loadAbilities(species));
      } catch (e) {
        dispatch(replace(`${process.env.PUBLIC_URL}/error`));
      }
    };
  },
};
