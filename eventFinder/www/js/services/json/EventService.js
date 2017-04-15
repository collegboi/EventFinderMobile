var EventService = function() {
    var url;

    this.initialize = function() {
        url = "http://104.236.108.142:8000/api/events/";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    // this.getAll = function() {
        
       

    //     //  $.ajax({
    //     //         type: "GET",
    //     //         url: url,
    //     //         data: { }
    //     //     }).done(function (data, status, xhr) {
               
    //     //        return data.features;

    //     //         // var deferred = $.Deferred();
    //     //         // alert(data.features);
    //     //         // deferred.resolve(data.features);
    //     //         // return deferred.promise();

    //     //     }).fail(function (xhr, status, error) {
    //     //         var message;
    //     //         if ((!xhr.status) && (!navigator.onLine)) {
    //     //             message += "Bad Internet Connection\n";
    //     //         }
    //     //         message += "Status: " + xhr.status + " " + xhr.responseText;
    //     //         alert(message);
    //     //     });
    // }

    this.getAll = function(handleData) {
        $.ajax({
            type: "GET",
            url: url,
            success:function(data) {
                handleData(data.features); 
            }
        });
    }


     this.findById = function(id) {
        var deferred = $.Deferred();
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        deferred.resolve(employee);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

     var employees = [
        {"id": 1, "details": {"firstName": "James", "lastName": "King"}, "managerId": 0, "managerName": "", "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
        {"id": 2, "details": {"firstName": "Julie", "lastName": "Taylor"}, "managerId": 1, "managerName": "James King", "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
        {"id": 3, "details": {"firstName": "Eugene", "lastName": "Lee"}, "managerId": 1, "managerName": "James King", "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
        {"id": 4, "details": {"firstName": "John", "lastName": "Williams"}, "managerId": 1, "managerName": "James King", "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
        {"id": 5, "details": {"firstName": "Ray", "lastName": "Moore"}, "managerId": 1, "managerName": "James King", "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
        {"id": 6, "details": {"firstName": "Paul", "lastName": "Jones"}, "managerId": 4, "managerName": "John Williams", "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
        {"id": 7, "details": {"firstName": "Paula", "lastName": "Gates"}, "managerId": 4, "managerName": "John Williams", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
        {"id": 8, "details": {"firstName": "Lisa", "lastName": "Wong"}, "managerId": 2, "managerName": "Julie Taylor", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
        {"id": 9, "details": {"firstName": "Gary", "lastName": "Donovan"}, "managerId": 2, "managerName": "Julie Taylor", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
        {"id": 10, "details": {"firstName": "Kathleen", "lastName": "Byrne"}, "managerId": 5, "managerName": "Ray Moore", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
        {"id": 11, "details": {"firstName": "Amy", "lastName": "Jones"}, "managerId": 5, "managerName": "Ray Moore", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
        {"id": 12, "details": {"firstName": "Steven", "lastName": "Wells"}, "managerId": 4, "managerName": "John Williams", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
    ];


}