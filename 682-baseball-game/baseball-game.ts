function calPoints(operations: string[]): number {
    const st: number[] = new Array();

    operations.forEach(function(op){
        if(op === "C"){
            st.pop();
        }else if(op === "D"){
            st.push(st.at(st.length - 1) * 2);
        }else if(op === "+"){
            if(st.length >= 2){
                const score2 = st.pop();
                const score1 = st.pop();
                const score3 = score1 + score2;
                st.push(score1, score2, score3);
            }
        }else {
            st.push(Number(op));
        }
    })

    return st.reduce(function(acc, curr){return acc + curr}, 0);
};