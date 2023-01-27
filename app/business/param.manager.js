import paramDAO from '../DAO/paramDAO';

function create(context) {



    return {

    };
}

async function query() {
    let result = paramDAO.query();
    if (result) {
        return result;
    }
}

async function get(id) {
    let result = await paramDAO.get(id);
    if (result) {
        return result;
    }
}

async function getLast() {
    let result = await paramDAO.getLast();
    if (result) {
        return result;
    }
}




export default {
    query: query,
    get: get,
    getLast
};
