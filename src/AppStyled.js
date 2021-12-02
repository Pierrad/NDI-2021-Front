import styled from 'styled-components';

import backgroundImage from './assets/img/background.jpg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  flex-direction: column;
`;

