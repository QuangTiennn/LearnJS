var users = [
    {name: 'ABC', gender : 'male'},
    {name: 'HUY', gender : 'male'},
    {name: 'THẮNG', gender : 'female'},
    {name: 'TIẾN', gender : 'female'},
];

var userList = $('#userList');
var genderFilter = $('#genderFilter');

render = (userList, users);

genderFilter.on('change', function(){
    var selectedGender = this.value;
    var filterUser = users.filter(function(user){
        return user.gender === selectedGender;
    });    
     render(userList, filterUser);
});


function render(container, items){
    var htmlItem = items.map(function(item) {
        return '<li class = "list-group">'+ item.Name +'</li>';
    });
    var html = htmlItem.join(' ');

    container.html(html);
}