// eslint-disable-next-line import/no-unresolved
import concurrently from "concurrently";

const { result } = concurrently(["npm:lint:*(!fix)"], {
  prefixColors: "auto",
  maxProcesses: process.env.CI ? 1 : undefined,
});

try {
  await result;
} catch {
  process.exit(1);
}
