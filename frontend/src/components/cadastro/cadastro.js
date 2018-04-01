class CadastroController {
    constructor($state, $http) {
        this.$state = $state;
        this.$http = $http;
    }
    cadastrar() {
        if (!this.formulario.$valid) {
            return;
        } 
        this.$http.post('pessoas', this.pessoa)
            .then(
                response => this.$state.go('/'),
                err => alert(err)
            );
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