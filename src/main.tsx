import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppLayout } from "./components/AppLayout.tsx";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<AppLayout />
		</StrictMode>,
	);
}
