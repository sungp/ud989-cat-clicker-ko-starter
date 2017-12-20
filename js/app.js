var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.level = ko.computed(function() {
        var count = this.clickCount();
        if (count == 0) {
            return "Newborn";
        } 
        if (count < 10) {
            return "Infant";
        }
        if (count < 100) {
            return "Teen";
        }
        return "Adult";
    }, this);
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
    this.nickname = ko.observable(['Tabtab', 'T-bone', 'Mr.T', 'Tabitha Tab']); 
}

ko.applyBindings(new ViewModel());
