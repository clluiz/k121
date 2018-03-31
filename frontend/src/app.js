import angular from 'angular';
import '@uirouter/angularjs';

import Listagem from './components/lista/lista';
import Cadastro from './components/cadastro/cadastro';

angular.module('amigo-oculto', ['ui.router'])
    .component('listagem', Listagem)
    .component('cadastro', Cadastro)
    .config( ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('/', {
            url: '/',
            component: 'listagem',
        })
        $stateProvider.state('cadastro', {
            url: '/cadastro',
            component: 'cadastro',
        })
    })
