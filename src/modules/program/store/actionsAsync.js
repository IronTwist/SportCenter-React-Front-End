
import { apiEndPoints } from "../../../config/config";

// export function deleteProgramAsync(id){
//     return async function deletePrograms(dispatch,getState){
//         const url = apiEndPoints.deleteProgram + `${id}`;
//         const {login} = getState();
//         const token = 'Bearer '+login.data['token'];
//
//         const headRequest = {
//             method: 'DELETE',
//             headers:{
//                 'Authorization': token,
//                 "Accept": "*/*",
//                 "Access-Control-Allow-Origin": "*",
//                 'Content-Type': 'application/json',
//                 'Access-Control-Expose-Headers': 'X-Custom-Header, Content-Encoding',
//                 'Access-Control-Allow-Headers': '*',
//                 'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
//             }
//         }
//
//         try{
//             const response = await fetch(url, headRequest);
//             const responseJson = await response.json();
//             console.log(responseJson);
//             // dispatch(deleteProgram(responseJson));
//         }catch (error){
//             // dispatch(getProgramsError(error.message));
//         }
//     }
// }

export function addProgramAsync(name,startsAt, endsAt){

    return async function addProgram(dispatch, getState){
        const {login} = getState();
        const token = 'Bearer '+login.data['token'];

        try {
            const response = await fetch(apiEndPoints.addProgram, {
                method: 'POST',
                headers: {
                    'Authorization': token,
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept": "*/*",
                    "Access-Control-Allow-Origin": "*",
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, OPTIONS',
                },
                body: new URLSearchParams({
                    'name': name,
                    'startsAt': startsAt,
                    'endsAt': endsAt
                })
            });

            const responseJson = await response.json();
            console.log(responseJson);
            // dispatch(addNewProgram(responseJson));
        }catch (error){
            console.log(error.message);
        }
    }
}