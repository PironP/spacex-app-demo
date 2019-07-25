export interface Dragon {
    id: string;
    name: string;
    type: string;
    active: boolean;
    crew_capacity: number;
    sidewall_angle_deg: number;
    orbit_duration_yr: number;
    dry_mass_kg: number;
    dry_mass_lb: number;
    first_flight: string;
    heat_shield: {
        material: string,
        size_meters: number,
        temp_degrees: number,
        dev_partner: string
    };
    thrusters: [
        {
            type: string,
            amount: number,
            pods: number,
            fuel_1: string,
            fuel_2: string,
            thrust: {
                kN: number,
                lbf: number
            }
        }
    ];
    launch_payload_mass: {
        kg: number,
        lb: number
    };
    launch_payload_vol: {
        cubic_meters: number,
        cubic_feet: number
    };
    return_payload_mass: {
        kg: number,
        lb: number
    };
    return_payload_vol: {
        cubic_meters: number,
        cubic_feet: number
    };
    diameter: {
        meters: 3.7,
        feet: 12
    };
    wikipedia: string;
    description: string;
}
