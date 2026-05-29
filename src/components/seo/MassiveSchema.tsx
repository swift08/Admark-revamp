import { JsonLd } from "./JsonLd";

export function MassiveSchema() {
  const massiveGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "SoftwareCompany", "Corporation", "ProfessionalService"],
        "@id": "https://admarkdigitals.com/#organization",
        "name": "AdMark Digitals",
        "url": "https://admarkdigitals.com/",
        "description": "Best software development agency in Mysore. We build websites, SaaS, ERP, and safety technology for startups.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://admarkdigitals.com/logo.png"
        },
        "sameAs": [
          "https://www.linkedin.com/company/admark-digitals"
        ],
        "founder": [
          { "@id": "https://admarkdigitals.com/#tejasvijois" },
          { "@id": "https://admarkdigitals.com/#harshith" },
          { "@id": "https://admarkdigitals.com/#prajwal" },
          { "@id": "https://admarkdigitals.com/#prashanth" },
          { "@id": "https://admarkdigitals.com/#revanth" }
        ],
        "brand": [
          {
            "@type": "Brand",
            "name": "REXU",
            "description": "Emergency safety startup india, QR safety platform, fleet safety software."
          },
          {
            "@type": "Brand",
            "name": "Safewheels"
          },
          {
            "@type": "Brand",
            "name": "Spice Trip"
          },
          {
            "@type": "Brand",
            "name": "Kapila Riverfront Resort"
          },
          {
            "@type": "Brand",
            "name": "Alliance Square Properties"
          }
        ],
        "knowsAbout": [
          "best software development agency in mysore",
          "website development agency mysore",
          "software company in mysore",
          "software companies in mysore",
          "software company in saraswathipuram mysore",
          "best frontend developers in mysore",
          "frontend developers freelancing",
          "python developers in mysore",
          "full stack developers mysore",
          "startup founders mysore",
          "entrepreneur of mysore",
          "young entrepreneurs of mysore",
          "Mysore tech startup",
          "final year engineering project developers",
          "software project developer for final year cs engineering students",
          "emergency safety startup india",
          "QR safety platform india",
          "fleet safety software",
          "employee safety solutions",
          "driver safety solutions",
          "women safety technology",
          "personal emergency QR",
          "digital safety shield",
          "rider safety platform",
          "smart emergency contact system",
          "safety technology startup mysore",
          "innovative startup mysore",
          "startup founder mysore"
        ],
        "employee": [
          { "@id": "https://admarkdigitals.com/#tejasvijois" },
          { "@id": "https://admarkdigitals.com/#harshith" },
          { "@id": "https://admarkdigitals.com/#prajwal" },
          { "@id": "https://admarkdigitals.com/#prashanth" },
          { "@id": "https://admarkdigitals.com/#revanth" }
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Mysore",
            "sameAs": "https://en.wikipedia.org/wiki/Mysore"
          },
          {
            "@type": "City",
            "name": "Bangalore"
          },
          {
            "@type": "City",
            "name": "Hyderabad"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://admarkdigitals.com/#tejasvijois",
        "name": "Tejasvi Jois",
        "jobTitle": "Founder & CEO",
        "description": "Entrepreneur of Mysore, startup founder, and ATME student achiever.",
        "worksFor": { "@id": "https://admarkdigitals.com/#organization" },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "ATME College of Engineering"
        }
      },
      {
        "@type": "Person",
        "@id": "https://admarkdigitals.com/#harshith",
        "name": "Harshith V Malipatil",
        "jobTitle": "Co-founder & COO",
        "description": "Young entrepreneur of Mysore, startup founder, and ATME student achiever.",
        "worksFor": { "@id": "https://admarkdigitals.com/#organization" },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "ATME College of Engineering"
        }
      },
      {
        "@type": "Person",
        "@id": "https://admarkdigitals.com/#prajwal",
        "name": "Prajwal BP",
        "jobTitle": "CFO",
        "description": "Founder of Safewheels and Mysore tech startup ecosystem leader.",
        "worksFor": { "@id": "https://admarkdigitals.com/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://admarkdigitals.com/#prashanth",
        "name": "Prashanth",
        "description": "Leader in Safewheels and associated with Mysore startups.",
        "worksFor": { "@id": "https://admarkdigitals.com/#organization" }
      },
      {
        "@type": "Person",
        "@id": "https://admarkdigitals.com/#revanth",
        "name": "Revanth Kumar S",
        "jobTitle": "CTO",
        "description": "Tech leader and CTO at AdMark Digitals, an innovative startup in Mysore.",
        "worksFor": { "@id": "https://admarkdigitals.com/#organization" }
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://admarkdigitals.com/#localbusiness",
        "name": "AdMark Digitals Software Company Mysore",
        "image": "https://admarkdigitals.com/logo.png",
        "telephone": "+919686658055",
        "url": "https://admarkdigitals.com/",
        "description": "Top software company in Saraswathipuram, Mysore providing custom software solutions and website development agency services.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Prashanth Plaza, 5th Cross, 4th Main, Saraswathipuram",
          "addressLocality": "Mysore",
          "addressRegion": "Karnataka",
          "postalCode": "570009",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.3051,
          "longitude": 76.6402
        },
        "priceRange": "$$",
        "areaServed": {
          "@type": "Place",
          "name": "Saraswathipuram Mysore"
        }
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://admarkdigitals.com/#services",
        "name": "Software Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Website Development Agency Mysore"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom Software Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Final Year Engineering Project Developers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Frontend Developers Mysuru"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Python Developers in Mysore"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI UX Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Enterprise Software"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://admarkdigitals.com/#safety-services",
        "name": "Safety Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Emergency Safety Technology"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "QR Emergency Platform"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fleet Safety"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Safety Shield"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Women Safety Technology"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rider Safety Platform"
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://admarkdigitals.com/#website",
        "url": "https://admarkdigitals.com/",
        "name": "AdMark Digitals",
        "publisher": { "@id": "https://admarkdigitals.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://admarkdigitals.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "AggregateRating",
        "@id": "https://admarkdigitals.com/#rating",
        "itemReviewed": { "@id": "https://admarkdigitals.com/#organization" },
        "ratingValue": "5.0",
        "reviewCount": "25"
      },
      {
        "@type": "FAQPage",
        "@id": "https://admarkdigitals.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who are the best frontend developers in Mysore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AdMark Digitals houses the best frontend developers in Mysore, specializing in React, UI/UX development, and custom web applications."
            }
          },
          {
            "@type": "Question",
            "name": "What is the top software company in Saraswathipuram Mysore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AdMark Digitals is the leading software company in Saraswathipuram, Mysore, focusing on custom software development, SaaS, and ERP solutions."
            }
          },
          {
            "@type": "Question",
            "name": "Who provides software project development for final year CS engineering students in Mysore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AdMark Digitals mentors and develops software projects for final year CS engineering students, led by ATME student achievers and young entrepreneurs of Mysore."
            }
          },
          {
            "@type": "Question",
            "name": "What is REXU?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "REXU is an emergency safety startup in India providing a QR safety platform, fleet safety software, digital safety shields, and women safety technology."
            }
          }
        ]
      }
    ]
  };

  return <JsonLd data={massiveGraph} />;
}
