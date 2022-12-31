(function() {
'use strict';
    
angular.module('LunchApp', [])
.controller('LunchController', LunchController); 
    
LunchController.$inject = ['$scope']; // protect variables from minification as string literals

function LunchController($scope) { //$ indicates scope service
    $scope.items = "";
    $scope.num_items = 0;
    $scope.judgement = "";
    $scope.checkLunch = function() {
        let numItems = countItems($scope.items);
        $scope.num_items = numItems;
        let myMessage = getMessage(numItems);
        $scope.judgement = myMessage;
    };

    let countItems = function(string) {
        let numWords = 0;
        let words = string.split(",");
        for (let word of words) {
            if (word.trim().length!=0) {
                numWords +=1;
            }
        }
        return numWords
    };

    let getMessage = function(num) {
        let outputStr = `You input ${num} items. `
        if (num==0) {
            outputStr += "Please input data first.";
            $scope.noticeType = "danger";
        } else if (num <= 3) {
            outputStr += "Enjoy!";
            $scope.noticeType = "success";
        } else if (num > 3) {
            outputStr += "Too much!";
            $scope.noticeType = "success";
        }
        return outputStr;
    }
}
})();