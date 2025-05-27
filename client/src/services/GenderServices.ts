import AxiosInstance from "../Axiosinstance"

const GenderServices = {
    storeGender: async (data: any) => {
        return AxiosInstance.post("/storeGender")
        
        .then((response)=>{
            response;
        })
        .catch((error) => {
            throw error; });
    },
};


export default GenderServices;