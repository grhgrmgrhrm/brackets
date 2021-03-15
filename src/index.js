module.exports = function check(str, bracketsConfig) {

    let stack = [];

    let lengthstring = str.length;
    if (lengthstring % 2 != 0) return false;

    let lenConfig = bracketsConfig.length;
    let checkeven = 1;
    let cheven;
    let chClose;
    for (let i = 0; i < lengthstring; i++) {
        let ch = str.charAt(i);
        let close = false;
        let open = false;
        let even = false;
        for (let j = 0; j < lenConfig; j++) {
            if (bracketsConfig[j][0] == bracketsConfig[j][1] && ch == bracketsConfig[j][0]) {
                even = true;
                checkeven = (-1) * checkeven;
                cheven = ch;
                console.log('checkeven = ', checkeven)
                break;
            }
            if (ch == bracketsConfig[j][0]) {
                open = true;
                break;
            }
            if (ch == bracketsConfig[j][1]) {
                close = true;
                chClose = bracketsConfig[j][0];
                break;
            }
        }
        if (even == true) {
            if (checkeven == -1) {
                stack.push(ch);
                console.log('push=', ch);
            }
            if (checkeven == 1 && cheven == stack[stack.length - 1]) {
                console.log(' pop stack[stack.length-1]=', stack[stack.length - 1], ', ch= ', ch)
                stack.pop();
            }
        } else {

            if (open === true) {
                stack.push(ch);
                console.log('push=', ch);
            }
            if (close === true && chClose == stack[stack.length - 1]) {
                console.log(' pop stack[stack.length-1]=', stack[stack.length - 1], ', ch= ', ch)
                stack.pop();
            }
        }
    }
    return (stack.length === 0);
};
