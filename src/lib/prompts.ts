import inquirer from 'inquirer';

/**
 * Gera um prompt em forma de lista e aguarda a seleção do usuário
 */
export async function promptSelect({
  message,
  choices,
}: {
  message: string;
  choices: Array<string>;
}) {
  const { resposta } = await inquirer.prompt({
    type: 'list',
    name: 'resposta',
    message,
    choices: choices.map((choice, idx) => {
      return {
        name: choice,
        value: String(idx),
      };
    }),
    loop: false,
  });

  return Number.parseInt(resposta);
}

/**
 * Gera um prompt simples e aguarda a resposta do usuário
 */
export async function promptInput({
  message,
  defaultValue,
  validateFunction,
}: {
  message: string;
  defaultValue?: string;
  validateFunction?: (valor: string) => boolean | string;
}): Promise<string> {
  const { resposta } = await inquirer.prompt({
    type: 'input',
    name: 'resposta',
    message,
    default: defaultValue,
    validate: validateFunction,
  });

  return resposta;
}
