import { SEOMetadata } from '../types';

export const updateSEO = (metadata: SEOMetadata) => {
  // Update Title
  document.title = `${metadata.title} | ElectroMart`;

  // Update Meta Description
  let metaDesc = document.querySelector("meta[name='description']");
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', metadata.description);

  // Update OG Tags (Simulation)
  const ogTitle = document.querySelector("meta[property='og:title']") || document.createElement('meta');
  ogTitle.setAttribute('property', 'og:title');
  ogTitle.setAttribute('content', metadata.title);
  document.head.appendChild(ogTitle);

  // JSON-LD Injection
  if (metadata.jsonLd) {
    let script = document.getElementById('json-ld-script');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-script';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(metadata.jsonLd);
  }
};