export function validateEmail(text){
    const re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return re.test(text)
    }