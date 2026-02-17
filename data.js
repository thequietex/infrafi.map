// infrafi.map — DePIN / InfraFi project data
// Sources: DePINscan, DePIN.Ninja, CoinGecko, Messari, Crunchbase, CryptoRank

const PROJECTS = [
  // ==================== COMPUTE ====================
  {
    name: "Render Network",
    ticker: "RENDER",
    vertical: "Compute",
    chain: "Solana",
    revenueAnnualized: "$456M",
    revenueRaw: 456000000,
    raised: "$30M+",
    raisedRaw: 30000000,
    devices: "~10,000 nodes",
    devicesRaw: 10000,
    model: "Burn-and-Mint Equilibrium (BME). GPU owners provide rendering/compute power. Users burn RENDER to pay for jobs, providers earn newly minted tokens.",
    backers: ["Sfermion", "SPiCE VC", "11-11 DG Partners", "Multicoin Capital"],
    links: {
      website: "https://rendernetwork.com",
      twitter: "https://twitter.com/rendernetwork",
      docs: "https://docs.rendernetwork.com",
      coingecko: "https://www.coingecko.com/en/coins/render"
    }
  },
  {
    name: "Bittensor",
    ticker: "TAO",
    vertical: "Compute",
    chain: "Subtensor (L1)",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$0 (VC) / $200M+ (Polychain)",
    raisedRaw: 200000000,
    devices: "32 subnets, 4,096 miners each",
    devicesRaw: 131072,
    model: "Proof-of-Intelligence. Decentralized ML marketplace of specialized subnets (NLP, image gen, data analysis). Miners contribute compute/models, validators assess quality.",
    backers: ["Polychain Capital", "DCG (Yuma/Barry Silbert)", "Stillcore Capital (Jason Calacanis)", "Grayscale"],
    links: {
      website: "https://bittensor.com",
      twitter: "https://twitter.com/opentensor",
      docs: "https://docs.bittensor.com",
      coingecko: "https://www.coingecko.com/en/coins/bittensor"
    }
  },
  {
    name: "Akash Network",
    ticker: "AKT",
    vertical: "Compute",
    chain: "Cosmos SDK",
    revenueAnnualized: "$180M",
    revenueRaw: 180000000,
    raised: "$2M+",
    raisedRaw: 2000000,
    devices: "600+ GPUs (398 H100s)",
    devicesRaw: 600,
    model: "Reverse-auction cloud marketplace. Users post compute requirements, providers bid. Dramatically cheaper than AWS ($1-2/hr vs $10-12/hr for H100).",
    backers: ["Borderless Capital", "Blockin Ventures", "FutureMoney Group", "Stateless Ventures", "P-OPS Team"],
    links: {
      website: "https://akash.network",
      twitter: "https://twitter.com/akabornetwork",
      docs: "https://docs.akash.network",
      coingecko: "https://www.coingecko.com/en/coins/akash-network"
    }
  },
  {
    name: "Aethir",
    ticker: "ATH",
    vertical: "Compute",
    chain: "Arbitrum Orbit",
    revenueAnnualized: "$660M",
    revenueRaw: 660000000,
    raised: "$140M",
    raisedRaw: 140000000,
    devices: "435,000+ GPUs",
    devicesRaw: 435000,
    model: "Enterprise-grade GPU cloud. Real-time rendering for gaming and AI inference. Container-based workloads across distributed GPU clusters.",
    backers: ["Sanctor Capital", "Hashkey", "Framework Ventures", "CitizenX", "Mirana Ventures", "Animoca Brands", "Maelstrom (Arthur Hayes)", "Merit Circle"],
    links: {
      website: "https://aethir.com",
      twitter: "https://twitter.com/AethirCloud",
      docs: "https://docs.aethir.com",
      coingecko: "https://www.coingecko.com/en/coins/aethir"
    }
  },
  {
    name: "io.net",
    ticker: "IO",
    vertical: "Compute",
    chain: "Solana",
    revenueAnnualized: "$20M",
    revenueRaw: 20000000,
    raised: "$30M",
    raisedRaw: 30000000,
    devices: "600,000+ GPUs",
    devicesRaw: 600000,
    model: "Aggregated GPU marketplace. Clusters GPUs from data centers, crypto miners, and consumer devices. Proof-of-compute on Solana for transparent verification.",
    backers: ["Hack VC", "Multicoin Capital", "Solana Labs", "OKX", "6MV", "Delphi Digital", "Aptos", "Animoca Brands", "Foresight Ventures"],
    links: {
      website: "https://io.net",
      twitter: "https://twitter.com/ionabornet",
      docs: "https://docs.io.net",
      coingecko: "https://www.coingecko.com/en/coins/io-net"
    }
  },
  {
    name: "Nosana",
    ticker: "NOS",
    vertical: "Compute",
    chain: "Solana",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "Public Sale",
    raisedRaw: 0,
    devices: "~1,000 nodes",
    devicesRaw: 1000,
    model: "Decentralized inference platform. Encrypted Confidential Jobs with low barrier for GPU hosts. Approved Render Network Compute Client.",
    backers: ["Community-funded", "Render Network partner"],
    links: {
      website: "https://nosana.io",
      twitter: "https://twitter.com/nosabornaai",
      docs: "https://docs.nosana.io",
      coingecko: "https://www.coingecko.com/en/coins/nosana"
    }
  },

  // ==================== ENERGY ====================
  {
    name: "Arkreen",
    ticker: "AKRE",
    vertical: "Energy",
    chain: "Polygon (EVM)",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "Tens of millions (Robo.ai)",
    raisedRaw: 30000000,
    devices: "190,000+ nodes",
    devicesRaw: 190000,
    model: "Decentralized renewable energy data network. Green Energy Data Nodes track solar output. On-chain Renewable Energy Certificates (RECs). Powering AI compute with green energy.",
    backers: ["Robo.ai (Nasdaq)", "Polygon", "Celo", "Solana Foundation"],
    links: {
      website: "https://arkreen.com",
      twitter: "https://twitter.com/ArkreenNetwork",
      docs: "https://docs.arkreen.com",
      coingecko: "https://www.coingecko.com/en/coins/arkreen"
    }
  },
  {
    name: "Glow",
    ticker: "GLW",
    vertical: "Energy",
    chain: "Ethereum",
    revenueAnnualized: "$5M+",
    revenueRaw: 5000000,
    raised: "N/A",
    raisedRaw: 0,
    devices: "50+ solar farms",
    devicesRaw: 50,
    model: "Solar farm rewards and carbon credits. Farms earn GLW tokens proportional to verified clean energy production. Protocol purchases and retires carbon credits.",
    backers: ["DePIN community", "Framework Ventures"],
    links: {
      website: "https://glowlabs.org",
      twitter: "https://twitter.com/glaborwlabs",
      docs: "https://docs.glowlabs.org",
      coingecko: "https://www.coingecko.com/en/coins/glow"
    }
  },
  {
    name: "PowerPod",
    ticker: "PPD",
    vertical: "Energy",
    chain: "IoTeX / Multi-chain",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$100M RWA initiative (w/ Arkreen)",
    raisedRaw: 5000000,
    devices: "Thousands (SEA)",
    devicesRaw: 5000,
    model: "Distributed EV charging network. Users deploy charging stations and battery swapping cabinets. $100M RWA initiative with Arkreen for renewable energy assets across Southeast Asia.",
    backers: ["Arkreen", "IoTeX ecosystem"],
    links: {
      website: "https://powerpod.pro",
      twitter: "https://twitter.com/PowerPod_People",
      docs: "https://docs.powerpod.pro"
    }
  },
  {
    name: "Srcful",
    ticker: "SRC",
    vertical: "Energy",
    chain: "Solana",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "N/A",
    raisedRaw: 0,
    devices: "Growing (solar devices)",
    devicesRaw: 1000,
    model: "Solar energy data monetization on Solana. Connected solar equipment generates real-time data, converted to on-chain RECs via Arkreen integration. Community-driven energy DePIN.",
    backers: ["Solana ecosystem", "Arkreen partner"],
    links: {
      website: "https://srcful.io",
      twitter: "https://twitter.com/srcaborful"
    }
  },
  {
    name: "Daylight",
    ticker: "N/A",
    vertical: "Energy",
    chain: "N/A",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$9M+",
    raisedRaw: 9000000,
    devices: "Smart home devices",
    devicesRaw: 10000,
    model: "Home energy optimization platform. Connects smart thermostats, EV chargers, batteries. Aggregates distributed energy resources for grid services and demand response.",
    backers: ["a16z Crypto", "Framework Ventures", "Lattice Capital"],
    links: {
      website: "https://www.daylight.xyz",
      twitter: "https://twitter.com/joindaylight"
    }
  },

  // ==================== BANDWIDTH ====================
  {
    name: "Grass",
    ticker: "GRASS",
    vertical: "Bandwidth",
    chain: "Solana",
    revenueAnnualized: "$10M+",
    revenueRaw: 10000000,
    raised: "$10M (bridge round)",
    raisedRaw: 10000000,
    devices: "3,000,000+ users",
    devicesRaw: 3000000,
    model: "Unused bandwidth marketplace for AI data. Desktop app routes idle internet bandwidth to scrape/collect web data sold to AI labs (Laion, Ontocord). Revenue flows to Grass Foundation.",
    backers: ["Polychain Capital", "Tribe Capital"],
    links: {
      website: "https://www.getgrass.io",
      twitter: "https://twitter.com/getaborgrass",
      docs: "https://docs.getgrass.io",
      coingecko: "https://www.coingecko.com/en/coins/grass"
    }
  },
  {
    name: "Theta Network",
    ticker: "THETA",
    vertical: "Bandwidth",
    chain: "Theta (L1)",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$138M",
    raisedRaw: 138000000,
    devices: "10,000+ edge nodes",
    devicesRaw: 10000,
    model: "Decentralized video streaming CDN. Users share bandwidth for video delivery and GPU compute. Dual token: THETA (governance) + TFUEL (payments). 80 PetaFLOPS distributed compute.",
    backers: ["Samsung NEXT", "Sony Innovation Fund", "Google (validator)", "Binance", "CAA", "DCM", "Sierra Ventures", "BDMI"],
    links: {
      website: "https://thetatoken.org",
      twitter: "https://twitter.com/Theta_Network",
      docs: "https://docs.thetatoken.org",
      coingecko: "https://www.coingecko.com/en/coins/theta-network"
    }
  },
  {
    name: "Orchid",
    ticker: "OXT",
    vertical: "Bandwidth",
    chain: "Ethereum",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$48M",
    raisedRaw: 48000000,
    devices: "5,000+ nodes",
    devicesRaw: 5000,
    model: "Decentralized VPN marketplace. Providers stake OXT and sell surplus bandwidth. Nanopayment tickets sent alongside data packets for granular, trustless payment.",
    backers: ["Andreessen Horowitz", "Sequoia Capital", "Blockchain Capital", "Polychain Capital", "DFJ", "Naval Ravikant"],
    links: {
      website: "https://orchid.com",
      twitter: "https://twitter.com/OrchidProtocol",
      docs: "https://docs.orchid.com",
      coingecko: "https://www.coingecko.com/en/coins/orchid-protocol"
    }
  },
  {
    name: "Mysterium",
    ticker: "MYST",
    vertical: "Bandwidth",
    chain: "Ethereum / Polygon",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$14.36M",
    raisedRaw: 14360000,
    devices: "3,800+ nodes",
    devicesRaw: 3800,
    model: "Decentralized VPN and proxy network. Node runners earn MYST for providing bandwidth. Open-source protocol for censorship-resistant internet access across 100+ countries.",
    backers: ["Crowdfunded"],
    links: {
      website: "https://mysterium.network",
      twitter: "https://twitter.com/MysteriumNet",
      docs: "https://docs.mysterium.network",
      coingecko: "https://www.coingecko.com/en/coins/mysterium"
    }
  },
  {
    name: "The Graph",
    ticker: "GRT",
    vertical: "Bandwidth",
    chain: "Ethereum / Arbitrum",
    revenueAnnualized: "$15M+",
    revenueRaw: 15000000,
    raised: "$25M+",
    raisedRaw: 25000000,
    devices: "500+ indexers",
    devicesRaw: 500,
    model: "Decentralized indexing protocol. Subgraphs index blockchain data for fast querying. Indexers stake GRT to serve queries. Critical Web3 data infrastructure across EVM chains + IPFS.",
    backers: ["Multicoin Capital", "Coinbase Ventures", "Framework Ventures", "ParaFi Capital", "Digital Currency Group"],
    links: {
      website: "https://thegraph.com",
      twitter: "https://twitter.com/graphprotocol",
      docs: "https://thegraph.com/docs",
      coingecko: "https://www.coingecko.com/en/coins/the-graph"
    }
  },

  // ==================== WIRELESS ====================
  {
    name: "Helium",
    ticker: "HNT",
    vertical: "Wireless",
    chain: "Solana",
    revenueAnnualized: "$252M",
    revenueRaw: 252000000,
    raised: "$360M+",
    raisedRaw: 360000000,
    devices: "962,000+ hotspots",
    devicesRaw: 962000,
    model: "The People's Network. IoT hotspots provide LoRaWAN + 5G coverage across 191 countries. MVNO service with T-Mobile integration. Carriers offload traffic to earn rewards.",
    backers: ["Multicoin Capital", "Andreessen Horowitz", "10T Fund", "Pantera Capital", "Khosla Ventures"],
    links: {
      website: "https://helium.com",
      twitter: "https://twitter.com/helium",
      docs: "https://docs.helium.com",
      coingecko: "https://www.coingecko.com/en/coins/helium"
    }
  },
  {
    name: "XNET",
    ticker: "XNET",
    vertical: "Wireless",
    chain: "Solana",
    revenueAnnualized: "$2M+ (AT&T revenue)",
    revenueRaw: 2000000,
    raised: "$2M+",
    raisedRaw: 2000000,
    devices: "688 active nodes",
    devicesRaw: 688,
    model: "B2B neutral-host network. Operators deploy Passpoints in high-traffic areas for carrier data offload. AT&T partnership pays XNET in USD for data usage, distributed as tokens to operators.",
    backers: ["Alpha Liquid Fund", "AT&T (revenue partner)"],
    links: {
      website: "https://xnet.company",
      twitter: "https://twitter.com/xabornetmobile",
      coingecko: "https://www.coingecko.com/en/coins/xnet-mobile"
    }
  },
  {
    name: "Nodle",
    ticker: "NODL",
    vertical: "Wireless",
    chain: "Nodle Chain / zkSync",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$9.7M",
    raisedRaw: 9700000,
    devices: "780,000 devices",
    devicesRaw: 780000,
    model: "Proof of Connectivity. Smartphones, routers, and drones form decentralized IoT network. Contributors earn NODL for sharing Bluetooth/WiFi resources for device communication.",
    backers: ["Luminescence Capital", "Blockchange", "Blockchain.com Ventures", "Work Play Ventures (Marc Pincus)", "Maxx Capital"],
    links: {
      website: "https://nodle.com",
      twitter: "https://twitter.com/NodleNetwork",
      docs: "https://docs.nodle.com",
      coingecko: "https://www.coingecko.com/en/coins/nodle-network"
    }
  },
  {
    name: "WiFi Map",
    ticker: "WIFI",
    vertical: "Wireless",
    chain: "Polygon",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$1.6M",
    raisedRaw: 1600000,
    devices: "200,000,000+ users",
    devicesRaw: 200000000,
    model: "Crowdsourced WiFi hotspot network. 200M+ users earn tokens for adding hotspots, speed tests, and location data. Web3 layer on top of massive existing user base.",
    backers: ["Jets Capital", "DWF Labs"],
    links: {
      website: "https://wifimap.io",
      twitter: "https://twitter.com/AborWiFiMap",
      coingecko: "https://www.coingecko.com/en/coins/wifi-map"
    }
  },
  {
    name: "Wayru",
    ticker: "WAYRU",
    vertical: "Wireless",
    chain: "Solana",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$2.01M",
    raisedRaw: 2010000,
    devices: "Growing (LATAM focus)",
    devicesRaw: 1000,
    model: "Community WiFi network for underserved regions. Individuals and small ISPs deploy hotspots. Currently live in Ecuador with Telecu partnership. Migrated from Algorand to Solana.",
    backers: ["Borderless Capital", "Algorand Foundation", "Big Brain Holdings", "DePIN Surf", "Ferrum Network"],
    links: {
      website: "https://wayru.io",
      twitter: "https://twitter.com/WayruNetwork",
      coingecko: "https://www.coingecko.com/en/coins/wayru"
    }
  },
  {
    name: "Althea",
    ticker: "ALTHEA",
    vertical: "Wireless",
    chain: "Cosmos SDK (EVM)",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$1.2M",
    raisedRaw: 1200000,
    devices: "Community ISPs",
    devicesRaw: 500,
    model: "Decentralized ISP stack. Individuals create their own internet service providers. Hybrid EVM/Cosmos L1 with instant finality optimized for micro-transactions in the machine economy.",
    backers: ["Figment Capital", "Coral DeFi", "Hash#CIB", "TRGC", "UDHC"],
    links: {
      website: "https://althea.net",
      twitter: "https://twitter.com/AltaborheaNet"
    }
  },

  // ==================== STORAGE ====================
  {
    name: "Filecoin",
    ticker: "FIL",
    vertical: "Storage",
    chain: "Filecoin (L1)",
    revenueAnnualized: "$3.2M",
    revenueRaw: 3200000,
    raised: "$257M",
    raisedRaw: 257000000,
    devices: "3.3 EiB capacity",
    devicesRaw: 3600000,
    model: "Decentralized storage marketplace. Storage providers earn FIL for hosting data. EIP-1559 gas model. 32% paid storage utilization. Enterprise cold storage focus with Onchain Cloud initiative.",
    backers: ["Andreessen Horowitz", "Sequoia Capital", "Union Square Ventures", "Digital Currency Group", "Winklevoss Capital"],
    links: {
      website: "https://filecoin.io",
      twitter: "https://twitter.com/Filecoin",
      docs: "https://docs.filecoin.io",
      coingecko: "https://www.coingecko.com/en/coins/filecoin"
    }
  },
  {
    name: "Arweave",
    ticker: "AR",
    vertical: "Storage",
    chain: "Arweave (L1)",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$22M",
    raisedRaw: 22000000,
    devices: "1,000+ miners",
    devicesRaw: 1000,
    model: "Permanent storage for a one-time fee. Endowment model locks AR to generate interest for future storage costs. Ideal for immutable records, NFT metadata, and censorship-resistant content.",
    backers: ["Andreessen Horowitz", "Union Square Ventures", "Coinbase Ventures", "Multicoin Capital"],
    links: {
      website: "https://arweave.org",
      twitter: "https://twitter.com/ArweaveTeam",
      docs: "https://docs.arweave.org",
      coingecko: "https://www.coingecko.com/en/coins/arweave"
    }
  },
  {
    name: "Storj",
    ticker: "STORJ",
    vertical: "Storage",
    chain: "Ethereum",
    revenueAnnualized: "$8M+",
    revenueRaw: 8000000,
    raised: "$35M+",
    raisedRaw: 35000000,
    devices: "16,000+ nodes",
    devicesRaw: 16000,
    model: "S3-compatible decentralized cloud storage. $4/TB/month. Lowest barrier for AWS migration. Files encrypted, split, and distributed globally. STORJ token used for payment.",
    backers: ["Google Ventures", "Qualcomm Ventures", "Techstars"],
    links: {
      website: "https://storj.io",
      twitter: "https://twitter.com/Storj",
      docs: "https://docs.storj.io",
      coingecko: "https://www.coingecko.com/en/coins/storj"
    }
  },
  {
    name: "Sia",
    ticker: "SC",
    vertical: "Storage",
    chain: "Sia (L1)",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "Self-funded (SIAfunds)",
    raisedRaw: 0,
    devices: "500+ hosts",
    devicesRaw: 500,
    model: "Privacy-first decentralized storage. Renter-host contracts with user-set parameters. Proof-of-burn mechanism (4% SC burn) for active node verification. Focus on data sovereignty.",
    backers: ["Nebulous (SIAfunds)", "Community-funded"],
    links: {
      website: "https://sia.tech",
      twitter: "https://twitter.com/sia__foundation",
      docs: "https://docs.sia.tech",
      coingecko: "https://www.coingecko.com/en/coins/siacoin"
    }
  },
  {
    name: "Crust Network",
    ticker: "CRU",
    vertical: "Storage",
    chain: "Polkadot",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$6M+",
    raisedRaw: 6000000,
    devices: "2,000+ nodes",
    devicesRaw: 2000,
    model: "IPFS with verifiable, market-driven pinning. Storage orders fulfilled and proved on-chain by multiple nodes. No centralized vendor risk. Suited for smart contract dApp storage.",
    backers: ["Polkadot ecosystem", "DFG Capital"],
    links: {
      website: "https://crust.network",
      twitter: "https://twitter.com/CrustNetwork",
      docs: "https://wiki.crust.network",
      coingecko: "https://www.coingecko.com/en/coins/crust-network"
    }
  },

  // ==================== SENSORS ====================
  {
    name: "Hivemapper",
    ticker: "HONEY",
    vertical: "Sensors",
    chain: "Solana",
    revenueAnnualized: "$552K",
    revenueRaw: 552000,
    raised: "$18M",
    raisedRaw: 18000000,
    devices: "77,483 dashcams",
    devicesRaw: 77483,
    model: "Drive-to-Earn mapping. Dashcam contributors collect 4K street-level imagery. AI processes footage into a decentralized Google Street View alternative. Data sold to enterprises.",
    backers: ["Multicoin Capital", "Foundry Group", "Craft Ventures", "Spencer Rascoff (Zillow co-founder)"],
    links: {
      website: "https://hivemapper.com",
      twitter: "https://twitter.com/Hivemapper",
      docs: "https://docs.hivemapper.com",
      coingecko: "https://www.coingecko.com/en/coins/hivemapper"
    }
  },
  {
    name: "DIMO",
    ticker: "DIMO",
    vertical: "Sensors",
    chain: "Polygon / Ethereum",
    revenueAnnualized: "$2M+",
    revenueRaw: 2000000,
    raised: "$14M+",
    raisedRaw: 14000000,
    devices: "27,000+ connected cars",
    devicesRaw: 27000,
    model: "Vehicle data marketplace. Cars manufactured after 2008 connect and mint as NFTs. Owners control and monetize driving data. Insurance, maintenance, and analytics use cases.",
    backers: ["CoinFund", "Variant Fund", "Slow Ventures", "Table Group"],
    links: {
      website: "https://dimo.zone",
      twitter: "https://twitter.com/DIMO_Network",
      docs: "https://docs.dimo.zone",
      coingecko: "https://www.coingecko.com/en/coins/dimo"
    }
  },
  {
    name: "WeatherXM",
    ticker: "WXM",
    vertical: "Sensors",
    chain: "Arbitrum",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$12.7M+",
    raisedRaw: 12700000,
    devices: "9,500+ stations",
    devicesRaw: 9500,
    model: "Decentralized weather network. Individuals install WiFi/LoRaWAN/4G weather stations providing hyperlocal meteorological data. Earn WXM tokens for validated data contributions.",
    backers: ["Placeholder VC", "Borderless Capital", "Protocol Labs"],
    links: {
      website: "https://weatherxm.com",
      twitter: "https://twitter.com/WeatherXM",
      docs: "https://docs.weatherxm.com",
      coingecko: "https://www.coingecko.com/en/coins/weatherxm"
    }
  },
  {
    name: "GEODNET",
    ticker: "GEOD",
    vertical: "Sensors",
    chain: "Polygon",
    revenueAnnualized: "$5.28M",
    revenueRaw: 5280000,
    raised: "$5M+",
    raisedRaw: 5000000,
    devices: "21,000 stations",
    devicesRaw: 21000,
    model: "World's largest decentralized RTK network. Base stations provide centimeter-level GPS precision in real-time. Used by John Deere, DJI, Topcon for agriculture and surveying.",
    backers: ["Multicoin Capital", "IoTeX"],
    links: {
      website: "https://geodnet.com",
      twitter: "https://twitter.com/GEODNET_",
      docs: "https://docs.geodnet.com",
      coingecko: "https://www.coingecko.com/en/coins/geodnet"
    }
  },
  {
    name: "NATIX Network",
    ticker: "NATIX",
    vertical: "Sensors",
    chain: "Solana",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$4.6M",
    raisedRaw: 4600000,
    devices: "100,000+ devices",
    devicesRaw: 100000,
    model: "Real-time geospatial data from IoT sensors on cars and homes. AI-processed data for autonomous vehicles, robotics, and navigation. Privacy-preserving edge compute.",
    backers: ["Borderless Capital", "Escape Velocity", "IoTeX"],
    links: {
      website: "https://natix.network",
      twitter: "https://twitter.com/NATIXNetwork",
      docs: "https://docs.natix.network",
      coingecko: "https://www.coingecko.com/en/coins/natix-network"
    }
  },
  {
    name: "Peaq",
    ticker: "PEAQ",
    vertical: "Sensors",
    chain: "Peaq (L1 / Polkadot)",
    revenueAnnualized: "N/A",
    revenueRaw: 0,
    raised: "$28M+",
    raisedRaw: 28000000,
    devices: "Multi-project layer",
    devicesRaw: 0,
    model: "L1 for Machine Economy. Standard operating system for DePIN — machine identities, IoT device management, and programmable machine interactions on a neutral global ledger.",
    backers: ["Fundamental Labs", "HV Capital", "Generative Ventures", "Spartan Group", "Animoca Brands"],
    links: {
      website: "https://peaq.network",
      twitter: "https://twitter.com/peaborqnetwork",
      docs: "https://docs.peaq.network",
      coingecko: "https://www.coingecko.com/en/coins/peaq"
    }
  }
];
