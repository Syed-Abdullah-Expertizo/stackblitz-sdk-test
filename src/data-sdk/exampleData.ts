import type { Project } from '@stackblitz/sdk';

const INDEX_HTML = `
<h1>date-fns example</h1>
<div id="output"></div>
`;

const INDEX_JS = `
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

const examples = [
  format(new Date(), "'Today is a' eeee"),
  formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }),
  formatRelative(subDays(new Date(), 3), new Date()),
];

document.getElementById('output').innerHTML = examples
  .map((result) => \`<samp>\${result}</samp>\`)
  .join('<br>');
`;

export const exampleProjectPrompt: Project = {
  title: 'Dynamically Generated Project',
  description: 'Simple example using the EngineBlock "javascript" template.',
  template: 'javascript',
  files: {
    'index.html': INDEX_HTML,
    'index.js': INDEX_JS,
  },
  dependencies: {
    'date-fns': '^2',
  },
};
