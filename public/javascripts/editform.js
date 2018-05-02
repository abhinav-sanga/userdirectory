/*
var userDirectory = angular.module('userDirectory',[]);

userDirectory.controller('userCtrl',['$scope', function ($scope) {

    $scope.form  = [];
    $scope.onedit = function (obj) {
        $scope.form.push(obj);
        console.log(form[0]);
    }

}]);
*/

$(document).on("click",".open-editModal", function () {
   var myeml = $(this).data('eml');
    var myaddr = $(this).data('addr');
    var mycntct = $(this).data('cntct');
    var myusrn = $(this).data('usrn');
    var myide = $(this).data('ide');
   $(".modal-body #username1").val(myusrn);
    $(".modal-body #address1").val(myaddr);
    $(".modal-body #contact1").val(mycntct);
    $(".modal-body #email1").val(myeml);
    $(".modal-body #id1").val(myide);
});