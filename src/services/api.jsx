const API = {
  generateItinerary: async (destination, days, interests) => {
    // Simulate AI Itinerary generation
    const sample = [
  `Day 1: Arrival in ${destination}. Check into your hotel and explore the nearby area to get familiar with the surroundings.`,
  `Day 2: Explore top attractions in ${destination}. Visit popular landmarks, museums, and local sightseeing spots.`,
  `Day 3: Dive into the local culture — visit art galleries, historical sites, or attend a local performance or festival.`,
  `Day 4: Try the authentic local cuisine. Go on a food tour or dine at top-rated local restaurants.`,
  `Day 5: Take a short trip to nearby hidden gems — explore lesser-known attractions or villages around ${destination}.`,
  `Day 6: Adventure day! Try outdoor activities such as hiking, boating, or exploring nature parks.`,
  `Day 7: Spend a relaxing day at a spa, beach, or nature retreat. Focus on leisure and rest.`,
  `Day 8: Explore local markets for souvenirs, handicrafts, and authentic experiences.`,
  `Day 9: Capture memorable moments — revisit your favorite spots or take a photography tour.`,
  `Day 10: Shopping and farewell dinner. Reflect on your journey and prepare for your return trip.`,
    ];
    return sample.slice(0, days);
  },
};

export default API;
