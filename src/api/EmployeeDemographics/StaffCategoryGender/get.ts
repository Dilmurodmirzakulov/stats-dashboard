import api from "../../api"

export interface StaffCategoryGenderData {
    id: number
    name: string
    male: number;
    female: number;
    calculated_date: string
    created_at: string
    updated_at: string
}

export const getStaffCategoryGender = async (filteredMonth: string="") => {
    return await api.get(`/staff-category-gender?month=${filteredMonth}`)
}