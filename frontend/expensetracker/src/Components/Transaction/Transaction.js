import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import History from "./HistoryTransaction";

function Transaction(){
   return(
    <TransactionStyled>
        <InnerLayout>
            <h1>Transaction History</h1>
        <div className="history-con">
            <History />
        </div>
        </InnerLayout>
    </TransactionStyled>
   )
}

const TransactionStyled = styled.div`

`;

export default Transaction