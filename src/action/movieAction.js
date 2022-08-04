export const addMovie=(formData)=>{
    return {
        type : 'ADD_MOVIE',
        payload : formData
    }
}

export const removeId=(id)=>{
    return {
        type : 'Remove' ,
        payload : id
    }
}

// export const getMovie=(data)=>{
//     return {
//         type : 'GET',
//         payload : data
//     }
// }