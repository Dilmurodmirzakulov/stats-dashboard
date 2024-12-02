import api from "../../api"

export interface YearsWithUniversityCreation {
    name: string
    value: number
    calculated_date: string
}

export const createYearsWithUniversity = async (data: YearsWithUniversityCreation) => {
    return await api.post("/average-years-university", data)
}