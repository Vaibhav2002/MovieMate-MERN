import Genre from "@/data/models/dto/Genre";
import {Chip, Stack} from "@mui/material";
import Link from "next/link";
import {getGenreRoute} from "@/Routes";

interface GenresSectionProps {
    genres: Genre[]
}


const GenresSection = ({genres}: GenresSectionProps) => {

    return (
        <Stack direction="row" spacing={1}>
            {genres.map(genre =>
                <Chip
                    key={genre.id}
                    label={genre.name}
                    sx={{borderRadius: 2, cursor:"pointer"}}
                    component={Link}
                    href={getGenreRoute(genre)}
                />
            )}
        </Stack>
    )

}

export default GenresSection