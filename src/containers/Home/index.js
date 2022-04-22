import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverView from "./OverView";
import Transactions from "./Transactions";
import Reports from "./Reports";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;

const Home = (props) => {
    const [transactions, setTransaction] = useState([]);
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);

    const calculateBalance = () => {
        let exp = 0;
        let inc = 0;
        transactions.map((payload) =>
            payload.type === "EXPENSE"
                ? (exp = exp + payload.amount)
                : (inc = inc + payload.amount),
        );
        setExpense(exp);
        setIncome(inc);
    };
    useEffect(() => calculateBalance(), [transactions]);

    const addTransaction = (payload) => {
        const transactionArray = [...transactions];
        transactionArray.push(payload);
        setTransaction(transactionArray);
    };
    return (
        <Container>
            <OverView
                expense={expense}
                income={income}
                addTransaction={addTransaction}
            />
            {transactions?.length ? (
                <Transactions transactions={transactions} />
            ) : (
                ""
            )}
            <Reports  expense={expense}
                income={income}/>
        </Container>
    );
};
export default Home;