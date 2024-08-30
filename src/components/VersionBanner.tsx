const lastMajorVersion = new Date('2024-8-22') // 1.0 - Friday
const indexDate = new Date(); 
indexDate.setDate(lastMajorVersion.getDate() - 1);

export const VersionBanner = () => {
  return (
    <div className="p-version-banner">
      <p>Hack Night</p>
      <p className="pulsing">v1.{weeksPast(indexDate)}</p>
      <p className="tagline">action reaction</p>
    </div>
  );
};

function weeksPast(start: Date) {
  const currentDate = Date.now();
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  const elapsedMilliseconds = currentDate - start.getTime();
  const weeks = Math.floor(elapsedMilliseconds / millisecondsPerWeek);
  return weeks;
}
