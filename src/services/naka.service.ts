import service from "@configs/interceptor"

interface IMaterialServ {
  status: boolean
  data: any
  message: string
}

export const getMaterialTypes = () => {
  return service
    .get("/market-place/materials")
    .then((_res) => ({ status: true, data: _res.data.data, message: "" }))
    .catch((_err) => ({
      status: false,
      data: null,
      message: "failed to get material types"
    }))
}

export const getBuildingTypes = () => {
  // market-place/building
  return
}
