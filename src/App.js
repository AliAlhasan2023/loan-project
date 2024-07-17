import "./App.css";
import Header from "./Header";
import LoanForm from "./LoanForm";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="form">
        <LoanForm />
      </div>
    </div>
  );
}

export default App;
