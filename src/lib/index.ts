export const LINKS = [
  { name: "github", href: "https://github.com/anuraglol" },
  { name: "twitter", href: "https://twitter.com/imanuraglol" },
  { name: "email", href: "mailto:anurag2408@proton.me" },
];

export const highlight = (text: string) =>
  `<span data-safe="highlight" class="highlight text-foreground">${text}</span>`;

export const ACHIEVEMENTS = [
  `${highlight("CandyPay")} secured 4th place in the Payments track of the ${highlight(
    "Solana Summer Camp Hackathon",
  )}, with over ${highlight("18,000")} participants and ${highlight(
    "750",
  )} submissions, and received grants from the Solana Foundation.`,
  `${highlight("CandyPay")} processed over ${highlight("$120,000")} in transactions.`,
  `Won ${highlight("2 global-level hackathons")}, showcasing innovation in Web3 and beyond.`,
  `${highlight("CandyPay")} was adopted by ${highlight(
    "Próspera Global",
  )} for crypto-based tax payments and by ${highlight(
    "Boba Guys",
  )} for enabling crypto payments.`,
  `${highlight(
    "Caramel",
  )}, a project that acts as a proof-of-work for monetization of npm packages, which can be purchased via cryptocurrency, with payment processing handled through ${highlight(
    "CandyPay",
  )}, won the Solana Sandstorm Hackathon.`,
  `Authored articles with ${highlight(
    "60,000+ views",
  )} on <a href="https://anuragkr.hashnode.dev/" class="external-link" target="_blank" rel="noopener noreferrer">Hashnode</a> and <a href="https://dev.to/kranurag" class="external-link" target="_blank" rel="noopener noreferrer">Dev.to</a>, covering web development and Web3 topics.`,
];

export const EXPERIENCES = [
  {
    title: "Lead Engineer at CandyPay",
    link: "https://twitter.com/candypayfun",
    items: [
      "Built two production-ready web apps: a user dashboard and a checkout platform",
      "Designed and developed the frontend architecture from scratch",
      "Developed a React-based checkout SDK for easy integration across third-party sites",
      "Maintained a clean, scalable monorepo with multiple integrations and performance-focused refactors",
    ],
  },
  {
    title: "Developer at Metapass",
    link: "https://twitter.com/metapasshq",
    items: [
      "Contributed to the development of a blockchain-based ticketing platform on Solana",
      "Helped build and maintain user-facing components for the event creation and ticketing flow",
      "Collaborated with a small team to implement secure, on-chain ticketing logic via frontend integrations",
    ],
  },
  {
    title: "Technical Writer",
    link: "https://anuragkr.hashnode.dev",
    items: [
      "Wrote developer-focused technical articles covering web development, tooling, and Web3 concepts.",
      "Published on Hashnode and Dev.to, collectively reaching over 60,000 readers.",
    ],
  },
];

export const SKILLS = [
  `${highlight("Languages")}: JavaScript (TypeScript), Elixir`,
  `${highlight("Frameworks/Libraries")}: Next.js (React), Nuxt.js (Vue), Svelte, Hono`,
  `${highlight("Databases")}: PostgreSQL, MySQL`,
  `${highlight("Tools")}: Node.js`,
];

export const PROJECTS = [
  {
    title: "1008 ventures",
    description:
      "a fast moving venture studio building products in web3 and ai.",
    url: "https://sahil-pearl.vercel.app",
  },
  {
    title: "React & Next.js Snippets (VSCode ext)",
    description:
      "A VSCode extension with React and Next.js snippets, used by over 30,000 developers to speed up development.",
    url: "https://marketplace.visualstudio.com/items?itemName=AvneeshAgarwal.react-nextjs-snippets",
  },
  {
    title: "Proof of Attendance NFT Engine",
    description:
      "An image generation service that created custom NFTs for NAS Daily Summit attendees using @vercel/og.",
    url: "https://github.com/anuraglol/nas-summit-nft-gen",
  },
];
