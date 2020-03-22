import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { useFilter } from "./LocalState";
import data from "../data.json";

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  min-width: 250px;
  margin: 10px;
`;

export default function Filters() {
  const { state, setProject, setVersion, setTeam } = useFilter();

  const projects = data.projects.map(({ id, name }) => ({
    value: id,
    label: name
  }));
  const versions = data.projects[0].versions.map(value => ({
    value,
    label: value
  }));
  const teams = data.projects[0].teams.map(value => ({ value, label: value }));

  return (
    <div>
      <Wrapper>
        <Content>
          <Select
            options={projects}
            isClearable
            onChange={setProject}
            // onChange={e => setProject(e)}
          />
        </Content>
        <Content>
          <Select
            options={versions}
            value={state?.version}
            isClearable
            onChange={setVersion}
            // onChange={e => setVersion(e)}
          />
        </Content>
        <Content>
          <Select
            options={teams}
            value={state?.team}
            isClearable
            onChange={setTeam}
            // onChange={e => setTeam(e)}
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
