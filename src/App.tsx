import { MantineProvider, Text } from "@mantine/core";
import Calendar from "./components/Calendar";

export default function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
      }}
    >
      <Calendar />
    </MantineProvider>
  );
}
