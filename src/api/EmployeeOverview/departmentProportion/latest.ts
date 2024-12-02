import api from "../../api"

export const getDepartmentProportionsLatest = async () => {
    return await api.get(`/proportion-department/latest`)
}