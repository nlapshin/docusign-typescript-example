import docusign from 'docusign-esign';

// api without problems
const api = new docusign.ApiClient()

// Error: Property 'Document' does not exist on type 'typeof import("/home/nik/projects/test/docusign-typescript-example/node_modules/@types/docusign-esign/index")'.ts(2339)
const document = new docusign.Document()
