import axios from 'axios';
import { DeliveryType } from '../../types';
import { getEnvVariables } from '../helpers/getEnvVariables'

const  REACT_APP_API_URL  = 'http://localhost:4000/deliveries';

// export const getDelivery = async(setDeliveryList:any): Promise<DeliveryType> =>{
//     const { data } = await axios.get<DeliveryType>(REACT_APP_API_URL);
//     console.log(data);
//     return setDeliveryList(data);
// }


const getDelivery = (setDeliveryList: any) => {
    return new Promise(async (resolve,reject) =>{

        try {
            const response = await axios.get( REACT_APP_API_URL );
            resolve(setDeliveryList(response.data));
        } catch (error) {
            reject(error);
        }

    })
}

export { getDelivery }; 