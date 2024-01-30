import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const { imdbId } = useParams();

    useEffect(() => {
        if (imdbId) {
            const fetchMovieDetails = async () => {
                const response = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=c36736f0`);
                const data = await response.json();
                setMovieDetails(data);
            };

            fetchMovieDetails();
        }

    }, [imdbId]);
    if (!movieDetails) return <div>Loading...</div>;
    return (
        <Container>
            <Box>
                <h1 sx={{ color: 'purple' }}>CAT MOVİES</h1>
            </Box>
            <Paper sx={{ padding: "15px", height: "80vh" }} elevation={5}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ width: 'auto' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="550px"
                                    src={movieDetails?.Poster}
                                    alt={movieDetails?.Title}
                                    sx={{ objectFit: "contain" }}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography gutterBottom variant="h4" component="div">
                            {movieDetails.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '22px' }}>
                            {movieDetails.Plot}
                        </Typography>
                        <Box>
                            <Typography variant="h6" component="span" sx={{ color: 'purple', fontWeight: 'bold' }}>
                                Genre:
                            </Typography>
                            <Typography variant="h6" component="span" sx={{ fontSize: '20' }}>
                                {' ' + movieDetails.Genre}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" component="span" sx={{ color: 'purple', fontWeight: 'bold' }}>
                                Actors:
                            </Typography>
                            <Typography variant="h6" component="span" sx={{ fontSize: '20' }}>
                                {' ' + movieDetails.Actors}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" component="span" sx={{ color: 'purple', fontWeight: 'bold' }}>
                                Director:
                            </Typography>
                            <Typography variant="h6" component="span" sx={{ fontSize: '20' }}>
                                {' ' + movieDetails.Director}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" component="span" sx={{ color: 'purple', fontWeight: 'bold' }}>
                                Country:
                            </Typography>
                            <Typography variant="h6" component="span" sx={{ fontSize: '20' }}>
                                {' ' + movieDetails.Country}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" component="span" sx={{ color: 'purple', fontWeight: 'bold' }}>
                                Writer:
                            </Typography>
                            <Typography variant="h6" component="span" sx={{ fontSize: '20' }}>
                                {' ' + movieDetails.Writer}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography variant="h6" component="span" sx={{ color: 'purple', fontWeight: 'bold' }}>
                                Imdb Rating:
                            </Typography>
                            <Typography variant="h6" component="span" sx={{ fontSize: '20' }}>
                                {' ' + movieDetails.imdbRating}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default MovieDetails;

