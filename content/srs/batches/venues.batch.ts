import {
  developmentSeed,
  getSeedVenueLocation,
} from "@/content/srs/development-seed";
import type { Venue } from "@/lib/srs/types";

export const venueBatches: Venue[][] = [
  developmentSeed.venues.map((venue) => {
    const location = getSeedVenueLocation();

    return {
      id: venue.slug,
      slug: venue.slug,
      name: venue.name,
      // TODO: Confirm city/state from final venue records.
      city: location.city,
      state: location.state,
    };
  }),
];
