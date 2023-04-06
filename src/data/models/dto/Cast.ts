export interface CastResponse {
    cast: Cast[];
}

export interface Cast {
    id: number;
    name: string;
    profile_path: string | null;
    cast_id: number;
    character: string;
    order: number;
}
