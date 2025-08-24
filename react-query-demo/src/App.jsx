import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./PostsComponent";
import './App.css'

const queryClient = new QueryClient();

function App() {

  return (
    <>
     <QueryClientProvider client={queryClient}>
       <PostsComponent />
          </QueryClientProvider>
    </>
  )
}

export default App
