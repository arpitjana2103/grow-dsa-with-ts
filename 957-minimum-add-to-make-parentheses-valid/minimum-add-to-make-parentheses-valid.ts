function minAddToMakeValid(s: string): number {
    
    let open = 0;
    let close = 0;

    for(const char of s){
        if(char === '(') open++;
        if(char === ')'){
            if(open) open--;
            else close++;
        }
    }

    return open + close;
};