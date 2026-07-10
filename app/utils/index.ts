export const LINKS = [
  { name: "github", href: "https://github.com/anuraglol" },
  { name: "twitter", href: "https://twitter.com/imanuraglol" },
  { name: "email", href: "mailto:hi@anurag.tech" },
];

export const highlight = (text: string) =>
  `<span data-safe="highlight" class="text-foreground">${text}</span>`;

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
  )} for crypto-based tax payments and by ${highlight("Boba Guys")} for enabling crypto payments.`,
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
    title: "Design Engineer at Benstalk (Ongoing)",
    link: "https://beanstalk.fi",
  },
  {
    title: "Design Engineer at Cleopetra",
    link: "https://cleopetra.fun",
    items: [
      "Developed and enhanced the trading interface for token pairs, focusing on usability and performance.",
      "Integrated payment APIs and maintained a scalable, complex frontend architecture.",
    ],
  },
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
  `${highlight("Languages")}: Typescript, Golang`,
  `${highlight("Frameworks/Libraries")}: Next.js (React), Nuxt.js (Vue), Svelte, Hono`,
  `${highlight("Databases")}: PostgreSQL, MySQL`,
  `${highlight("Tools")}: Node.js`,
];

export const FAVORITES = [
  {
    label: "books",
    items: [
      "The Hunger Games — Suzanne Collins",
      "Harry Potter — J.K. Rowling",
      "A Man Called Ove — Fredrik Backman",
      "Tomorrow, and Tomorrow, and Tomorrow — Gabrielle Zevin",
    ],
  },
  {
    label: "movies",
    items: [
      "The Sky Is Pink",
      "The Social Network",
      "The Portrait of a Lady on Fire",
      "The Lord of the Rings: The Two Towers",
      "10 Things I Hate About You",
    ],
  },
  {
    label: "anime",
    items: [
      "Chainsaw Man",
      "Takopi's Original Sin",
      "Attack on Titan",
      "Witch Hat Atelier",
    ],
  },
  {
    label: "manga",
    items: ["Chainsaw Man"],
  },
  {
    label: "shows",
    items: ["New Girl", "Pluribus", "Modern Family"],
  },
];

export const USES = [
  {
    label: "os & desktop",
    items: [
      "nixos — declarative, reproducible system config.",
      "sway — tiling wayland compositor.",
      "vicinae — launcher and clipboard history.",
    ],
  },
  {
    label: "terminal",
    items: [
      "kitty — terminal emulator.",
      "fish — shell with autosuggestions.",
      "tmux — persistent sessions.",
    ],
  },
  {
    label: "editor",
    items: [
      "zed — main editor with vim mode.",
      "neovim — quick terminal edits.",
    ],
  },
  {
    label: "dev tools",
    items: [
      "bun — js runtime and package manager.",
      "go — backend and cli.",
      "nodejs — when the project needs it.",
      "python — scripts and tooling.",
    ],
  },
  {
    label: "browser & apps",
    items: [
      "zen — daily driver browser.",
      "firefox — fallback.",
      "spotify — music.",
      "mpv — video player.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "1008 ventures",
    description: "a fast moving venture studio building products in web3 and ai.",
    url: "https://1008.ventures",
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
  {
    title: "kotiri",
    description:
      "a tiny in-memory store like redis, built in golang. supports major redis operations and works with redis-cli.",
    url: "https://github.com/anuraglol/kotiri",
  },
];
