import axios from 'axios'

let serverUrl = '/'
export function loginAuth(){
    let username = localStorage.getItem('username')
    let token = localStorage.getItem('token')
    let client_id = localStorage.getItem('client_id')
    if (username && token && client_id){
        axios.get(`${serverUrl}/user/loginAuth`)
        .then((response)=>{
            if (response.status){
                return true
            }
        })
    }
    return false
}
