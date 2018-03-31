class ListagemController {
    constructor($state) {
        this.$state = $state;
        this.pessoas = [
            {
                nome: '1',
                email: '1@gmail.com'
            },
            {
                nome: '1',
                email: '1@gmail.com'
            },
            {
                nome: '1',
                email: '1@gmail.com'
            },
            {
                nome: '1',
                email: '1@gmail.com'
            },
            {
                nome: '1',
                email: '1@gmail.com'
            }
        ]
    }

    novo() {
        this.$state.go('cadastro');
    }
}

export default {
    template: require('./lista.html'),
    controllerAs: '$ctrl',
    controller: ListagemController,
}