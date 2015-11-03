;(function(){

    var selectEventFactory = function($q){

        var eventData = [
            {
           "id":0, "name": "Dramatics","eventsArray":[
                {"event_id": 0, "event_name":"Coming Soon!!"},
                {"event_id": 1, "event_name":"Coming Soon!!", "class":""},
                {"event_id": 2, "event_name":"Coming Soon!!","imageUrl": "images/other-page/0.png","class":"timeline-inverted"},
                {"event_id": 3, "event_name":"Coming Soon!!"},
                {"event_id": 3, "event_name":"Coming Soon!!"},
                {"event_id": 3, "event_name":"Coming Soon!!"},
                {"event_id": 3, "event_name":"Coming Soon!!","class":"timeline-inverted"}
            ]
            },{
                "id":1, "name": "Music","eventsArray":[
                        {"event_id": 0, "event_name":"Coming Soon!!"},
                        {"event_id": 1, "event_name":"Coming Soon!!","class":"timeline-inverted"},
                        {"event_id": 2, "event_name":"Coming Soon!!"},
                        {"event_id": 3, "event_name":"Coming Soon!!","class":"timeline-inverted"},
                        {"event_id": 4, "event_name":"Coming Soon!!"}
                    ]
            },{
                    "id":2, "name": "Dance","eventsArray":[
                        {"event_id": 0, "event_name":"Coming Soon!!"},
                        {"event_id": 1, "event_name":"Coming Soon!!","class":"timeline-inverted"},
                        {"event_id": 2, "event_name":"Coming Soon!!"},
                        {"event_id": 3, "event_name":"Coming Soon!!","class":"timeline-inverted"},
                        {"event_id": 4, "event_name":"Coming Soon!!"}
                    ]
            },{
                "id":3, "name": "In4mals","eventsArray":[
                    {"event_id": 0, "event_name":"Coming Soon!!"},
                    {"event_id": 1, "event_name":"Coming Soon!!","class":"timeline-inverted"},
                    {"event_id": 2, "event_name":"Coming Soon!!"},
                    {"event_id": 3, "event_name":"Coming Soon!!","class":"timeline-inverted"},
                    {"event_id": 4, "event_name":"Coming Soon!!"}
                ]
            },{
                "id":4, "name": "Fine Art","eventsArray":[
                    {"event_id": 0, "event_name":"Coming Soon!!"},
                    {"event_id": 1, "event_name":"Coming Soon!!","class":"timeline-inverted"},
                    {"event_id": 2, "event_name":"Coming Soon!!"},
                    {"event_id": 3, "event_name":"Coming Soon!!","class":"timeline-inverted"},
                    {"event_id": 4, "event_name":"Coming Soon!!"}
                ]
            }
        ];


        var getEventById = function(id){

            var deferred = $q.defer();

        //console.log(eventData[id]);
           deferred.resolve(eventData[id]);
            return deferred.promise;
        };
        return {
            getEventById: getEventById
        }
    };

 angular.module('hillffair15App').factory('selectEventFactory',['$q', selectEventFactory]);


})();