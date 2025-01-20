import React, { useRef } from "react";
import { Box, Grid, IconButton, Card, CardContent, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export const CategoryCarousel = ({ movies }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = containerRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* flecha izq */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute", 
          top: "50%", 
          left: 0, 
          zIndex: 2, 
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          "&:focus, &:active": {
            backgroundColor: "transparent",
            boxShadow: "none",
            outline: "none"
          },
        }}
      >
        <ArrowBack
        sx ={{
          color: "#A9A8A8CC"
        }} />
      </IconButton>

      {/* contenedor*/}
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "19px",
          padding: 2,
          "&::-webkit-scrollbar": { display: "none" }, // Oculta la barra de scroll completamente
          msOverflowStyle: "none", // Oculta la barra en IE y Edge
          scrollbarWidth: "none", // Oculta la barra en Firefox
        }}
      >
        {movies.map((movie, index) => (
          <Card key={index} sx={{ 
            minWidth: 200,
            minHeight: 300,
            }}>
            <CardContent>
              <Typography variant="h6"
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                color: "white",
                padding: "10px 20px", 
                fontSize: "14px", 
                fontWeight: "bold", 
                marginBottom: "5px",
                marginRight: "20px",
                letterSpacing: "1px",
              }}>
                {movie.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* flecha dcha */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{ 
          position: "absolute", 
          top: "50%", 
          right: 0, 
          zIndex: 2, 
          transform: "translateY(-50%)",
          backgroundColor: "transparent",
          "&:focus, &:active": {
            backgroundColor: "transparent",
            boxShadow: "none",
            outline: "none"
          },
        }}
      >
        <ArrowForward
        sx ={{
          color: "#A9A8A8CC"
        }} />
      </IconButton>
    </Box>
  );
};
