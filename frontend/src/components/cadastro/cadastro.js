class CadastroController {
    constructor($state, $http) {
        this.$state = $state;
        this.$http = $http;
    }
    cadastrar() {
        if (!this.formulario.$valid) {
            return;
        } 
        const response = this.pessoa._id ? 
            this.$http.put('pessoas', this.pessoa) : 
            this.$http.post('pessoas', this.pessoa);
        response.then(
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