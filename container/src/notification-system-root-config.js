import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { registerApplication, start } from "single-spa";
import Header from "./header";
import Home from "./Home"; 
import Toast from "./Toast"; 

function Root() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    function handleRouteChange() {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("single-spa:routing-event", handleRouteChange);

    return () => {
      window.removeEventListener("single-spa:routing-event", handleRouteChange);
    };
  }, []);

  return (
    <div>
      <Header />
      <main id="main-content">
        {currentPath === "/" ? <Home /> : null}
        <Toast /> 
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Root />);
}

// Register applications
registerApplication({
  name: "@notification-system/about",
  app: () => System.import("@notification-system/about"),
  activeWhen: ["/purchase-order"],
});

registerApplication({
  name: "@notification-system/contact",
  app: () => System.import("@notification-system/contact"),
  activeWhen: ["/company"],
});

start({
  urlRerouteOnly: true, 
});