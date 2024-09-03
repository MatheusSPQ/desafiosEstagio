let string = "estAgiario bom demAis deveria ser contratAdo!"; // escreva a string que deseja
string = string.toLowerCase();

function procuroA(string){
    let a = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] == "a" ){
            a++;
        }
        
    }

    if(a == 0){
        return "Não existe letra 'a' na string."
    }

    return `Existe ${a} a's na string`
};

console.log(procuroA(string))