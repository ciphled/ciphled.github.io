export const Portfolio = {
  portfolio: [
    {
      stack: ["React.js", "Styled", "Recharts", "Axios"],
      links: [
        {
          link: "https://git.sr.ht/~winton-nathan-roberts/marvel-site",
          type: "Source Code",
        },
        {
          link: "https://react-marvel-site.herokuapp.com/",
          type: "Demo",
        },
      ],
      feature: "powers",
      description: `React frontend that presents characters, comics and series from the Marvel API in responsive lists with lazy-loading and pagination. Items
          have a hover state which reveals more details, and a button that
          redirects to an information page. Built with React (Hooks),
          Styled-Components, Bootstrap, Material-UI, Axios, &amp; Recharts.`,
      title: "Marvel Website",
    },
    {
      stack: ["React.js", "Node.js", "Keras", "Firebase"],
      links: [
        {
          link: "https://git.sr.ht/~winton-nathan-roberts/dnn-todo-list",
          type: "Source Code",
        },
        {
          link: "https://dnn-todo-list.herokuapp.com/",
          type: "Demo",
        },
      ],
      feature: "beer",
      description: `React app that maintains a list of messages for each user account which allows for Create, Update & Delete (CRUD) operations with the help of Firebase. Each message is classified by requests to a RESTful Node.js API with a Keras built NLP Deep Learning classifier as either: Wine, Beer, Liquor, Non-Alcoholic, Dunnage or Kegs.`,
      title: "NLP Beverage Classifier",
    },
    {
      stack: ["Java", "TCP/IP", "Threads"],
      links: [
        {
          link: "https://git.sr.ht/~winton-nathan-roberts/P2P-Blockchain",
          type: "Source Code",
        },
      ],
      feature: "bitcoin",
      description: `Peer to Peer Blockchain that implements a consensus algorithm to ensure peers maintain a blockchain that's synchronised with all other peers. Clients and peers communicate over TCP/IP, and transactions take the form of a simple message with a client identifier. Peers maintain a list of known peers which they periodically update according to the HeartBeat protocol.`,
      title: "Peer-Peer Blockchain",
    },
    {
      stack: ["Python", "Pandas", "SciPy"],
      links: [
        {
          link:
            "https://colab.research.google.com/drive/1mtowIrHnZpYHrevp5QrgoWoNIzNEjioa#scrollTo=ZpxJh8DAUN13",
          type: "Notebook",
        },
        {
          link:
            "https://drive.google.com/file/d/12kjj0S9Qc87gKBDwIs5KEpcwWFhm_PAb/view?usp=sharing",
          type: "Paper",
        },
      ],
      feature: "chart",
      description: `Estimates the basic reproduction number (R0) for each country in the early onset of the COVID-19 outbreak by fitting a logistic model to case data provided by the World Health Organisation. Proposes extension of the classic SIR model to model the effect of migration on the susceptible (S), infected (I) and recovered (R) populations of different regions.`,
      title: "Covid-19 Data Analysis and Modelling",
    },
    {
      stack: ["React Native", "GraphQL", "JavaScript"],
      links: [
        {
          link: "https://apps.apple.com/app/bikeradar/id1493046821",
          type: "iOS App Store",
        },
        {
          link:
            "https://play.google.com/store/apps/details?id=com.moltenreact.bikeradar",
          type: "Play Store",
        },
      ],
      feature: "bike",
      description: `Aggregates nearby share bikes from popular providers like Lime into a map view which can be filtered by bike attributes through an intuitive and elegant UI. Populates the map with JSON data provided by requests to a RESTful API.`,
      title: "BikeRadar: Share Bike Aggregator",
    },
    {
      stack: ["Unity", ".NET C#"],
      links: [
        {
          link: "https://www.youtube.com/watch?v=yZam23yNTZY",
          type: "YouTube",
        },
      ],
      feature: "gaming",
      description: `A 3D mobile game that's a cross between Red Dead Redemption and Plants vs Zombies, that's the product of collaboration with some of my talented friends over a few weeks with communication facilitated by Zoom.`,
      title: "Wild West Zombie Mobile Game",
    },
  ],
}
