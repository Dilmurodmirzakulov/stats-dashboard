import api from "../../api"

export interface StaffCategoryGenderCreation {
    name: string
    male: number;
    female: number;
    calculated_date: string
}

export const createStaffCategoryGender = async (data: StaffCategoryGenderCreation) => {
    return await api.post("/staff-category-gender", data)
}