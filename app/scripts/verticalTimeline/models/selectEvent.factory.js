;(function(){

    var selectEventFactory = function($q){

        var eventData = [
          {
            "id":0, "name": "Highlights","class": "glyphicon-star","eventsArray":[
            {"event_id": 1, "event_name":"7 chords","imageUrl":"images/poster/7chords.jpg", "alternate":"7 Chord image"},
            {"event_id": 2, "event_name":"Delhi Theater","imageUrl":"images/poster/theater.jpg", "alternate":"Delhi Theater"},
            {"event_id":3, "event_name":"Raeth","imageUrl":"images/poster/raeth.jpg", "alternate":"RAETH image"},
            {"event_id": 4, "event_name":"cricket","imageUrl":"images/poster/cricket-posters.jpg", "alternate":"cricket-posters"},
            {"event_id": 5, "event_name":"run-for-greenery","imageUrl":"images/poster/run-for-greenery.jpg", "alternate":"run-for-greenery"}
          ]
          },
            {
           "id":1, "name": "Dramatics","eventsArray":[
                {"event_id": 1, "event_name":"Choreo"},
                {"event_id": 2, "event_name":"Spoof","class":"timeline-inverted"},
                {"event_id": 3, "event_name":"Mime"},
                {"event_id": 4, "event_name":"Skit","class":"timeline-inverted"},
                {"event_id": 5, "event_name":"Play"}
            ]
            },{
                "id":2, "name": "Music","eventsArray":[
                        {"event_id": 1, "event_name":"Medley(Ankit Pandey)"},
                        {"event_id": 2, "event_name":"Medley(Rishabh)","class":"timeline-inverted"},
                        {"event_id": 3, "event_name":"Tere Ishq Mai"},
                        {"event_id": 4, "event_name":"Jawani Jane Man","class":"timeline-inverted"},
                        {"event_id": 5, "event_name":"Om Shanti Om"},
                        {"event_id": 6, "event_name":"Hamma Hamma","class":"timeline-inverted"},
                        {"event_id": 7, "event_name":"Sweet Child of Mine"},
                        {"event_id": 8, "event_name":"Dilbar Mere","class":"timeline-inverted"},
                        {"event_id": 9, "event_name":"Gumrah"},
                        {"event_id": 10, "event_name":"Instrumental","class":"timeline-inverted"},
                        {"event_id": 11, "event_name":"Titanium"},
                        {"event_id": 12, "event_name":"Umbrella","class":"timeline-inverted"},
                        {"event_id": 13, "event_name":"Dear God"},
                        {"event_id": 14, "event_name":"Counting Stars","class":"timeline-inverted"},
                        {"event_id": 15, "event_name":"Parda"}


            ]
            },{
                    "id":3, "name": "Dance","eventsArray":[
                        {"event_id": 1, "event_name":"Retro(Karun Saini)"},
                        {"event_id": 2, "event_name":"Devotional(Anirudh Bagde)","class":"timeline-inverted"},
                        {"event_id": 3, "event_name":"Semi-Classical Bollywood"},
                        {"event_id": 4, "event_name":"Bolly Bank","class":"timeline-inverted"},
                        {"event_id": 5, "event_name":"Belligerent Beats"},
                        {"event_id": 6, "event_name":"The Proposal","class":"timeline-inverted"},
                        {"event_id": 7, "event_name":"Western Group Dance"},
                        {"event_id": 8, "event_name":"Turning High","class":"timeline-inverted"}

                    ]
            },{
                "id":4, "name": "In4mals","eventsArray":[
              {"event_id": 1,"imageUrl":"images/poster/prom-night.jpg"},
                  {"event_id": 2, "event_name":"Egg throw"},
                    {"event_id": 3, "event_name":"Lucky 7","class":"timeline-inverted"},
                    {"event_id": 4, "event_name":"Catch your match"},
                    {"event_id": 5, "event_name":"Rose dedication","class":"timeline-inverted"},
                    {"event_id": 6, "event_name":"Song dedication "},
                    {"event_id": 7, "event_name":"Paper dance","class":"timeline-inverted"},
                    {"event_id": 8, "event_name":"Treasure hunt"},
                    {"event_id": 9, "event_name":"Roll to win","class":"timeline-inverted"},
                    {"event_id": 10, "event_name":"Minute to win it"}
                ]
            },{
                "id":5, "name": "Fine Art","eventsArray":[
                    {"event_id": 1, "event_name":"Tattoo Making"},
                    {"event_id": 2, "event_name":"Face Painting","class":"timeline-inverted"},
                    {"event_id": 3, "event_name":"Egg Painting Competition"},
                    {"event_id": 4, "event_name":"Card Dedication","class":"timeline-inverted"},
                    {"event_id": 5, "event_name":"Cartoonification"}
                ]
            }
        ];


        var getEventById = function(id){

            var deferred = $q.defer();

           deferred.resolve(eventData[id]);
            return deferred.promise;
        };
        return {
            getEventById: getEventById
        }
    };

 angular.module('hillffair15App').factory('selectEventFactory',['$q', selectEventFactory]);


})();
