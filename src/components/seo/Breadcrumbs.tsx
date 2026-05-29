import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "./JsonLd";
import React from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://admarkdigitals.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://admarkdigitals.com${item.url}`
      }))
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <nav aria-label="Breadcrumb" className="w-full flex items-center text-sm text-slate-400 mb-6 py-2 overflow-x-auto whitespace-nowrap">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <React.Fragment key={item.url}>
              <li>
                <ChevronRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
              </li>
              <li>
                {index === items.length - 1 ? (
                  <span className="text-white font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.url} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}
