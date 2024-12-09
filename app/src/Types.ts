

export interface ITeams{
    name: String,
    id_members: String[],
    leader: String,
    round: Number,
    grades: IGrades[]
}

interface IGrade{
    id_metric: String,
    grade: number,
    id_judge: String
}

export interface IGrades{
    id_group: String,
    round: Number,
    id_event: String,
    grades: IGrade[]
}


export interface IMetric {
    description: string;
    max_points: number;
}

export interface IEvent {
    name: string;
    maxRound: number;
    metrics: IMetric[];
}


export interface IUser{
    name:string
    email: string
    CURP: string
    password: string
    rol: string
}