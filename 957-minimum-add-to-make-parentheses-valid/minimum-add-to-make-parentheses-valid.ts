function minAddToMakeValid(s: string): number {
    
    let openReq = 0;
    let closeReq = 0;

    for(const char of s){
        if(char === '(') closeReq++;
        if(char === ')') {
            if(closeReq > 0) closeReq--;
            else openReq++;
        }
    }

    return openReq + closeReq;
};