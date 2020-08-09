export function durationSecToMmSs(durationInSeconds) {
  return new Date(durationInSeconds * 1000).toISOString().substr(14, 5);
}

export function sortTracksByDuration(tracks, sortValue) {
  const sortedTracks = [...tracks];

  if (sortValue === 'ascending') {
    sortedTracks.sort((a, b) => a.duration - b.duration);
  }

  if (sortValue === 'descending') {
    sortedTracks.sort((a, b) => b.duration - a.duration);
  }

  return sortedTracks;
}
