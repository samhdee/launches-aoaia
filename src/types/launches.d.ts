interface LaunchesProps {
    isEmpty: boolean;
    setEmpty: (boolean) => void;
    list: Array<LaunchProps> | null;
    setList: ([]) => void;
}
