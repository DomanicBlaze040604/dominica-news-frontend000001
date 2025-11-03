import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = "Write your content here...",
  height = "400px"
}) => {
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'align': [] }],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        ['clean']
      ],
    },
    clipboard: {
      matchVisual: false,
    }
  }), []);

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'list', 'bullet', 'indent',
    'direction', 'align',
    'blockquote', 'code-block',
    'link', 'image', 'video'
  ];

  return (
    <div className="rich-text-editor">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{
          height: height,
          marginBottom: '42px' // Account for toolbar height
        }}
      />
      <style>{`
        .rich-text-editor .ql-editor {
          min-height: ${height};
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .rich-text-editor .ql-toolbar {
          border-top: 1px solid #e2e8f0;
          border-left: 1px solid #e2e8f0;
          border-right: 1px solid #e2e8f0;
          border-radius: 6px 6px 0 0;
          background: #f8fafc;
        }
        
        .rich-text-editor .ql-container {
          border-bottom: 1px solid #e2e8f0;
          border-left: 1px solid #e2e8f0;
          border-right: 1px solid #e2e8f0;
          border-radius: 0 0 6px 6px;
          font-family: inherit;
        }
        
        .rich-text-editor .ql-editor.ql-blank::before {
          color: #9ca3af;
          font-style: normal;
        }
        
        .rich-text-editor .ql-toolbar .ql-formats {
          margin-right: 8px;
        }
        
        .rich-text-editor .ql-toolbar button {
          padding: 4px 6px;
          margin: 0 1px;
        }
        
        .rich-text-editor .ql-toolbar button:hover {
          background-color: #e2e8f0;
          border-radius: 3px;
        }
        
        .rich-text-editor .ql-toolbar button.ql-active {
          background-color: #3b82f6;
          color: white;
          border-radius: 3px;
        }
        
        .rich-text-editor .ql-picker-label {
          padding: 4px 8px;
        }
        
        .rich-text-editor .ql-picker-label:hover {
          background-color: #e2e8f0;
          border-radius: 3px;
        }
        
        /* Custom styles for better integration */
        .rich-text-editor .ql-editor h1 {
          font-size: 2em;
          font-weight: bold;
          margin: 0.67em 0;
        }
        
        .rich-text-editor .ql-editor h2 {
          font-size: 1.5em;
          font-weight: bold;
          margin: 0.75em 0;
        }
        
        .rich-text-editor .ql-editor h3 {
          font-size: 1.17em;
          font-weight: bold;
          margin: 0.83em 0;
        }
        
        .rich-text-editor .ql-editor blockquote {
          border-left: 4px solid #e2e8f0;
          padding-left: 16px;
          margin: 16px 0;
          font-style: italic;
          color: #6b7280;
        }
        
        .rich-text-editor .ql-editor pre {
          background-color: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 4px;
          padding: 12px;
          overflow-x: auto;
        }
        
        .rich-text-editor .ql-editor img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }
        
        .rich-text-editor .ql-editor a {
          color: #3b82f6;
          text-decoration: underline;
        }
        
        .rich-text-editor .ql-editor a:hover {
          color: #1d4ed8;
        }
        
        /* Additional formatting styles */
        .rich-text-editor .ql-editor ul, 
        .rich-text-editor .ql-editor ol {
          padding-left: 1.5em;
        }
        
        .rich-text-editor .ql-editor li {
          margin: 0.25em 0;
        }
        
        .rich-text-editor .ql-editor strong {
          font-weight: 600;
        }
        
        .rich-text-editor .ql-editor em {
          font-style: italic;
        }
        
        .rich-text-editor .ql-editor u {
          text-decoration: underline;
        }
        
        .rich-text-editor .ql-editor s {
          text-decoration: line-through;
        }
        
        /* Table styles */
        .rich-text-editor .ql-editor table {
          border-collapse: collapse;
          width: 100%;
          margin: 1em 0;
        }
        
        .rich-text-editor .ql-editor table td,
        .rich-text-editor .ql-editor table th {
          border: 1px solid #e5e7eb;
          padding: 8px 12px;
          text-align: left;
        }
        
        .rich-text-editor .ql-editor table th {
          background-color: #f9fafb;
          font-weight: 600;
        }
        
        /* Focus styles */
        .rich-text-editor .ql-container.ql-snow {
          border: 1px solid #e2e8f0;
        }
        
        .rich-text-editor .ql-editor:focus {
          outline: none;
        }
        
        .rich-text-editor:focus-within .ql-container {
          border-color: #3b82f6;
          box-shadow: 0 0 0 1px #3b82f6;
        }
      `}</style>
    </div>
  );
};