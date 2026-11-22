export const GTM_ID = (import.meta.env.VITE_GTM_ID as string | undefined)?.trim();

export function isGtmConfigured(): boolean {
  return Boolean(GTM_ID && /^GTM-[A-Z0-9]+$/i.test(GTM_ID));
}

/** Official GTM bootstrap, guarded so it only loads once per page. */
export function getGtmBootstrapScript(id: string): string {
  return `window.dataLayer=window.dataLayer||[];if(!window.__GTM_LOADED__){window.__GTM_LOADED__=true;(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');}`;
}

export type GtmPageViewPayload = {
  event: "page_view";
  page_path: string;
  page_title: string;
  page_location: string;
};

export function pushGtmPageView(payload: GtmPageViewPayload): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __GTM_LOADED__?: boolean;
  }
}
