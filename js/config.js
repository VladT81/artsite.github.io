app.config(function($stateProvider){
    var home = {
        name: 'home',
        url: '/home',
        template: '<home></home>'
    };
    var about = {
        name: 'about',
        url: '/about',
        template: '<about></about>'
    };
    var works = {
        name: 'works',
        url: '/works',
        template: '<works></works>'
    };
    var presents = {
        name: 'presents',
        url: '/presents',
        template: '<presents></presents>'
    };
    var blog = {
        name: 'blog',
        url: '/blog',
        template: '<blog></blog>'
    };
    var contact = {
        name: 'contact',
        url: '/contact',
        template: '<contact></contact>'
    };
    $stateProvider.state(home);
    $stateProvider.state(about);
    $stateProvider.state(works);
    $stateProvider.state(presents);
    $stateProvider.state(blog);
    $stateProvider.state(contact);
});
