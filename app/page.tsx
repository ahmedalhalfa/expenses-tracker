import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from '@/components/AddTransaction';
import Balance from '@/components/Balance';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';
import { checkUser } from "@/lib/checkUser";

const HomePage = async () => {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  await checkUser(user);
  return (
    <>
      <h2 className="welcome">Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </>
  );
};

export default HomePage;
