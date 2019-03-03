/**
 * 
 */

angular.module('myApp', ['mexicoEstadistico2016Service']);
 
angular.module('myApp').controller('mexicoEstadistico2016Controller', ['$scope','datoRequest',mexicoEstadistico2016Controller]);
function mexicoEstadistico2016Controller($scope, datoRequest) {
	$scope.datos={};
	$scope.obtenerDatos = function(){
		datoRequest.datos().success(function (data){
			$scope.datos=data; // Asignaremos los datos de todos los movimientos
			$scope.datos.exist=1;
			//$scope.saldo.exist=0;
			
		});
	}
	
}