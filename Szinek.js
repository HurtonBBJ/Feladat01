export function feladat01(szinek){
    let db = 2;
    let szamlalo = 1;
    let nevezo = 1;
    let osszeg = 0;
    if (szinek.lenght < 2) {
        return 0;
    }else{
        while(db <= szinek.lenght){
            for(let i=szinek.lenght; i>0; i--){
                szamlalo*i;
            }
            for(let i=db; i>0; i--){
                nevezo*i;
            }
            osszeg += szamlalo/nevezo;
            db++;
        }
    }
    return osszeg;
}