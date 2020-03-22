import React, { useState, useReducer } from "react";
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

const initialState = { value: "", label: "" };

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "set":
      return { value: "hello", label: "world" };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

export default function Filters() {
  const [project, setProject] = useState();
  const [version, setVersion] = useState();
  const [team, setTeam] = useState();

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

  const defaultProject = projects[0];
  const defaultVersion = versions[0];
  const defaultTeam = teams[0];

  return (
    <div>
      <Wrapper>
        <Content>
          <Select
            options={projects}
            defaultValue={defaultProject}
            isClearable
            onChange={e => {
              setProject(e.label);
              dispatch({ type: "set" });
            }}
          />
        </Content>
        <Content>
          <Select
            options={versions}
            defaultValue={defaultVersion}
            onChange={e => setVersion(e.value)}
          />
        </Content>
        <Content>
          <Select
            options={teams}
            defaultValue={defaultTeam}
            onChange={e => setTeam(e.value)}
          />
        </Content>
      </Wrapper>
      <ul>
        <li>State: {JSON.stringify(state)}</li>
        <li>Project: {project}</li>
        <li>Version: {version}</li>
        <li>Team: {team}</li>
      </ul>
    </div>
  );
}
