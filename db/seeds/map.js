
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('map').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('map').insert({id: 1, title: 'Grassi Lake near Canmore, AB', description: "Hiking, rock climbing, pictographs, upper/lower-level lakes, boardwalks, mountain biking trails, waterfall, picnic tables, parking--This is a excellent trail for all ages and activities. The hike to the upper/lower lakes will take most people 15 minutes to an hour. You will spend most of your time here walking along the boardwalks with the stunning blue-green color of the Grassi Lakes. There are pictographs and rock climbing above the lakes a trail through the rocks makes this hike a breeze even for the novice hikers.", travel_time: '45'}),
        knex('map').insert({id: 2, title: 'French Creek Trail near Canmore, AB', description: "From the Burstall Pass trailhead follow Burstall Trail to the third (3rd) hiking arrow sign post. Look left and there is a large cut line with a path ascending. After the hill is crested the path turns into a road.Just before the creek there is a 'T' to the right marked with a small cairn. This path leads to the first falls in ~1 km. Depending on how high the creek is try to get down to bank before trail veers off too high. Very steep.Enjoy these falls and there are more farther up the creek but you will have to go back to the 'T' and cross creek. We spent most of the day on south side of creek exploring some back trails but mostly a waste of time. Never got to see other falls but west up the valley you get peeks of the French Glacier.", travel_time: '120'}),
        knex('map').insert({id: 3, title: "Devil's Thumb near Banff, AB", description: "The trail to the Devil's Thumb is actually a side trip from the Lake Agnes/ Big Beehive trail.\nWhere the trail up the switch back turns to the Big Beehive, go the other way to the Devil's Thumb. The following description does not include the Lake Agnes Trail which takes you to the trail head. The approximate distance is 1.4 km return. \nThe unmarked trail to the right goes up around the back side of the Devil's Thumb. The trail is 0.7 km long and involves some sections of scree. Follow the trail for about 10 meters. The trail will branch to the right and stop at a small cliff. This cliff has ledges at various heights and must be climbed. It is very easy to climb and only about 5 meters high. At the top of the cliff you can see the trail to the left.", travel_time: '120'})
      ]);
    });
};


