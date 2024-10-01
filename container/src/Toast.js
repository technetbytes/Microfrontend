import React, { useState, useEffect } from "react";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handleShowToast = (event) => {
      const { message, type } = event.detail;
      const id = new Date().getTime(); 

      setToasts((prevToasts) => [
        ...prevToasts,
        { message, type, id },
      ]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }, 3000);
    };

    window.addEventListener("showToast", handleShowToast);

    return () => {
      window.removeEventListener("showToast", handleShowToast);
    };
  }, []);

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div style={toastContainerStyle}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            ...toastStyle,
            ...toastType[toast.type],
            animation: "slideIn 0.5s, fadeOut 0.6s 2.4s forwards",
          }}
        >
          <span>{toast.message}</span>
          <button onClick={() => removeToast(toast.id)} style={dismissButtonStyle}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

// Styles
const toastContainerStyle = {
  position: "fixed",
  top: 10,
  right: 10,
  zIndex: 1000,
};

const toastStyle = {
  padding: "10px 20px",
  borderRadius: "5px",
  marginBottom: "10px",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transform: "translateX(0)",
  opacity: 1,
  animation: "slideIn 0.3s",
};

const dismissButtonStyle = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "16px",
  marginLeft: "10px",
  cursor: "pointer",
};

// Toast types styling
const toastType = {
  success: { backgroundColor: "green" },
  error: { backgroundColor: "red" },
  info: { backgroundColor: "blue" },
};

// Keyframe animations for slide-in and fade-out
const styles = document.createElement("style");
styles.type = "text/css";
styles.innerHTML = `
@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 1;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
`;
document.head.appendChild(styles);

export default ToastContainer;
