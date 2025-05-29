'use client';
import { MoveRight } from 'lucide-react';
import cssToJsStyles from '@/app/lib/css-to-js';
import { useState } from 'react';

export default function Page() {
  const [cssInput, setCssInput] = useState('');
  const [elementName, setElementName] = useState('element');
  const [convertedJs, setConvertedJs] = useState('');

  const handleConvert = () => {
    const js = cssToJsStyles(cssInput, elementName || 'element');
    setConvertedJs(js);
  };

  return (
    <>
      <h1 className="mt-6 text-center text-4xl font-bold">
        CSS Styles to JS Converter
      </h1>
      <main className="mt-8 flex h-full flex-row items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <label htmlFor="input" className="text-lg font-semibold">
            Input CSS Styles:
          </label>
          <textarea
            name="input"
            id="input"
            className="h-28 w-64 resize-none rounded border border-gray-400 p-2 text-gray-700"
            value={cssInput}
            onChange={(e) => setCssInput(e.target.value)}
          ></textarea>

          <label htmlFor="elementName" className="text-sm text-white">
            Optional element/variable name:
          </label>
          <input
            type="text"
            name="elementName"
            id="elementName"
            className="w-64 rounded border border-gray-400 p-2 text-gray-700"
            placeholder="e.g. element"
            value={elementName}
            onChange={(e) => setElementName(e.target.value)}
          />

          <button
            onClick={handleConvert}
            className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Convert
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <MoveRight className="h-8 w-8 text-white" />
        </div>

        <div className="flex flex-col items-center justify-center gap-2">
          <label htmlFor="output" className="text-lg font-semibold">
            Output JS Styles:
          </label>
          <textarea
            name="output"
            id="output"
            className="h-28 w-64 resize-none rounded border border-gray-400 p-2 text-gray-700"
            readOnly
            value={convertedJs}
          ></textarea>
        </div>
      </main>
    </>
  );
}
