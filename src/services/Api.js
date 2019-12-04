import Axios from 'axios';

const Api = Axios.create({
    baseURL: "http://localhost:5001/api/usuariotbl" ,
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer " + localStorage.getItem("usuario_tbl-EventShare")
    }
});


export default Api;