import PRODUCTS from "../../data/appdata";

const initialState={
    availableProducts:PRODUCTS,
    userProdcts:PRODUCTS.filter(prod=>prod.ownerId==='u1')
};
export default (state=initialState,action)=>{
    return state;
};