module.exports = function($scope, Contacts) {
        $scope.form = {
            name: '',
            telephone: ''
        };

        $scope.create = function(form) {
            var data = Contacts.getData();

            data.push(form);

            console.log(Contacts.getData());
        };

};