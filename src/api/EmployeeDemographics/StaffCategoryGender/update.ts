import api from "../../api";

export interface StaffCategoryGenderUpdate {
    id: number
    name: string
    male: number;
    female: number;    
    calculated_date: string
}

export const updateStaffCategoryGender = async (data:StaffCategoryGenderUpdate ) => {
    return await api.put(`/staff-category-gender/${data.id}`, data)
}