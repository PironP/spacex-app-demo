export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: FirstStage;
    second_stage: SecondStage;
    fairings: Fairings;
}

export interface FirstStage {
    cores: Core[];
}

export interface SecondStage {
    block?: number;
    payloads: Payload[];
}

export interface Fairings {
    reused: boolean;
    recovery_attempt: boolean;
    recovered?: boolean;
    ship: string;
}
export interface Core {
    core_serial: string;
    flight: number;
    block?: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success?: boolean;
    landing_intent: boolean;
    landing_type: string;
    landing_vehicle: string;
}

export interface Core {
    core_serial: string;
    flight: number;
    block?: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success?: boolean;
    landing_intent: boolean;
    landing_type: string;
    landing_vehicle: string;
}

export interface Payload {
    payload_id: string;
    norad_id: number[];
    reused: boolean;
    customers: string[];
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg?: number;
    payload_mass_lbs?: number;
    orbit: string;
    orbit_params: OrbitParams;
    cap_serial: string;
    mass_returned_kg?: number;
    mass_returned_lbs?: number;
    flight_time_sec?: number;
    cargo_manifest: string;
}

export interface OrbitParams {
    reference_system: string;
    regime: string;
    longitude?: number;
    semi_major_axis_km?: number;
    eccentricity?: number;
    periapsis_km?: number;
    apoapsis_km?: number;
    inclination_deg?: number;
    period_min?: number;
    lifespan_years?: number;
    epoch?: Date;
    mean_motion?: number;
    raan?: number;
    arg_of_pericenter?: number;
    mean_anomaly?: number;
}
