import React from "react";
import styled from "styled-components";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

export default function Reports(props) {

  const data = ({
    datasets: [{
        data: [props.expense, props.income],
        backgroundColor:[
          'red',
          'green',
        ]
    },
  ],
  labels: ["Expense", "Income"], 
});

  
  return (
    <CardContent>
      <Pie  data={data} />
    </CardContent>
  );
}
