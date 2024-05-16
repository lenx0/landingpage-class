import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box backgroundColor="#cf685921" width="100vw" height="50px" display="flex">
        <Box
          display="flex"
          width="1100px"
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
        <Box display="flex" width="100vw" justifyContent="end" alignItems="center">
          <Button
            variant="contained"
            style={{
              width: "60px",
              height: "40px",
              marginRight: "10px"
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
