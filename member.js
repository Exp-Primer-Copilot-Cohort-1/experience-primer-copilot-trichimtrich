function skillsMember() {
    return {
      restrict: 'E',
      templateUrl: 'modules/skills/views/member.html',
      controller: 'SkillsMembercontroller',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
        member: 'm'
      }
    };
  }