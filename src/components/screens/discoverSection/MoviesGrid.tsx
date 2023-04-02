import Movie from "@/data/models/dto/Movie";
import {Box, Theme, useMediaQuery} from "@mui/material";
import MovieItem from "@/components/MovieItem";

interface MoviesGridProps {
    movies: Movie[]
}


const MoviesGrid = ({movies}: MoviesGridProps) => {
    const isBelowSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
    const width = isBelowSm ? "155px" : undefined
    return (
        <Box display="flex" gap={2} flexWrap="wrap" sx={{overflowX: "hidden"}}>
            {movies.map(movie =>
                <MovieItem key={movie.id} movie={movie} width={width}/>
            )}
        </Box>
    )
}

export default MoviesGrid