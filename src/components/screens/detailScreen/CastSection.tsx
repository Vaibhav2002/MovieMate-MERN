import {Cast} from "@/data/models/dto/Cast";
import ScrollableRow from "@/components/ScrollableRow";
import CastItem from "@/components/CastItem";

interface CaseSectionProps {
    cast: Cast[]
}

const CastSection = ({cast}: CaseSectionProps) => {
    return (
        <ScrollableRow
            header="Cast"
            canSeeMore={false}
            headerVariant="h6"
            headerHref=""
        >
            {cast.map(cast => <CastItem key={cast.id} cast={cast}/>)}
        </ScrollableRow>
    )
}

export default CastSection