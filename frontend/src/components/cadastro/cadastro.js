class CadastroController {
    constructor($state) {
        this.$state = $state;
        this.pessoa = {};
    }
    cadastrar() {
        console.log(this.pessoa)
    }
}

export default {
    template: require('./cadastro.html'),
    controllerAs: '$ctrl',
    controller: CadastroController,
}