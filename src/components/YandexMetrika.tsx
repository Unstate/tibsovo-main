import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const YandexMetrika = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if dataLayer is available
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];

      const currentUrl = window.location.href; // Get the full URL including hash/search
      const pageTitle = document.title; // Get the current page title

      window.dataLayer.push({
        event: "virtualPageView",
        dl_page_url: currentUrl,
        dl_page_title: pageTitle,
      });
    }
  }, [location]); // Trigger on location change

  return null; // This component renders nothing
};

// Add typescript declaration for window.dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default YandexMetrika;
