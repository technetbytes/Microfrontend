import React, { useState, useEffect } from "react";

// Load Google Font
const loadGoogleFont = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    loadGoogleFont();

    const handleShowToast = (event) => {
      const { message, type } = event.detail;
      const id = new Date().getTime();

      setToasts((prevToasts) => [...prevToasts, { message, type, id }]);

      setTimeout(() => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
      }, 10000);
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
            animation: "slideInRight 0.3s ease, fadeOut 0.6s 4.4s forwards",
          }}
        >
          <div style={iconAndMessageStyle}>
            <div style={{ ...iconStyle, ...iconBackground[toast.type] }}>
              <span>{toastIcons[toast.type]}</span>
            </div>
            <span>{toast.message}</span>
          </div>
          <button onClick={() => removeToast(toast.id)} style={dismissButtonStyle}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

// Styles for the Toast Container
const toastContainerStyle = {
  position: "fixed",
  top: 60,
  right: 10,
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

// Styles for individual Toasts with a white background
const toastStyle = {
  padding: "15px 20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "white", // White background for the toast
  color: "#333", // Darker text for readability
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minWidth: "300px",
  maxWidth: "400px",
  fontFamily: "'Roboto', sans-serif", // Apply the Roboto font
  fontSize: "14px",
  fontWeight: "500", // Font weight for a professional look
  lineHeight: "1.5",
  borderBottom: "10px solid",
};

// Style for the dismiss button
const dismissButtonStyle = {
  background: "transparent",
  border: "none",
  color: "#333",
  fontSize: "18px",
  marginLeft: "15px",
  cursor: "pointer",
};

// Style for icon and message wrapper
const iconAndMessageStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px", // Increased gap for better spacing between icon and message
};

// Icon styles with white icon and circular background based on toast type
const iconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  color: "white", // White icon color
  fontSize: "16px",
};

// Background color for icon circle based on toast type
const iconBackground = {
  success: {
    backgroundColor: "#28a745", // Green background for success
  },
  error: {
    backgroundColor: "#dc3545", // Red background for error
  },
  info: {
    backgroundColor: "#007bff", // Blue background for info
  },
};

// Icon characters based on toast type
const toastIcons = {
  success: "✔", // Checkmark for success
  error: "✖", // Cross for error
  info: "ℹ", // Exclamation mark for info
};

// Toast type styles (success, error, info) with colored bottom border
const toastType = {
  success: {
    borderBottomColor: "#28a745", // Green for success
  },
  error: {
    borderBottomColor: "#dc3545", // Red for error
  },
  info: {
    borderBottomColor: "#007bff", // Blue for info
  },
};

// Keyframe animations
const styles = document.createElement("style");
styles.type = "text/css";
styles.innerHTML = `
@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}
`;
document.head.appendChild(styles);

export default ToastContainer;
