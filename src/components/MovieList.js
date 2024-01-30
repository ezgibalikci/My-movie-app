import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    background: '#f4f4f4',
    color: '#333',
    fontWeight: 'bold',
    padding: '10px',
    border: '1px solid #ddd'
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd'
  }
};

const MovieList = ({ movies, totalResults, setCurrentPage, currentPage }) => {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage + 1)
  };

  return (

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Poster</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">IMDb ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies?.map((movie) => (
            <TableRow
              key={movie?.imdbID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={movie?.Poster} alt={movie?.Title} style={{ width: '100px', height: 'auto' }} />
              </TableCell>
              <TableCell align="right"> <Link to={`/movie/${movie?.imdbID}`}>{movie?.Title}</Link></TableCell>
              <TableCell align="right">{movie?.Year}</TableCell>
              <TableCell align="right">{movie?.imdbID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={totalResults}
        rowsPerPage={10}
        page={currentPage - 1}
        onPageChange={handleChangePage}
      />
    </TableContainer>

  );
};

export default MovieList;

