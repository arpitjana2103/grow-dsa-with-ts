function isVowel(char: string): boolean {
    const c = char.toLowerCase();
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') return true;
    else return false;
}

function reverseVowels(str: string): string {
    let s = str.split('');
    let n = s.length;
    let left = 0;
    let right = n - 1;

    while(left < right){
        while(left < right && !isVowel(s[left])) left++;
        while(left < right && !isVowel(s[right])) right--;

        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s.join('');
};