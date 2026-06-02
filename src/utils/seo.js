export const injectFAQSchema = (data) => {
  const existingScript = document.getElementById("faq-schema");
  if (existingScript) existingScript.remove();

  const script = document.createElement("script");
  script.id = "faq-schema";
  script.type = "application/ld+json";
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });
  document.head.appendChild(script);
};
