import React from "react";
import { Layout } from "./components/Layout";
import { Balance } from "./components/Balance";
import { Transactions } from "./components/transactions/Transactions";
import { Form } from "./components/Form";

function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Transactions />
    </Layout>
  );
}

export default App;
