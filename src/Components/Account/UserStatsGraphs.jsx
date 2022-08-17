import React from 'react';
import styled from 'styled-components';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 40rem) {
    grid-template-columns: 1fr 1fr;
  }
`;
const GraphItem = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  display: grid;
  align-items: center;
`;
const Total = styled.div`
  grid-column: 1;
  padding: 2rem;
  font-size: 2rem;

  @media (min-width: 40rem) {
    grid-column: 1 /3;
  }
`;

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
    setGraph(graphData);
  }, [data]);

  return (
    <Container>
      <Total>
        <p>Acessos: {total}</p>
      </Total>
      <GraphItem>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </GraphItem>
      <GraphItem>
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </GraphItem>
    </Container>
  );
};

export default UserStatsGraphs;
