"use client";

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Component to track route navigation and trigger events
 * (always wrap in Suspense)
 *
 * For now only GTM events are called
 */

// https://nextjs.org/docs/app/api-reference/functions/use-router#examples

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleRouteChangeComplete = (url: string) => {
    // send GTM event
    // console.log("handleRouteChangeComplete: ", url);
    sendGTMEvent({
      event: "pageview",
      page: url,
    });
  };

  React.useEffect(() => {
    if (pathname && searchParams) {
      const searchParamsString = searchParams.toString();

      const url =
        pathname + (searchParamsString ? `?${searchParamsString}` : "");

      handleRouteChangeComplete(url);
    }
  }, [pathname, searchParams]);

  return null;
}
