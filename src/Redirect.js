import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const APP_SCHEME = "flavorfy://share"; // Your deep link scheme
const APP_STORE_LINK = "https://apps.apple.com/us/app/flavorfy/id123456789"; // Replace with real link
const PLAY_STORE_LINK = "https://play.google.com/store/apps/details?id=com.flavorfy.app"; // Replace with real link
const WEB_FALLBACK = "https://yourwebsite.com"; // If user is on desktop

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const id = searchParams.get("id"); // Get params from URL
    const appUrl = `${APP_SCHEME}?id=${id}`;

    // Function to detect mobile platforms
    const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = () => /Android/.test(navigator.userAgent);

    if (isIOS() || isAndroid()) {
      window.location.href = appUrl;

      // If app is not installed, redirect after a delay
      setTimeout(() => {
        window.location.href = isIOS() ? APP_STORE_LINK : PLAY_STORE_LINK;
      }, 2500);
    } else {
      // If on desktop, navigate to a fallback page
      navigate(WEB_FALLBACK);
    }
  }, [searchParams, navigate]);

  return (
    <div>
      <h2>Redirecting...</h2>
      <p>If nothing happens, <a href={APP_STORE_LINK}>download the app here</a>.</p>
    </div>
  );
};

export default Redirect;
