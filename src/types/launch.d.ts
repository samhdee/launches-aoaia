interface LaunchProps {
    name: string,
    net: DateProps,
    image: string,
    status: StatusProps,
    mission: MissionProps | null,
    rocket: string,
    pad: PadProps | null,
    provider: ProviderProps | null,
}

interface DateProps {
    isoString: string,
    date: Date
}

interface StatusProps {
    name: string,
    slug: string,
    failReason: string,
}

interface MissionProps {
    name: string,
    description: string,
}

interface PadProps {
    name: string,
    mapImage: string,
    location: string,
    latitude: string,
    longitude: string,
    countryCode: string,
}

interface ProviderProps {
    name: string,
    type: string,
}