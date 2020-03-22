import React, { useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import data from './data.json';

interface Option {
  value: string;
  label: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin: 25px;
  padding: 25px;
`;

// const SelectStyle = styled.div``;

export default function Filters() {
  const [project, setProject] = useState();
  const [version, setVersion] = useState();
  const [team, setTeam] = useState();

  const projects: Array<Option> = data.projects.map(({ id, name }) => ({
    value: id,
    label: name,
  }));
  const versions: Array<Option> = data.projects[0].versions.map(value => ({ value, label: value }));
  const teams: Array<Option> = data.projects[0].teams.map(value => ({ value, label: value }));

  const defaultProject: Option = projects[0];
  const defaultVersion: Option = versions[0];
  const defaultTeam: Option = teams[0];

  return (
    <div>
      <Wrapper>
        <Select options={projects} defaultValue={defaultProject} />
        <Select options={versions} defaultValue={defaultVersion} />
        <Select options={teams} defaultValue={defaultTeam} />

      </Wrapper>
      <ul>
        <li>

          Project:
          {project}
        </li>
        <li>Version: {version}</li>
        <li>Team: {team}</li>
      </ul>
    </div>
  );
}
