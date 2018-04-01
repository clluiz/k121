class CadastroController {
    constructor($state, $http) {
        this.$state = $state;
        this.$http = $http;
    }
    cadastrar() {
        if (!this.formulario.$valid) {
            return;
        } 
    }
}

export default {
    template: require('./cadastro.html'),
    controllerAs: '$ctrl',
    controller: CadastroController,
    bindings: {
        pessoa: '<',
    }
}