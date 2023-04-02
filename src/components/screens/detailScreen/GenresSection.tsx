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
                <Link key={genre.id} href={getGenreRoute(genre)}>
                    <RectChip label={genre.name}/>
                </Link>
            )}
        </Stack>
    )

}

export default GenresSection