import React, { useReducer } from "react";
import styled from "styled-components";
import Select from "react-select";
import data from "./data.json";

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  min-width: 250px;
  margin: 10px;
`;

const initialState = {
  project: { value: "", label: "" },
  version: { value: "", label: "" },
  team: { value: "", label: "" }
};

function reducer(state, action) {
  if (!action.option) {
    return initialState;
  }

  const { value, label } = action.option;

  switch (action.type) {
    case "project":
      return { ...initialState, project: { value, label } };
    case "version":
      return { ...state, version: { value, label } };
    case "team":
      return { ...state, team: { value, label } };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

export default function Filters() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const projects = data.projects.map(({ id, name }) => ({
    value: id,
    label: name
  }));
  const versions = data.projects[0].versions.map(value => ({
    value,
    label: value
  }));
  const teams = data.projects[0].teams.map(value => ({ value, label: value }));

  // const defaultProject = projects[0];
  // const defaultVersion = versions[0];
  // const defaultTeam = teams[0];

  return (
    <div>
      <Wrapper>
        <Content>
          <Select
            options={projects}
            isClearable
            onChange={e => dispatch({ type: "project", option: e })}
          />
        </Content>
        <Content>
          <Select
            options={versions}
            value={state?.version}
            isClearable
            onChange={e => dispatch({ type: "version", option: e })}
          />
        </Content>
        <Content>
          <Select
            options={teams}
            value={state?.team}
            isClearable
            onChange={e => dispatch({ type: "team", option: e })}
          />
        </Content>
      </Wrapper>
      <ul>
        <li>State: {JSON.stringify(state)}</li>
        <li>Project: {state.project.label}</li>
        <li>Version: {state.version.label}</li>
        <li>Team: {state.team.label}</li>
      </ul>
    </div>
  );
}
