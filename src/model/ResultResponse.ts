interface Recommendation {
    text: string
}

interface ResultResponse {
    code: number,
    description: String,
    recommendations: Recommendation[]
}