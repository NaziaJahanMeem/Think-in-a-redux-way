import Counter from "./components/Counter";

function App() {
  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      <Counter />
    </div>
  );
}

export default App;
