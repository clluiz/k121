import angular from 'angular';
import 'angular-messages';
import '@uirouter/angularjs';

import Listagem from './components/lista/lista';
import Cadastro from './components/cadastro/cadastro';

angular.module('amigo-oculto', ['ui.router', 'ngMessages'])
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
        $stateProvider.state('alterar', {
            url: '/alterar/:id',
            component: 'cadastro',
            resolve: {
                pessoa: ($http, $stateParams) => {
                    return $http.get(`pessoas/${$stateParams.id}`)
                        .then(response => response.data);
                }
            }
        })
    })
