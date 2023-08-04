function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modeles/Skills/views/,member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    };
}