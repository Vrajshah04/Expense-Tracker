import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import { rupee } from '../../utils/Icons';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income(){
    const {addIncome,getIncomes,incomes,deleteIncome,totalIncome} = useGlobalContext();

    useEffect(()=>{
        getIncomes();
    }, [])

    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className="total-income">Total Income: <span>{rupee} {totalIncome()}</span></h2>
                <div className="income-content">
                    <div className = "form-container">
                        <Form/>
                    </div>
                    <div className = "incomes">
                    {incomes.map((income) => {
                            const {_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id} 
                                title={title} 
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type={type}
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                    </div>
                </div>                
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;

    .total-income {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: 0.5rem;

        span {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }

    .income-content {
        display: flex;
        gap: 2rem;

        .form-container {
            flex: 1;
        }

        .incomes {
            flex: 2;
            max-height: 60vh;
            overflow-y: auto;
            &::-webkit-scrollbar {
                width: 0;
            }
        }
    }

    @media (max-width: 768px) {
        .income-content {
            flex-direction: column;
        }

        .total-income {
            font-size: 1.8rem;

            span {
                font-size: 2rem;
            }
        }
    }

    @media (max-width: 480px) {
        .total-income {
            font-size: 1.5rem;

            span {
                font-size: 1.8rem;
            }
        }

        .income-content {
            gap: 1rem;
        }
    }
`;


export default Income