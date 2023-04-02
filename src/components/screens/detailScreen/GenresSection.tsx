import Genre from "@/data/models/dto/Genre";
import {Stack} from "@mui/material";
import Link from "next/link";
import {getGenreRoute} from "@/Routes";
import RectChip from "@/components/styled/RectChip";

interface GenresSectionProps {
    genres: Genre[]
}


const GenresSection = ({genres}: GenresSectionProps) => {

    return (
        <Stack direction="row" spacing={1}>
            {genres.map(genre =>
                <RectChip
                    key={genre.id}
                    label={genre.name}
                    component={Link}
                    href={getGenreRoute(genre)}
                />
            )}
        </Stack>
    )

}

export default GenresSection