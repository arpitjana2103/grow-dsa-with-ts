function removeOuterParentheses(s: string): string {
    const st:string[] = new Array();
    let res = "";
    let balance = 0;

    for(let i = 0; i<s.length; i++){
        if(s[i] === '('){
            balance++;
            if(balance === 1) continue;
            else res += s[i];
        }

        if(s[i] === ')'){
            balance--;
            if(balance === 0) continue;
            else res += s[i];
        }
    }

    return res;
};

// ((()())(()()))
// 12323212323210