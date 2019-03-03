/**
 * 
 */

angular.module('mexicoEstadistico2016Service', [])//Declaramos el modulo
	.factory('datoRequest', function($http) { //declaramos la factory
		var path = "http://geoweb2.inegi.org.mx/wscatgeo/mgee/";//API path
		
		return {
			//Login
			datos : function(){ //Retornara la lista de posts
				global = $http.get(path);
				return global;
			}
			
		}
	});
  