import React from "react";
import Main from "./components/pages/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
