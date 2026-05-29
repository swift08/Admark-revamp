const fs = require('fs');

const cities = ["Mysore", "Bengaluru", "Hyderabad", "Hubli", "Mangaluru", "Pune", "Mumbai", "Chennai", "Delhi", "Kochi"];
const services = [
  "Custom Software Development", "SaaS Development", "ERP Systems", "React Frontend Development", 
  "Python Backend", "AI/ML Solutions", "Safety Technology", "E-commerce Platforms", "Mobile App Development", 
  "UI/UX Design"
];

let schemas = [];

// Base Organization
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
  "founder": [
    { "@id": "https://admarkdigitals.com/#tejasvijois" },
    { "@id": "https://admarkdigitals.com/#harshith" }
  ]
});

// Founders
const founders = ["Tejasvi Jois", "Harshith V Malipatil", "Revanth Kumar S", "Prajwal BP"];
founders.forEach(f => {
  schemas.push({
    "@type": "Person",
    "@id": `https://admarkdigitals.com/#${f.split(' ')[0].toLowerCase()}`,
    "name": f,
    "worksFor": { "@id": "https://admarkdigitals.com/#organization" }
  });
});

// Generate 100 LocalBusiness / Service combinations
cities.forEach(city => {
  services.forEach(service => {
    schemas.push({
      "@type": "Service",
      "@id": `https://admarkdigitals.com/#service-${service.replace(/\s+/g, '-').toLowerCase()}-${city.toLowerCase()}`,
      "name": `${service} in ${city}`,
      "provider": { "@id": "https://admarkdigitals.com/#organization" },
      "areaServed": { "@type": "City", "name": city },
      "description": `Top-tier ${service} provided by AdMark Digitals for startups and enterprises in ${city}.`
    });
  });
});

// Write to file
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
