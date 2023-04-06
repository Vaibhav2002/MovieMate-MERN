import {Cast} from "@/data/models/dto/Cast";
import ScrollableSection from "@/components/ScrollableSection";
import CastItem from "@/components/CastItem";

interface CaseSectionProps {
    cast: Cast[]
}

const CastSection = ({cast}: CaseSectionProps) => {
    return (
        <ScrollableSection
            header="Cast"
            canSeeMore={false}
            headerVariant="h6"
            headerHref=""
        >
            {cast.map(cast => <CastItem key={cast.id} cast={cast}/>)}
        </ScrollableSection>
    )
}

export default CastSection