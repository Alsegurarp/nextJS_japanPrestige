export function pushPageView(path) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',           // use this in GTM as a Custom Event trigger
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}