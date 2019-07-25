export interface Ship {
    ship_id: string;
    ship_name: string;
    ship_model: string;
    ship_type: string;
    roles: string[];
    active: boolean;
    class: number;
    weight_lbs: number;
    weight_kg: number;
    year_built: number;
    home_port: string;
    status: string;
    position: {
        latitude: number,
        longitude: number
    };
    successful_landings: null;
    attempted_landings: null;
    missions: [
    {
        name: string,
        flight: number
    }
    ];
    url: string;
    image: string;
}
