function reverse(str, left, right){
    while(left < right){
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
}



function reverseWords(s: string): string {
    const str = s.trim().split('');

    const n = str.length;
    let slow = 0;
    let fast = 0;

    reverse(str, 0, n-1);

    while(fast < n){
       while(fast < n && str[fast] === ' ') fast++;

       const revL = slow;

       while(fast < n && str[fast] !== ' '){
        str[slow++] = str[fast++];
       }

       const revR = slow-1;

       reverse(str, revL, revR);

       str[slow++] = ' ';
    }
    
    return str.slice(0, slow-1).join('');
};