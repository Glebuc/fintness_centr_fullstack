import { observer } from "mobx-react-lite";
import AppRouter from "./pages/AppRouter";
import { useContext, useEffect, useState, CSSProperties} from "react";

import ClipLoader from "react-spinners/ClipLoader";


const App = observer(() => {
  const [loading, setLoading] = useState(true)



  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
  };

  useEffect(() => {
    setTimeout(() => {
       setLoading(false)
    }, 700)
  }, [])

  if (loading) {
    return <ClipLoader
    color='purple'
    loading={loading}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  }
  return (
    <div>
      <AppRouter />
  </div>
  );
})





export default App;
