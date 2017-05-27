
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('map').del()
    .then(function () {
        return Promise.all([
            // Inserts seed entries

            knex('map').insert({
             id: 1,
             title: "Devil's Thumb near Banff, AB",
             description: "Hiking, rock climbing, pictographs, upper/lower-level lakes, boardwalks, mountain biking trails, waterfall, picnic tables, parking--This is a excellent trail for all ages and activities. The hike to the upper/lower lakes will take most people 15 minutes to an hour. You will spend most of your time here walking along the boardwalks with the stunning blue-green color of the Grassi Lakes. There are pictographs and rock climbing above the lakes a trail through the rocks makes this hike a breeze even for the novice hikers.",
             travel_time: '10',
             path: JSON.stringify({
                "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [ -114.094765, 51.056484 ],[ -114.094744, 51.055533], [ -114.094733, 51.054609 ]
                    ]
                }
            }),
            user_id: 1

            }),

            knex('map').insert({
                id: 2,
                title: 'French Creek Trail near Canmore, AB',
                description: "From the Burstall Pass trailhead follow Burstall Trail to the third (3rd) hiking arrow sign post. Look left and there is a large cut line with a path ascending. After the hill is crested the path turns into a road.Just before the creek there is a 'T' to the right marked with a small cairn. This path leads to the first falls in ~1 km. Depending on how high the creek is try to get down to bank before trail veers off too high. Very steep.Enjoy these falls and there are more farther up the creek but you will have to go back to the 'T' and cross creek. We spent most of the day on south side of creek exploring some back trails but mostly a waste of time. Never got to see other falls but west up the valley you get peeks of the French Glacier.",
                travel_time: '5',
                path: JSON.stringify({
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [ -115.094765, 52.056484 ],[ -115.094744, 52.055533], [ -115.094733, 52.054609 ]
                        ]
                    }
                }),
                user_id: 1
            }),

            knex('map').insert({
                id: 3,
                title: "Devil's Thumb near Banff, AB",
                description: "The trail to the Devil's Thumb is actually a side trip from the Lake Agnes/ Big Beehive trail.",
                travel_time: '8',
                path: JSON.stringify({
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                             [ -116.094765, 53.056484 ],[ -116.094744, 53.055533], [ -116.094733, 53.054609 ]
                        ]
                    }
                }),
                user_id: 1
            }),

            knex('map').insert({
                id: 4,
                title: "Rainbow Creek",
                description: "The trail to the Devil's Thumb is actually a side trip from the Lake Agnes/ Big Beehive trail.",
                travel_time: '3',
                path: JSON.stringify({
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                             [ -116.094765, 53.056484 ],[ -116.094744, 53.055533], [ -116.094733, 53.054609 ]
                        ]
                    }
                }),
                user_id: 2
            }),


            knex('map').insert({
                id: 5,
                title: "test",
                description: "test",
                travel_time: '7',
                path: JSON.stringify({
                    "type": "Feature",
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [ -114.228404677, 51.100658756 ], [ -114.22848111899999, 51.100631598 ], [ -114.228481958, 51.100631431 ], [ -114.228484388, 51.100631347 ], [ -114.22848573, 51.100631598 ], [ -114.228485981, 51.100631598 ]
                        ]
                    }
                }),
                user_id: 3
            })


        ]);
    });
};