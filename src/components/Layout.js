import { Box, Button, Container, MenuItem, TextField } from "@mui/material";
import MovieList from "./MovieList";
import { menuItemList } from "../functions/Years";
import { useEffect, useState } from "react";

const Layout = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Pokemon');
    const [selectedYear, setSelectedYear] = useState('');
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [selectedType, setSelectedType] = useState('');
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        getMoviesData()
    }, [currentPage]);


    const getMoviesData = async () => {
        let url = `https://www.omdbapi.com/?apikey=c36736f0&&page=${currentPage}&s=${searchTerm}`
        if (selectedType) {
            url = url.concat(`&type=${selectedType}`)
        }
        if (selectedYear) {
            url = url.concat(`&y=${selectedYear}`)
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    setMovies(data.Search);
                    setError('');
                    setTotalResults(parseInt(data.totalResults));
                } else {
                    setError(data.Error);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <Container >
            <Box>
                <h1 style={{ color: 'purple' }}>CAT MOVİES</h1>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
                <TextField id="outlined-basic" label="Movie Name" variant="outlined" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                <TextField label="Year" select sx={{ width: '100px' }} value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)}>
                    {
                        menuItemList().map((item) => (<MenuItem key={item} value={item}>{item}</MenuItem>))
                    }
                </TextField>
                <TextField label="Type" sx={{ width: '100px' }} select value={selectedType} onChange={(event) => setSelectedType(event.target.value)}
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="movie">Movies</MenuItem>
                    <MenuItem value="series">Series</MenuItem>
                    <MenuItem value="episode">Episodes</MenuItem>
                </TextField>
                <Button
                    variant="contained"
                    onClick={() => {
                        setCurrentPage(1)
                        getMoviesData()
                    }}
                >
                    Search
                </Button>
            </Box>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <MovieList totalResults={totalResults}
                setCurrentPage={setCurrentPage} movies={movies} currentPage={currentPage} />
        </Container>
    );
};

export default Layout;
