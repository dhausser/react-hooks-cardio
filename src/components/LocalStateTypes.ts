import { ValueType, ActionMeta } from "react-select";

export interface OptionType {
  value: string;
  label: string;
};

export interface FilterContext {
  state: AppState
  setProject: (value: ValueType<OptionType>, action: ActionMeta) => void
  setVersion: (value: ValueType<OptionType>, action: ActionMeta) => void
  setTeam: (value: ValueType<OptionType>, action: ActionMeta) => void
}

export type AppState = {
  project: ValueType<OptionType> | null;
  version: ValueType<OptionType> | null;
  team: ValueType<OptionType> | null;
};

export interface Project {
  type: "SET_PROJECT";
  payload: ValueType<OptionType>;
};

export interface Version {
  type: "SET_VERSION";
  payload: ValueType<OptionType>;
};

export interface Team {
  type: "SET_TEAM";
  payload: ValueType<OptionType>;
};

export  interface Reset {
  type: "RESET";
  payload: ValueType<OptionType>;
};

export  type Action = Project | Version | Team | Reset;
  // | { type: "SET_PROJECT"; payload: ValueType<OptionType> }
  // | { type: "SET_VERSION"; payload: ValueType<OptionType> }
  // | { type: "SET_TEAM"; payload: ValueType<OptionType> }
  // | { type: "RESET"; payload: ValueType<OptionType> };