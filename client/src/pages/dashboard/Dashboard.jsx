import React from 'react'
import { useMemo } from 'react';
import { useUser } from '@clerk/clerk-react'
import FinancialRecordForm from './financial-record-form';
import FinancialRecordList from './financial-record-list';
import { useFinancialRecords } from '../../contexts/financial-record-context';

const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <h1>Welcome to BudgetBuddy {user?.firstName}, here are your finances: </h1>
      <h3>Total Monthly: {totalMonthly}</h3>
      <FinancialRecordForm />
      <FinancialRecordList />
    </div>
  )
}

export default Dashboard
