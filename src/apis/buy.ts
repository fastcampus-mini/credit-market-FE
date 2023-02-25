import { IProduct } from '../interfaces/product'
import { axiosInstance } from '../apis/instance'
import { API_URLS } from '../constants/apiUrls'


export const getBuyList = async (page: number) => {
  const data: IProduct[] = await axiosInstance.get(API_URLS.BUY_LIST(page))
  return data
}
