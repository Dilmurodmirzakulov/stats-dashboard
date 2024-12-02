import api from "../../api";

export interface YearsWithUniversityUpdate {
    id: number
    name: string
    value: number     
    calculated_date: string
}

export const updateYearsWithUniversity = async (data:YearsWithUniversityUpdate ) => {
    return await api.put(`/average-years-university/${data.id}`, data)
}