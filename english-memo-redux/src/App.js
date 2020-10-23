import React from "react";
import PageLayout from "./components/PageLayout/PageLayout";
import MemoInsertFormContainer from "./containers/MemoInsertFormContainer";
function App() {
  return (
    <div className="App">
      <PageLayout>
        <MemoInsertFormContainer />
      </PageLayout>
    </div>
  );
}

export default App;
