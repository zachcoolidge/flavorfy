import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const APP_SCHEME = "flavorfy://"; // Base deep link scheme
const APP_STORE_LINK = "https://apps.apple.com/us/app/flavorfy/id123456789"; // Replace with real link

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const id = searchParams.get("id");
    const deepLinkUrl = `${APP_SCHEME}share?id=${id}`;

    // Check if user is on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // Set a timeout to show fallback UI if deep link fails
      const fallbackTimer = setTimeout(() => {
        setShowFallback(true);
      }, 2500);

      // Try to open the app first
      window.location.href = deepLinkUrl;

      // If the page is still here after a delay, the app probably isn't installed
      setTimeout(() => {
        window.location.href = APP_STORE_LINK;
      }, 1000);

      return () => clearTimeout(fallbackTimer);
    } else {
      // For non-iOS devices, redirect to landing page
      navigate("/");
    }
  }, [searchParams, navigate]);

  if (showFallback) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h2>Opening Flavorfy...</h2>
        <p>If the app doesn't open automatically, you may need to install it first.</p>
        <a 
          href={APP_STORE_LINK}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            marginTop: '20px'
          }}
        >
          Download on the App Store
        </a>
      </div>
    );
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <h2>Opening Flavorfy...</h2>
    </div>
  );
};

export default Redirect;
