interface Question {
    text: string;
    id: number;
    no: number;
    options: Option[]
}

interface Option {
    id: number,
    text: String
}