export const LINKS = [
  { name: "github", href: "https://github.com/anuraglol" },
  { name: "twitter", href: "https://twitter.com/imanuraglol" },
  { name: "email", href: "mailto:hi@anurag.tech" },
];

export const highlight = (text: string) =>
  `<span data-safe="highlight" class="text-foreground font-medium">${text}</span>`;

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
    title: "Design Engineer at Beanstalk (Ongoing)",
    link: "https://beanstalk.fi",
  },
  {
    title: "Design Engineer at Cleopetra",
    link: "https://cleopetra.fun",
    description: `I've previously worked on ${highlight("Cleopetra")}, where I've helped in building the backend infrastructure for the liquidity provisioning product which helped LPs earn over ${highlight("$2M+")} in fees with ${highlight("$30M+")} in overall deposits. I also developed and enhanced the trading interface for token pairs, focusing on usability and performance, and integrated payment APIs while maintaining a scalable, complex frontend architecture.`,
  },
  {
    title: "Lead Engineer at CandyPay",
    link: "https://twitter.com/candypayfun",
    description: `I've previously also worked on ${highlight("CandyPay")}, a seamless checkout solution built on top of ${highlight("Solana Pay")}, where I was responsible for building the core backend infrastructure. It was used by ${highlight("500+")} ecosystem teams, including ${highlight("Solana Foundation")} and ${highlight("Prospera Global")}, and was also used by ${highlight("Balaji Srinivasan")} during one of his Network State meetups. I built two production-ready web apps including a user dashboard and checkout platform, designed and developed the frontend architecture from scratch, and created a React-based checkout SDK for easy integration across third-party sites.`,
  },
  {
    title: "Developer at Metapass",
    link: "https://twitter.com/metapasshq",
    description: `I've worked on ${highlight("Metapass")}, a blockchain-based ticketing platform on ${highlight("Solana")}, where I contributed to building and maintaining user-facing components for the event creation and ticketing flow, and collaborated with the team to implement secure, on-chain ticketing logic via frontend integrations.`,
  },
  {
    title: "Technical Writer",
    link: "https://anuragkr.hashnode.dev",
    description: `I also write developer-focused technical articles covering web development, tooling, and Web3 concepts, published on ${highlight("Hashnode")} and ${highlight("Dev.to")}, collectively reaching over ${highlight("60,000+")} readers.`,
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
    items: ["Chainsaw Man", "Takopi's Original Sin", "Attack on Titan", "Witch Hat Atelier"],
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
    items: ["zed — main editor with vim mode.", "neovim — quick terminal edits."],
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
    title: "kotiri",
    description:
      "a tiny in-memory store like redis, built in golang. supports major redis operations and works with redis-cli.",
    url: "https://github.com/anuraglol/kotiri",
  },
  {
    title: "kaze",
    description:
      "a minimal torrent client built in golang. supports downloading files via magnet links and .torrent files with peer wire protocol implementation.",
    url: "https://github.com/anuraglol/kaze",
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
