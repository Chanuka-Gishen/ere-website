function overridesLight(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 18px",
        },
        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        containedSecondary: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: "#ffffff",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#c1dbf3",
          },
          "&:hover fieldset": {
            borderColor: theme.palette.secondary.main,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
  };
}

export { overridesLight };
