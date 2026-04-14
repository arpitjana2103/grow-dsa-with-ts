function minAddToMakeValid(s: string): number {
    
    let open = 0;
    let res = 0;

    for(const char of s){
        if(char === '(') open++;
        if(char === ')'){
            if(open > 0) open--;
            else res++;
        }
    }

    return res + open;
};