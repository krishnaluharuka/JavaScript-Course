class Password{
    constructor(){
        this.special = '!@#$%^&*()_+=-~`<>?/.,:"{}|\][;\'';
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
        this.upperCase = this.alphabet.toUpperCase();
        this.num = Math.floor(Math.random() * 10);
        this.alpRand = Math.floor(Math.random() * 26);
        this.specialrand = Math.floor(Math.random() * this.special.length);
        this.funny = ["404NotFound","password","password123","idontknow", "getoutofmyhouse","itwillhackyourmobile","nopasswordrequired","hahaha","itsnotworking","passwordisnotworking","iforgotagain","icanttellyou", "3timesX", "iwanttokillyou", "imtoooldforthis", "youlooksobeautiful", "getyourownwifi", "iforgotmywifipassword", "usecarefully", "ilostmypassword", "hahahahaha", "error404", "yourwifipassword", "nomorewifi", "nointernet", "somethingtoconnectme", "byebyepassword", "readyforaction", "pleasedonthackme", "youhavegottonelucky", "mypasswordisabadidea", "mypasswordistoolong", "yourwifiisdumb", "donttrythisathome", "ilooklikehulk", "idonttellyou", "illgetyou", "illtellyouinamillionyears", "mypasswordisbillgates", "givemeyoursforfree", "whatpassword", "mypassword", "yourname", "mynameisbob", "imapirate", "idontgiveadamn", "owdoyouknowmypassword?", "youcanguess", "youwontguess", "nottellingyou", "guessthisone", "thatsmypassword", "youcantguessit", "idontknowthisneither", "truemine", "trytofigureitout", "justwatchandlearn"];
        this.funnyRand= Math.floor(Math.random() * this.funny.length);
        this.password = '';
    }

    generateWeakPassword(length=6){  
        this.password = '';   
        const characters = this.alphabet;  
        for (let index = 0; index < length; index++) {
            const random = Math.floor(Math.random() * characters.length);
            this.password = this.password + characters[random];   
        }
        return this.password;
    }

    generateStrongPassword(length=8){
        this.password = '';   
        const characters = this.special+this.alphabet+this.upperCase; 
        for (let index = 0; index < length; index++) {
            const random = Math.floor(Math.random() * characters.length);
            if(index == length-3){
                this.password = this.password + this.alphabet[this.alpRand] + this.special[this.specialrand] + this.upperCase[this.alpRand];
                break;
            }
            else{
                this.password = this.password + characters[random]; 
            }
        }
        return this.password;
    }

    generateSuperStrongPassword(length=12){
        this.password = '';   
        const characters = this.special+this.alphabet+this.upperCase+this.num; 
        for (let index = 0; index < length; index++) {
            const random = Math.floor(Math.random() * characters.length);
            if(index == length-4){
                this.password = this.password + this.alphabet[this.alpRand] + this.special[this.specialrand] + this.upperCase[this.alpRand]+this.num;
                break;
            }
            else{
                this.password = this.password + characters[random]; 
            }
        }
        return this.password;
    }

    generateFunnyPassword(){
        return this.funny[this.funnyRand];
    }
}

const pass = new Password();
console.log(` The weak password is ${pass.generateWeakPassword()}`);
console.log(` The strong password is ${pass.generateStrongPassword()}`);
console.log(` The super password is ${pass.generateSuperStrongPassword()}`);
console.log(` The funny password is ${pass.generateFunnyPassword()}`);
