function isValid(s: string): boolean {
    const st: string[] = new Array();
    const pair: Record<string, string> = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    for(let i = 0; i<s.length; i++){
        const char:string = s.at(i);

        if(char === '(' || char === '{' || char === '['){
            st.push(char);
        }

        else {
            if(st.length === 0) return false;
            const top:string = st.pop();
            if(pair[char] !== top) return false;
        }
    }

    return st.length === 0;
    
};