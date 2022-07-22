module.exports = plop => {
  const promptInputGetName = message => ({
    type: 'input',
    name: 'name',
    message,
  });

  const promptInputGetAtomicType = {
    type: 'list',
    name: 'atomicType',
    choices: ['Atoms', 'Molecules', 'Organisms', 'Templates'],
    message: 'What is the component type?',
  };

  const actionModifyFromTemplate = (
    destinationPath,
    pattern,
    template,
    abortOnFail = true,
  ) => ({
    type: 'modify',
    path: destinationPath,
    pattern,
    template,
    abortOnFail,
  });

  const actionAddFromTemplate = (sourcePath, destinationPath) => ({
    type: 'add',
    path: destinationPath,
    templateFile: sourcePath,
    skipIfExists: true,
  });

  // Destination Paths
  const srcDestinationPath = '../../src';
  const componentDestinationPath = `${srcDestinationPath}/components/{{pascalCase atomicType}}/{{pascalCase name}}`;
  const pageDestinationPath = `${srcDestinationPath}/page/{{pascalCase name}}`;

  // Source Paths
  const templateFolder = './templates';
  const componentSourcePath = `${templateFolder}/component`;
  const pageSourcePath = `${templateFolder}/page`;

  const generators = [
    {
      name: 'Component',
      object: {
        description:
          'This is a Skeleton Component with styles, types and tests',
        prompts: [
          promptInputGetName('Component name?'),
          promptInputGetAtomicType,
        ],
        actions: [
          actionModifyFromTemplate(
            `${srcDestinationPath}/components/{{pascalCase atomicType}}/index.ts`,
            /(\/\/ EXPORTS)/g,
            "export { default as {{pascalCase name}} } from './{{pascalCase name}}';\n$1",
          ),
          actionModifyFromTemplate(
            `${srcDestinationPath}/components/index.ts`,
            /(\/\/ {{pascalCase atomicType}} )/g,
            '',
            false,
          ),
          actionAddFromTemplate(
            `${componentSourcePath}/index.tsx.hbs`,
            `${componentDestinationPath}/index.tsx`,
          ),
          actionAddFromTemplate(
            `${componentSourcePath}/Name.tsx.hbs`,
            `${componentDestinationPath}/{{pascalCase name}}.tsx`,
          ),
          actionAddFromTemplate(
            `${componentSourcePath}/style.ts.hbs`,
            `${componentDestinationPath}/{{pascalCase name}}.style.ts`,
          ),
          actionAddFromTemplate(
            `${componentSourcePath}/test.tsx.hbs`,
            `${componentDestinationPath}/{{pascalCase name}}.test.tsx`,
          ),
          actionAddFromTemplate(
            `${componentSourcePath}/types.ts.hbs`,
            `${componentDestinationPath}/{{pascalCase name}}.types.ts`,
          ),
        ],
      },
    },
    {
      name: 'Page',
      object: {
        description: 'This is a Skeleton Page with styles',
        prompts: [promptInputGetName('Page name?')],
        actions: [
          actionAddFromTemplate(
            `${pageSourcePath}/index.tsx.hbs`,
            `${pageDestinationPath}/index.tsx`,
          ),
          actionAddFromTemplate(
            `${pageSourcePath}/Name.tsx.hbs`,
            `${pageDestinationPath}/{{pascalCase name}}.tsx`,
          ),
          actionAddFromTemplate(
            `${pageSourcePath}/style.ts.hbs`,
            `${pageDestinationPath}/{{pascalCase name}}.style.ts`,
          ),
        ],
      },
    },
  ];

  generators.forEach(generator => {
    plop.setGenerator(generator.name, generator.object);
  });
};
