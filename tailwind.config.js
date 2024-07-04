export default {
  content: ["index.html"],
  theme: {
    colors: {
      white: "#FFFFFF",
      cream: "#F2EAE2",
      metal: {
        400: "#6C7289",
        700: "#1C232B",
      },
      aquamarine: {
        400: "#3D8168",
        700: "#1A4032",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    fontSize: {
      category: [
        "0.75rem",
        {
          fontWeight: 500,
          letterSpacing: "5px",
        },
      ],
      heading: [
        "2rem",
        {
          fontWeight: 700,
          lineHeight: "2rem",
        },
      ],
      body: [
        "0.875rem",
        {
          fontWeight: 500,
          lineHeight: "1.438rem",
        },
      ],
    },
  },
};
