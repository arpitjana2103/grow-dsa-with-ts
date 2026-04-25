function minRemoveToMakeValid(s: string): string {
    // O(n) TC + O(n) SC

    // Remove Extra ')'
    let open = 0;
    let res1 = "";

    for (let i = 0; i<s.length; i++) {
        const char = s[i];
        if(char === ')') {
            if(open <= 0) continue;
            else open--;
        }
        if(char === '(') open++;

        res1 += char;
    }

    // Remove Extra '('
    let res2 = "";
    for(let i = res1.length-1; i>=0; i--){
        const char = res1[i];
        if(char === "(" && open > 0){
             open--;
             continue;
        }
        res2 += char;
    }

    return res2.split('').reverse().join('');
}


function minRemoveToMakeValid__(s: string): string {
    // O(n) TC + O(n) SC

    // Remove Extra ')'
    let open = 0;
    let res1 = "";

    for (let i = 0; i<s.length; i++) {
        const char = s[i];
        if(char === ')') {
            if(open <= 0) continue;
            else open--;
        }
        if(char === '(') open++;

        res1 += char;
    }

    // Remove Extra '('
    let close = 0;
    let res2 = "";
    for(let i = res1.length-1; i>=0; i--){
        const char = res1[i];
        if(char === "("){
            if(close <= 0) continue;
            else close--;
        }
        if(char === ')') close++;

        res2 += char;
    }

    return res2.split('').reverse().join('');
}

function minRemoveToMakeValid_(s: string): string {
    // O(n) TC + O(n) SC
    const st = new Array<number>();
    const removeIndex = new Set<number>();

    for (let i = 0; i<s.length; i++) {
        const ch = s[i];

        if (ch === '(') {
            st.push(i);
        }
        
        if(ch === ')'){
            // Add Extra ')' to removeIndex set
            if(st.length === 0) removeIndex.add(i);
            else st.pop();
        }
    }

    while(st.length > 0){
        // Add Extra '(' to removeIndex set
        removeIndex.add(st.pop());
    }

    let res = "";

    for (let i = 0; i<s.length; i++) {
        if(!removeIndex.has(i)){
            res += s[i]
        }
    }

    return res;
};
