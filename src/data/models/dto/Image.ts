export interface ImageResponse {
    id: number;
    backdrops: Image[];
}

export interface Image {
    aspect_ratio: number;
    file_path: string;
    height: number;
    width: number;
}
