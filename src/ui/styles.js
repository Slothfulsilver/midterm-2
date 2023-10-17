export const HOVER = {
  "&:hover": {
    transform: "scale(1.16)",
    transition: "transform 0.2s ease",
    cursor: "pointer",
    zIndex: 1000,
    borderRadius: "16px",
  },
  "&": {
    borderRadius: "16px",
  },
};

export const TITLE = {
  "&": {
    fontSize: "1.8rem",
    '@media (max-width:800px)': {
      fontSize: '1.2rem',
    },
    marginBottom: 1,
    padding: "1px 16px",
    borderRadius: "16px",
    backgroundColor: "#FFD9DF",
    fontWeight: "bold",
  },
};

export const TEXT = {
  "&": {
    fontSize: "1.4rem",
    '@media (max-width:800px)': {
      fontSize: '1rem',
    },
    marginBottom: 1,
    padding: "1rem 2rem",
    borderRadius: "16px",
    backgroundColor: "#FFD9DF",
    fontWeight: "bold",
  },
};

export const TITLE2 = {
  "&": {
    fontSize: "1.8rem",
    '@media (max-width:800px)': {
      fontSize: '1.2rem',
    },
    marginBottom: 1,
    padding: "1px 16px",
    borderRadius: "16px",
    backgroundColor: "#000000",
    fontWeight: "bold",
  },
};

export const TEXT2 = {
  "&": {
    fontSize: "1.4rem",
    '@media (max-width:800px)': {
      fontSize: '1rem',
    },
    marginBottom: 1,
    padding: "2px 10px",
    borderRadius: "16px",
    backgroundColor: "#000000",
    fontWeight: "bold",
  },
};