import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Post 
        author="Gustavo Linhaus" 
        content="Teste Teste Teste" 
      />

      <Post 
        author="Filipe Mattos" 
        content="Um novo post" 
      />
    </div>
  )
}
