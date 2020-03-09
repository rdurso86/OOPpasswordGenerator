class Generator {
    constructor(passLength, passCharacters) {
        this.passLength = length;
        this.passCharacters = characters;
    }
    newPass = "";

    generatePassword() {

        let passwordString = "";
        let length = this.passLength;
        let i = 0;

        for (i = 0; i < length; i++) {
            
            let randomChoices = this.passCharacters[Math.floor(Math.random() * this.passCharacters.length)];
            let randomPass = randomChoices[Math.floor(Math.random() * randomChoices.length)];
            passwordString += randomPass;
        }
        
        this.newPass = passwordString;
    }
}

module.exports = Generator;
