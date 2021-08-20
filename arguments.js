function addNumbers(num1, num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }

    return result;
}


function getFullName(firstName, lastName) {
    // empty string for starting
    let fullname = '';
    for (const part of arguments) {
        fullname = fullname + part;
    }
    return fullname;

}