import { fetchRequest } from "./fetchRequest"


export const getCountryCodeByIp = async (ipAddress: string) =>{
  return await fetchRequest<{ip: string, country: string}>(`https://api.country.is/${ipAddress}`, "GET")

}