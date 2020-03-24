import React from "react";
import Select from "react-select";
import styled from "styled-components";

import { useFilter } from "./LocalState";
import data from "../data.json";

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  min-width: 250px;
  margin: 10px;
`;

function Filters() {
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
            value={state?.project}
            isClearable
            onChange={setProject}
          />
        </Content>
        <Content>
          <Select
            options={versions}
            value={state?.version}
            isClearable
            onChange={setVersion}
          />
        </Content>
        <Content>
          <Select
            options={teams}
            value={state?.team}
            isClearable
            onChange={setTeam}
          />
        </Content>
      </Wrapper>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
}

export default Filters;
