export function validateEmail(text){
    const re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    return re.test(text)
    }

    const availableRules = {
        required(value) {
            return value ? '' : 'Pole wymagane';
        },
        min(value, rule){
            return value.length >= rule.length ? '' : `Min. ${rule.length} znaki`
        },
        password(value, rule){
            return value.length >= rule.length ? '' : `Min. ${rule.length} znaków`
        },
        email(value){
            return validateEmail(value) ? '' : 'Niepoprawny email'
        }
        
    }

export function validate (rules =[], value){
    for (let i = 0 ; i < rules.length ; i++){
        const rule = rules[i]
    

        if (rule instanceof Object) {
            const errorMessage = availableRules[rule.rule](value, rule)
            if (errorMessage){
                return errorMessage;
            }
        } else {   
          const errorMessage = availableRules[rule](value)
            if (errorMessage){
                return errorMessage;
        }
        }
    }
    

    return '' 
}