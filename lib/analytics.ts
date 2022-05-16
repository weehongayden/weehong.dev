import * as Fathom from "fathom-client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const fathomId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID;

      if (fathomId) {
        Fathom.load(fathomId, {
          includedDomains: ["weehong.dev"],
        });
      }
    }

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);
};
