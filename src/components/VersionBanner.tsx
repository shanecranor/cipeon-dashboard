export const VersionBanner = () => {
  return (
    <div className="p-version-banner">
      <p>Hack Night</p>
      <p className="pulsing">v1.{weeksPast(new Date('2024-8-26').getTime()) + 1}</p>
      <p className="tagline">action reaction</p>
    </div>
  );
};

function weeksPast(start: number) {
  const currentDate = Date.now();
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const elapsedMilliseconds = currentDate - start;
  const weeks = Math.floor(elapsedMilliseconds / millisecondsPerWeek);
  return weeks;
}
