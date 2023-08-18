/*class Witch{
    constructor(name,patron,house,wand){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.wand = wand;
        this.spellLaned = [];

    }
    getName(){
        return `O nome do(a) bruxo(a) ${this.name}`

    }
    getPatron(){
        return ` Seu patrono é ${this.patron}`

    }
    getHouse(){
        return `A sua Casa é ${this.house}`

    }
    getWand(){
        return `O nome da Varinha ${this.wand}`

    }
    getPullDesc(){
        return `O nome do(a) bruxo(a) ${this.name},seu patrono é ${this.patron},
        a sua Casa é ${this.house},o nome da varinha  é ${this.wand}`
    }
    LanedSpell(spell){
        this.spellLaned.push(spell);
        return `O(A) bruxo(a) ${this.name} aprendeu o fentico ${spell}`
    }

}
// const witch1 = new Witch('Hermione Gringor','Otter','Grinfindor','vince wood of drangon heart');
// console.log(witch1)
// console.log(witch1.getName())
// console.log(witch1.getHouse())
// console.log(witch1.getPatron())
// console.log(witch1.getWand())
// console.log(witch1.getPullDesc())

// witch1.LanedSpell("accio");
// witch1.LanedSpell("wingardium Leviossa");
// witch1.LanedSpell("Expelliarmos");
// console.log(witch1.LanedSpell())

class TypeWitch extends Witch{
    constructor(name,patron,house,wand,TypeWitch){
        super(name,patron,house,wand);
        this.TypeWitch= TypeWitch;
    }
    getTypeWitch(){
if(this.TypeWitch  == "M"){
return `O  tipo de bruxo(a) é: ${this.TypeWitch} - Meio Sangue`
}
    else if( this.TypeWitch == "P"){
        return `O  tipo de bruxo(a) é: ${this.TypeWitch} - puro Sangue`
    }else{
        return `Não é um Bruxo`
    }
}
}
const witch1 = new TypeWitch('Hermione Granger','Grinffindor','Otter','Vine wood and of Dragon Heart','M')


console.log(witch1.getTypeWitch());

class ChamberOfSecret{
    constructor(name,pwd){
        this.name = name;
        let _pwd = pwd;// declarar variavel do tipo senha, Atributo Senha//

        this.CheckPwd = (pwdInput) =>{
            if(_pwd == pwdInput){
                return true;
            }else{
                return false;
            }
        }
    }

    AcessChamber(pwdInput){
        if(this.CheckPwd(pwdInput) ){
             return `Bem Vindo(a)  Bruxo(a) ${this.name}`;
        }
        else{
            return `Senha Incorreto `
        }
    }
    showName(){
return this.name
    }
}


const user1 = new ChamberOfSecret('Harry Potter','1234',);
console.log(user1.AcessChamber('1234'));*/

class Book {
    constructor(title, autor, ndp){
        this.title = title;
        this.autor = autor;
        this.ndp = ndp;
    }
    }
    
    class User {
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.booksBorrowed = []
        }
    
        getBookBorrewed(book) {
    this.booksBorrowed.push(book);
        }
    }
    
    class Libary {
        constructor(){
            this.book = [];
            this.user = [];
        }
        getAllBook(){
 
        }
        getAllUser(){
            
        }
    }
    
    const libary = new Libary();
    
    const book1 = new Book(`HP`, `J.K. Rolling`, `300`);
    const user1 = new User(`Scara`, 17);
    
    user1.getBookBorrewed(book1);
    
    console.log(book1);
    console.log(user1);
    console.log(libary);
