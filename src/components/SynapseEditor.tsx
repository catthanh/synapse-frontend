import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

// This is our new editor component
export const SynapseEditor = () => {
	const editor = useEditor({
		// extensions are the features we add to the editor
		extensions: [StarterKit],
		// this is the initial content
		content: `
      <h2>Welcome to Synapse!</h2>
      <p>This is your brand new, shiny editor. Start typing here!</p>
      <p>You can use <b>bold</b>, <i>italics</i>, and more. Just start typing.</p>
    `,
		// Basic editor styling
		editorProps: {
			attributes: {
				class: "prose prose-invert focus:outline-none max-w-full",
			},
		},
	});

	return (
		<div className="bg-gray-800 rounded-md p-4 border border-gray-600 h-full">
			<EditorContent editor={editor} />
		</div>
	);
};
