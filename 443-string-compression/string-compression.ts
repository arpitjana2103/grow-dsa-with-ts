function write(chars, writeIndex, currChar, count){
    chars[writeIndex++] = currChar;
    if(count > 1){
        let countString = String(count);
        for(let j = 0; j<countString.length; j++){
            chars[writeIndex++] = countString[j];
        }
    }
    return writeIndex;
}

function compress(chars: string[]): number {
    
    let writeIndex = 0;

    const n = chars.length;

    let i = 0;
    while(i<n){
        const currChar = chars[i];
        let count = 0;

        while(i < n && chars[i] === currChar){
            i++; count++;
        }

        writeIndex = write(chars, writeIndex, currChar, count);
    }

    return writeIndex;
};