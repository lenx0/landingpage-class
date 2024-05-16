import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box backgroundColor="#f202" height="50px" display="flex">
        <Box
          display="flex"
          marginLeft="10px"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          gap={10}
        >
          <Typography>Sobre nós</Typography>
          <Typography>Como funciona</Typography>
          <Typography>Valores</Typography>
          <Typography>Perguntas</Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Button
            variant="contained"
            style={{
              width: "60px",
              height: "40px",
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Header;
