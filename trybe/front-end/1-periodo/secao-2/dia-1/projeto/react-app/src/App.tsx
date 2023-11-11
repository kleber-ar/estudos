import Greeting from "./components/greeting"
import LuckyNumbers from "./components/luckyNumbers"
import LottoNumbers from "./components/LottoNumbers";
import PastResults from "./components/PastResults";
import './App.css';

function App() {

  return (
    <>
     <Greeting person={{fistName: "Kleber",lastNmae: "Rodrigues"}} />
     <LuckyNumbers/>
     <LottoNumbers/>
     <PastResults/>
    </>
  );
}

export default App
