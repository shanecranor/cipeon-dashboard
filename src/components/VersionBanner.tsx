export const VersionBanner = () => {
  return (
    <div className="p-version-banner">
      <p>hack night</p>
      <p>Version: 0.{weeksPast(1723256301120 - 4320000) + 8}</p>
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

// Example usage:
const startDate = "2024-01-01";
console.log(weeksPast(startDate)); // Outputs the number of weeks since January 1, 2024
