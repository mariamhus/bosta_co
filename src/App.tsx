import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { useAppSelector } from "./stores/hooks";

function App() {
  const { language } = useAppSelector((state) => state.lang);
  let styling :any = '';
  if(language === "EN"){
    styling="ltr"
  }else{
    styling="rtl"
  };
  return (
    <>
      <BrowserRouter>
        <div style={{direction:styling}} className="max-w-7xl mx-auto container">
          <Header />
          <Router />
        </div>
        {/* </Switch> */}
      </BrowserRouter>
    </>
  );
}

export default App;
