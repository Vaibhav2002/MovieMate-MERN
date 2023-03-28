export interface WatchProviderResponse {
    id: number;
    results: Results;
}

interface Results {
    IN: WatchProviderData;
}

export interface WatchProviderData {
    flatrate: WatchProvider[];
    rent: WatchProvider[];
    buy: WatchProvider[];
}

export interface WatchProvider {
    display_priority: number;
    logo_path: string;
    provider_id: number;
    provider_name: string;
}
