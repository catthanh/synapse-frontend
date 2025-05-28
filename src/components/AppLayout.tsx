import { SynapseEditor } from "./SynapseEditor"; // <-- Import the editor

export const AppLayout = () => {
	return (
		<div className="flex h-screen bg-gray-900 text-white">
			{/* Sidebar */}
			<aside className="w-64 bg-gray-800 p-4 border-r border-gray-700">
				<h1 className="text-xl font-bold">Synapse</h1>
				{/* We'll add navigation links here later */}
			</aside>

			{/* Main Content Area */}
			<main className="flex-1 p-8">
				{/* Replace the old placeholder with our new editor */}
				<SynapseEditor />
			</main>
		</div>
	);
};
