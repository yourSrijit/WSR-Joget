import React from "react";
import useMarkdownStore from "../store/useMarkdownStore.js";


export default function MarkdownPreview() {
  const { markdownText } = useMarkdownStore();

  // Convert markdown to basic HTML
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            color: #e6edf3;
            padding: 16px;
            line-height: 1.6;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #4caf50;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          p { margin: 8px 0; }
          code {
            background-color: #1e1e1e;
            color: #ffb86c;
            padding: 2px 4px;
            border-radius: 4px;
          }
          pre {
            background-color: #1e1e1e;
            color: #dcdcdc;
            padding: 10px;
            border-radius: 8px;
            overflow-x: auto;
          }
          strong { color: #f78c6c; }
          em { color: #82aaff; }
          a { color: #61dafb; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        ${markdownText
          .replace(/^### (.*$)/gim, "<h3>$1</h3>")
          .replace(/^## (.*$)/gim, "<h2>$1</h2>")
          .replace(/^# (.*$)/gim, "<h1>$1</h1>")
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>")
          .replace(/`(.*?)`/g, "<code>$1</code>")
          .replace(/\n/g, "<br />")}
      </body>
    </html>
  `;

  return (
    <iframe
      title="Markdown Preview"
      srcDoc={htmlContent}
      style={{
        width: "100%",
        height: "300px",
        border: "1px solid #333",
        borderRadius: "8px",
        marginTop: "10px",
      }}
    />
  );
}
