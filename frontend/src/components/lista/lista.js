class ListagemController {
    constructor($state, $http) {
        this.$state = $state;
        this.$http = $http;
        this.pessoas = [];
    }
    $onInit() {
        this.$http.get('pessoas')
            .then(
                response => this.pessoas = response.data,
                err => alert(err)
            );
    }
    novo() {
        this.$state.go('cadastro');
    }
    alterar(pessoa) {
        console.log(pessoa);
        this.$state.go('alterar', { id: pessoa._id });
    }
}

export default {
    template: require('./lista.html'),
    controllerAs: '$ctrl',
    controller: ListagemController,
}