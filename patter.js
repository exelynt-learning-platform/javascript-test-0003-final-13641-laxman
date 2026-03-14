let initialNumber=0;
for(let i=1; i<=6; i++){
    for(let j=1; j<=i; j++){
        if(initialNumber==1){
            document.write("0")
            initialNumber=0
        } else{
            document.write("1")
            initialNumber=1
        }
        // document.write(j)
    }
    document.writeln("<br>")
}