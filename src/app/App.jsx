import Maintenance from "@layouts/maintenance/maintenance";
import { IconWhatsApp } from "@utils/icons/icons.jsx";
import AppContext from "@context/app-context";
import { useContext, useEffect } from "react";
import AppRouter from "@routes/router/root";
import { Toaster } from "sonner";
import "./App.css";

function App() {
  const context = useContext(AppContext);
  useEffect(() => {
    context.fetchData();
  }, []);

  return (
    <>
      <Toaster richColors />
      {context.dataMaintenance.active ? (
        <Maintenance maintenance={context.dataMaintenance} />
      ) : (
        <AppRouter />
      )}
      {/* Icono WhatsApp */}
      <div className="wpp hidden">
        <a href="https://wa.me/573118345217/?text=Hola..." target="_blank">
          <IconWhatsApp />
        </a>
      </div>
    </>
  );
}

export default App;
