import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Title } from 'components/atoms/Title/Title';
import { DashboardWrapper, DashboardNav, DashNav } from './Dashboard.style';
import { Button } from 'components/atoms/Button/Button';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      //.then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  }, [id, groups]);

  const ToogleChange = () => {
    menuVisible ? setMenuVisible(false) : setMenuVisible(true);
    console.log(menuVisible);
  };

  return (
    <DashboardWrapper>
      <DashboardNav>
        <Title>Grupa {id || groups[0]}</Title>
        <Button onClick={ToogleChange}>Change group </Button>
        <DashNav Visible={menuVisible} onClick={ToogleChange}>
          <nav>
            {groups.map((group) => (
              <Link key={group} to={`/group/${group}`}>
                {/* <GroupButton>{group}</GroupButton> */}
                {group}
              </Link>
            ))}
          </nav>
        </DashNav>
      </DashboardNav>
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </DashboardWrapper>
  );
};

export default Dashboard;
