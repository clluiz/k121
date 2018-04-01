class ListagemController {
    constructor($state, $http) {
        this.$state = $state;
        this.$http = $http;
        this.pessoas = [];
    }
    $onInit() {
        this.listar();
    }
    listar() {
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
        this.$state.go('alterar', { id: pessoa._id });
    }
    remover(pessoa) {
        this.$http.delete(`/pessoas/${pessoa._id}`)
            .then(
                (response) => {
                    alert(response.data);
                    this.listar();
                },
                err => alert(err)
            );
    }
    sortear() {
        this.$http.post('sortear', {})
            .then(
                response => {
                    alert('O sorteio foi realizado. Em breve os participantes irão receber um e-mail com seu amigo.');
                    this.listar();
                }, err => alert(err) 
            );
    }
}

export default {
    template: require('./lista.html'),
    controllerAs: '$ctrl',
    controller: ListagemController,
}