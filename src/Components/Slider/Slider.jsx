import React, { useRef } from "react";
import { Box, Grid, IconButton, Card, CardContent, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Slider = ({ movies }) => {
    const containerRef = useRef(null);
    const results = movies.results || [];

    const scroll = (direction) => {
        const { current } = containerRef;
        if (current) {
            const scrollAmount = direction === "left" ? -500 : 500;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <Typography
                variant="h4"
                sx={{
                    marginBottom: 2,
                    marginLeft: 2,
                    marginTop: 2,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    letterSpacing: "1px",
                    textAlign: "left",
                    fontSize: "24px",
                    letterSpacing: "2px",
                }}
            >
                titulo
            </Typography>
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
                    sx={{
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
                {results.map((item, index) => (
                    <Card key={index}
                        sx={{
                            minWidth: 200,
                            minHeight: 300,
                            position: "relative",
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
                            backgroundSize: "cover",
                        }}>
                        <CardContent>
                            <Typography variant="h6"
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.35)",
                                    color: "white",
                                    padding: "10px 20px",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    marginBottom: "5px",
                                    marginRight: "20px",
                                    letterSpacing: "1px",
                                }}>
                                {item.title}</Typography>
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
                    sx={{
                        color: "#A9A8A8CC"
                    }} />
            </IconButton>
        </Box>
    );
};
export default Slider;