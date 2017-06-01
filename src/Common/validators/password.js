export function passwordValidator(password) {
    return /(["'><\s])+/.test(password);
}
