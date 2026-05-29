const fs = require('fs');

const keywords = [
  "best software development agency in mysore", "website development agency mysore", "software company in mysore",
  "software companies in mysore", "software company in saraswathipuram mysore", "best frontend developers in mysore",
  "frontend developers freelancing", "python developers in mysore", "full stack developers mysore", "startup founders mysore",
  "entrepreneur of mysore", "young entrepreneurs of mysore", "Mysore tech startup", "final year engineering project developers",
  "software project developer for final year cs engineering students", "emergency safety startup india", "QR safety platform india",
  "fleet safety software", "employee safety solutions", "driver safety solutions", "women safety technology",
  "personal emergency QR", "digital safety shield", "rider safety platform", "smart emergency contact system",
  "safety technology startup mysore", "innovative startup mysore", "startup founder mysore"
];

const founders = ["Tejasvi Jois", "Harshith V Malipatil", "Prajwal BP", "Prashanth", "Revanth Kumar S"];
const brands = ["REXU", "Safewheels", "Spice Trip", "Kapila Riverfront Resort", "Alliance Square Properties"];
const cities = ["Mysore", "Saraswathipuram", "Bengaluru", "Hyderabad", "Karnataka", "India"];

let schemas = [];

schemas.push({
  "@type": ["Organization", "SoftwareCompany", "Corporation", "ProfessionalService", "LocalBusiness"],
  "@id": "https://admarkdigitals.com/#organization",
  "name": "AdMark Digitals Software Company Mysore",
  "legalName": "AdMark Digitals",
  "url": "https://admarkdigitals.com/",
  "logo": "https://admarkdigitals.com/logo.png",
  "description": "Best software development agency in Mysore. We are a trusted Mysore tech startup offering website development, UI/UX, Python development, full stack solutions, SaaS, and safety technology.",
  "slogan": "Research-first agency building digital infrastructure for startups and MSMEs.",
  "telephone": "+919686658055",
  "email": "tejasvijois@gmail.com",
  "image": "https://admarkdigitals.com/logo.png",
  "founder": founders.map(f => ({ "@id": `https://admarkdigitals.com/#${f.replace(/\s+/g, '').toLowerCase()}` })),
  "brand": brands.map(b => ({ "@type": "Brand", "name": b })),
  "knowsAbout": keywords
});

founders.forEach(f => {
  schemas.push({
    "@type": "Person",
    "@id": `https://admarkdigitals.com/#${f.replace(/\s+/g, '').toLowerCase()}`,
    "name": f,
    "jobTitle": "Startup Founder Mysore",
    "description": `Young entrepreneur of Mysore and ATME student achiever driving innovation at AdMark Digitals, Safewheels, and REXU.`,
    "worksFor": { "@id": "https://admarkdigitals.com/#organization" },
    "knowsAbout": ["Entrepreneurship", "Mysore Tech Startup", "Software Development", "Safety Technology"]
  });
});

brands.forEach(b => {
  schemas.push({
    "@type": "SoftwareApplication",
    "@id": `https://admarkdigitals.com/#app-${b.replace(/\s+/g, '').toLowerCase()}`,
    "name": b,
    "applicationCategory": "EnterpriseApplication",
    "description": `An innovative startup brand or platform built by Mysore entrepreneurs associated with AdMark Digitals.`,
    "creator": { "@id": "https://admarkdigitals.com/#organization" }
  });
});

// Create 168 Services
keywords.forEach((kw, index) => {
  cities.forEach(city => {
    schemas.push({
      "@type": "Service",
      "@id": `https://admarkdigitals.com/#service-${index}-${city.toLowerCase()}`,
      "name": kw,
      "provider": { "@id": "https://admarkdigitals.com/#organization" },
      "areaServed": { "@type": "City", "name": city },
      "description": `We provide ${kw} to startups and enterprises across ${city}.`
    });
  });
});

// Create 140 Articles (28 keywords * 5 founders)
keywords.forEach((kw, index) => {
  founders.forEach((f, fIndex) => {
    schemas.push({
      "@type": "Article",
      "@id": `https://admarkdigitals.com/#article-${index}-${fIndex}`,
      "headline": `${f} on ${kw}`,
      "author": { "@id": `https://admarkdigitals.com/#${f.replace(/\s+/g, '').toLowerCase()}` },
      "publisher": { "@id": "https://admarkdigitals.com/#organization" },
      "description": `An in-depth look at ${kw} authored by ${f}, a leading young entrepreneur of Mysore and ATME student achiever.`
    });
  });
});

// Create 56 FAQPages (28 keywords * 2 sets of questions)
keywords.forEach((kw, index) => {
  schemas.push({
    "@type": "FAQPage",
    "@id": `https://admarkdigitals.com/#faq-who-${index}`,
    "mainEntity": {
      "@type": "Question",
      "name": `Who provides ${kw}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `AdMark Digitals provides exactly what you're looking for: ${kw}. We are a top trusted Mysore tech startup.`
      }
    }
  });
  schemas.push({
    "@type": "FAQPage",
    "@id": `https://admarkdigitals.com/#faq-why-${index}`,
    "mainEntity": {
      "@type": "Question",
      "name": `Why choose AdMark Digitals for ${kw}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Because we are the best software development agency in Mysore, with ATME achievers and strong founders providing ${kw}.`
      }
    }
  });
});

// Create 84 NewsArticles for entities
const entities = ["ATME student achievers", "Mysore entrepreneurs", "startup teams in Mysore"];
keywords.forEach((kw, index) => {
  entities.forEach((entity, eIndex) => {
    schemas.push({
      "@type": "NewsArticle",
      "@id": `https://admarkdigitals.com/#news-${index}-${eIndex}`,
      "headline": `How ${entity} are leading ${kw}`,
      "publisher": { "@id": "https://admarkdigitals.com/#organization" },
      "description": `Recent news on ${kw} highlighting the impact of ${entity} at AdMark Digitals.`
    });
  });
});

const fileContent = `import { JsonLd } from "./JsonLd";

export function MassiveSchema() {
  const massiveGraph = {
    "@context": "https://schema.org",
    "@graph": ${JSON.stringify(schemas, null, 2)}
  };

  return <JsonLd data={massiveGraph} />;
}
`;

fs.writeFileSync('src/components/seo/MassiveSchema.tsx', fileContent);
console.log('Successfully generated MassiveSchema.tsx with', schemas.length, 'schemas');
