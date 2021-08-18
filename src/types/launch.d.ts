interface LaunchProps {
    name: string,
    date: string,
    image: URL,
    status: string,
    mission: MissionProps | null,
    rocket: string,
    pad: PadProps | null,
    provider: ProviderProps | null,
}

interface MissionProps {
    name: string,
    description: string,
}

interface PadProps {
    name: string,
    mapImage: string,
    countryCode: string,
}

interface ProviderProps {
    name: string,
    type: string,
}