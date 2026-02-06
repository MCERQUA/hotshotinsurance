export const siteConfig = {
  // Site Information
  name: "Hotshot Insurance",
  title: "Hotshot Trucking Insurance | Specialized Coverage for Hotshot Operators",
  description: "Comprehensive insurance solutions for hotshot trucking operators. Get specialized general liability, cargo liability, physical damage, and workers compensation coverage. Licensed in all 50 states. Serving hotshot truckers nationwide.",
  url: "https://hotshotinsurance.com",
  ogImage: "https://hotshotinsurance.com/images/og-image.jpg",
  
  // Company Information
  company: {
    name: "Contractor's Choice Agency",
    phone: "844-967-5247",
    email: "josh@contractorschoiceagency.com",
    founder: "Josh Cotner",
    foundedYear: 2005,
    addresses: [
      {
        street: "12220 E Riggs Rd",
        city: "Chandler",
        state: "AZ",
        zip: "85249",
      },
      {
        street: "4435 E Chandler Blvd Suite 200",
        city: "Phoenix",
        state: "AZ",
        zip: "85048",
      },
    ],
  },
  
  // Navigation
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Coverage", href: "/coverage" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  
  // Footer Navigation
  footerNav: {
    coverage: [
      { title: "Theft Protection", href: "/coverage#theft" },
      { title: "Liability Coverage", href: "/coverage#liability" },
      { title: "Collision Coverage", href: "/coverage#collision" },
      { title: "Accessory Coverage", href: "/coverage#accessories" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Blog", href: "/blog" },
      { title: "Get a Quote", href: "/quote" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ],
  },
  
  // Coverage Types for Hotshot Trucking
  coverageTypes: [
    {
      title: "General Liability",
      description: "Protects against bodily injury and property damage claims from third parties. Essential coverage for hotshot operators.",
      icon: "Shield",
    },
    {
      title: "Cargo Liability",
      description: "Covers damage to cargo you're hauling. Protects your income and client relationships.",
      icon: "Truck",
    },
    {
      title: "Physical Damage",
      description: "Covers collision, comprehensive, and other damage to your truck. Get back on the road faster.",
      icon: "Zap",
    },
    {
      title: "Workers Compensation",
      description: "Required in most states if you have employees. Protects workers and your business.",
      icon: "Users",
    },
  ],
  
  // SEO Keywords for Hotshot Trucking
  keywords: [
    "hotshot trucking insurance",
    "hotshot insurance",
    "hotshot trucking liability insurance",
    "general liability insurance for hotshot truckers",
    "cargo liability insurance",
    "hotshot trucking cargo insurance",
    "truck insurance for independent operators",
    "expedited freight insurance",
    "small trucking company insurance",
    "hotshot operator insurance cost",
    "best hotshot trucking insurance",
    "hotshot trucks insurance coverage",
    "hotshot insurance companies",
  ],
  
  // Social Links
  socialLinks: {
    twitter: "https://twitter.com/contractorschoice",
    facebook: "https://facebook.com/contractorschoiceagency",
    instagram: "https://instagram.com/contractorschoice",
    linkedin: "https://linkedin.com/company/contractorschoice",
  },
};

export type SiteConfig = typeof siteConfig;
